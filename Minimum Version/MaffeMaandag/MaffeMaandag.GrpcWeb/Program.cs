using MaffeMaandag.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddSingleton<StudentGrpcService>();

builder.Services.AddCors(o =>
{
    o.AddPolicy("OffCors", builder =>
    {
        //builder.WithOrigins("https://localhost:4200", "http://localhost:4200");
        builder.WithMethods("POST", "OPTIONS");
        builder.AllowAnyHeader();
        builder.WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding", "X-Grpc-Web", "User-Agent");
    });
});


var app = builder.Build();

app.UseHsts();
app.UseRouting();
app.UseCors("OffCors");
app.UseGrpcWeb();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<StudentGrpcService>()
        .EnableGrpcWeb()
        .RequireCors("OffCors");

    endpoints.MapGet("/", async context =>
    {
        await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
    });
});

app.Run();