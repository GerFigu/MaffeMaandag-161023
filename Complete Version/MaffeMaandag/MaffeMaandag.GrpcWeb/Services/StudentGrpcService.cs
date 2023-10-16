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

    public override async Task<StudentGetResponse> StudentGet(StudentGetRequest request, ServerCallContext context)
    {
        var student = students.SingleOrDefault(x => x.Id == request.Id);

        return new StudentGetResponse()
        {
            Student = student.ToGrpc()
        };
    }

    public override async Task<StudentSaveResponse> StudentCreate(StudentCreateRequest request, ServerCallContext context)
    {
        var newStudent = request.Student.ToDomain();
        newStudent.Id = GetCurrentStudentId();

        students.Add(newStudent);

        return new StudentSaveResponse()
        {
            FullName = newStudent.GetFullName()
        };
    }

    public override async Task<StudentSaveResponse> StudentUpdate(StudentUpdateRequest request, ServerCallContext context)
    {
        var updatedStudent = request.Student.ToDomain();

        var studentToBeUpdated = students.SingleOrDefault(s => s.Id == updatedStudent.Id);
        var index = students.IndexOf(studentToBeUpdated);
        students[index] = updatedStudent;

        return new StudentSaveResponse()
        {
            FullName = updatedStudent.GetFullName()
        };
    }

    public override async Task<EmptyResponse> StudentDelete(StudentDeleteRequest request, ServerCallContext context)
    {
        var studentToBeDeleted = students.Single(s => s.Id == request.Id);
        students.Remove(studentToBeDeleted);

        return new EmptyResponse();
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
    
    private int GetCurrentStudentId()
    {
        return students.OrderByDescending(s => s.Id).First().Id + 1;
    }
}