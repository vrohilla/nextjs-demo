import { revalidatePath } from "next/cache";
type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers () {
    const response = await fetch("https://6805cbbbca467c15be69f2aa.mockapi.io/users");
    const users = await response.json();

    async function addUser(formData : FormData){
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://6805cbbbca467c15be69f2aa.mockapi.io/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }), 

        });
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }
    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2" />
                <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded">Add Users</button>
            </form>
        
        <div className="grid grid-cols-4 gap-4 py-10">
            {users.map((user: MockUser) => (
                <div
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    {user.name}
                </div>
            ))}
        </div>
        </div>
    );
}