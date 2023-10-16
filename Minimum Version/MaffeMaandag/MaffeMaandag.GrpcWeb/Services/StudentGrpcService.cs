using Grpc.Core;
using MaffeMaandag.GrpcWeb;
using MaffeMaandag.GrpcWeb.Mappings;

namespace MaffeMaandag.Services;

public class StudentGrpcService : StudentService.StudentServiceBase
{
    private IList<GrpcWeb.Domain.Student> students;

    public StudentGrpcService()
    {
        students = GrpcWeb.Domain.Student.GenerateStudents();
    }

    public override async Task<StudentsGetAllResponse> StudentsGetAll(EmptyRequest request, ServerCallContext context)
    {
        var grpcStudents = students.ToGrpc();

        var response = new StudentsGetAllResponse()
        {
            Students = { grpcStudents }
        };

        return response;
    }

    public override async Task<StudentsResetResponse> StudentsReset(EmptyRequest request, ServerCallContext context)
    {
        students = GrpcWeb.Domain.Student.GenerateStudents();

        var grpcStudents = students.ToGrpc();

        var response = new StudentsResetResponse()
        {
            Students = { grpcStudents }
        };

        return response;
    }

    /*
     * To do: create CRUD methods
     */
}