function NewPost() {
    const [newPost, setNewPost] = useState("");
    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = async (data) => {
    const post = JSON.stringify(data);
    try {
    const response = await fetch("https://qshsfj-8080.csb.app/api/post", {
    method: "post", headers: {
    'Accept': 'application /json',
    'Content-Type':'application/json',
    },
    body: post,
    });
    if (response.ok) setNewPost("Post created successfully!");
    } catch (error) {
    console.error("Error creating data:", error);
    setNewPost("Post created failed!");
    }
    };
}