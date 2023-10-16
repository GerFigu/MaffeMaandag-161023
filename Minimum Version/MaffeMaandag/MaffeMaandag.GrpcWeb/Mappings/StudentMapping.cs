namespace MaffeMaandag.GrpcWeb.Mappings;

public static class StudentMapping
{
    public static Student ToGrpc(this Domain.Student student)
    {
        return new Student
        {
            Age = student.Age,
            FirstName = student.FirstName,
            LastName = student.LastName,
            Id = student.Id,
        };
    }

    public static IEnumerable<Student> ToGrpc(this IEnumerable<Domain.Student> students)
    {
        var grpcStudents = new List<Student>();
        
        foreach (var student in students)
        {
            grpcStudents.Add(student.ToGrpc());
        }

        return grpcStudents;
    }

    public static Domain.Student ToDomain(this Student student)
    {
        return new Domain.Student
        {
            Age = student.Age,
            FirstName = student.FirstName,
            LastName = student.LastName,
            Id = student.Id,
        };
    }

    public static IEnumerable<Domain.Student> ToDomain(this IEnumerable<Student> students)
    {
        var domainStudents = new List<Domain.Student>();

        foreach (var student in students)
        {
            domainStudents.Add(student.ToDomain());
        }

        return domainStudents;
    }
}
