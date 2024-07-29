function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["Javascript", "React", "Node", "MongoDB"],
        address: {
            city: "Los Angeles",
            state: "CA",
            country: "USA"
        }
    };
    var skills = member.skills;
    console.log(skills);
    // ["Javascript", "React", "Node", "MongoDB"]
}


