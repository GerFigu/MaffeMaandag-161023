using System.Runtime.CompilerServices;

namespace MaffeMaandag.GrpcWeb.Domain;

public class Student
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }

    public string GetFullName()
    {
        return FirstName + " " + LastName;
    }

    public static IList<Student> GenerateStudents()
    {
        return new List<Student>
        {
            new Student { Id = 1, FirstName = "James", LastName = "Bond", Age = 31 },
            new Student { Id = 2, FirstName = "Robert", LastName = "Williams", Age = 28 },
            new Student { Id = 3, FirstName = "John", LastName = "Doe", Age = 76},
            new Student { Id = 4, FirstName = "Micheal", LastName = "Jackson", Age = 18 },
            new Student { Id = 5, FirstName = "David", LastName = "Benavidez", Age = 24 },
            new Student { Id = 6, FirstName = "Mary", LastName = "Land", Age = 59 },
            new Student { Id = 7, FirstName = "Patricia", LastName = "Rodriguez", Age = 12 },
            new Student { Id = 8, FirstName = "Jennifer", LastName = "Lopez", Age = 10 },
            new Student { Id = 9, FirstName = "Linda", LastName = "Bonita", Age = 6 },
            new Student { Id = 10, FirstName = "Elizabeth", LastName = "Taylor", Age = 38 },
        };
    }
}
