function ProjectCard({ project }) {
  const { title, description, imageUrl, projectUrl } = project;

  const hasValidUrl = projectUrl && projectUrl.trim() !== "";

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg overflow-hidden mb-6">
      {/* Left side: title, description, and link */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        {hasValidUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Project
          </a>
        ) : (
          <button
            disabled
            className="inline-block px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>

      {/* Right side: image */}
      <div className="w-1/3 h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
