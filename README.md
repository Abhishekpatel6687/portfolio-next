 toast.success("Success!", {
      description: "Your form was submitted and we’ll get back to you soon.",
    });
    toast.success("Saved!", {
      position: "buttom-center",
    });
    toast.success("Auto-closing in 3 sec", {
      duration: 15000, // milliseconds
    });
    toast.success("Yay!", {
      icon: "👏",
    });
    toast.success(
      <div>
        <strong>Form Sent!</strong>
        <p className="text-sm">We'll reply soon.</p>
      </div>
    );
    toast.success("Styled toast!", {
      style: {
        background: "darkGreen", // green-500
        color: "#fff",
        fontWeight: "bold",
      },
    });