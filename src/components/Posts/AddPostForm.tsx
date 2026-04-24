import { useDashboardStore } from "../../stores/dashboardStore";
import { useState } from "react";
import { postSchema, type PostFormData } from "../../schemas";

function AddPostForm({ userId }: { userId: number }) {
  const { addPost } = useDashboardStore();
  const [form, setForm] = useState<PostFormData>({ title: "", body: "" });
  const [errors, setErrors] = useState<Partial<PostFormData>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof PostFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = postSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<PostFormData> = {};
      result.error.issues.forEach((error) => {
        fieldErrors[error.path[0] as keyof PostFormData] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }
    addPost(result.data, userId);
    setForm({ title: "", body: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div>
      <h3 className="text-2xl text-green-color font-bold font-outfit">
        Add New Post
      </h3>

      {submitted ? (
        <div className="text-green-color font-outfit">
          Post is added successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 my-2 font-outfit">
              Post Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter post title"
              className={`w-full border rounded-lg font-outfit px-3 py-2 text-sm ${
                errors.title ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 font-outfit text-xs mt-1">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 font-outfit mb-1">
              Body Content or Description
            </label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              rows={4}
              placeholder="Write your post content..."
              className={`w-full border rounded-lg font-outfit px-3 py-2 text-sm  ${
                errors.body ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.body && (
              <p className="text-red-500 font-outfit text-xs mt-1">
                {errors.body}
              </p>
            )}
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg font-outfit bg-green-color text-white text-sm font-medium hover:bg-green-700"
            >
              Add Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddPostForm;
