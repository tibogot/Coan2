interface ProfileType {
  id: number;
  name: string;
  title: string;
  image: string;
  countries: string[];
}

const PROFILES: ProfileType[] = [
  {
    id: 1,
    name: "Chief Christian Nwogu",
    title: "Chairman",
    image: "/Chairman-scaled-tiny.jpg",
    countries: ["Allemagne", "Luxembourg"],
  },
  {
    id: 2,
    name: "Engr. Chukwudi Nwogu",
    title: "Co-Founder & CEO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/MD-scaled-e1692892180900.jpg",
    countries: ["Allemagne", "France"],
  },
  {
    id: 3,
    name: "Nonso Nwogwu",
    title: "Director",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-1405963.jpg",
    countries: ["France"],
  },
  {
    id: 4,
    name: "Engr Ralf Jonas",
    title: "CTO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-2474307.jpg",
    countries: ["USA"],
  },
  {
    id: 5,
    name: "Mr Ugwu Osita Sabastine",
    title: "Accountant",
    image:
      "https://coanwaltd.com/wp-content/uploads/2018/12/Mr-Ugwu-Osita-Sabastine.jpg",
    countries: ["UK"],
  },
  {
    id: 6,
    name: "Akubor George",
    title: "Secretary",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/George-Edited.jpg ",
    countries: ["UK"],
  },
  {
    id: 7,
    name: "Mr Osagie Omoragbon",
    title: "Admin Manager",
    image:
      "https://coanwaltd.com/wp-content/uploads/2018/12/Mr-Omoragbon-Paul-Osagie-768x1024.jpg ",
    countries: ["UK"],
  },
];

const ProfilesGrid = () => {
  return (
    <div className="font-NHD w-full px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROFILES.map((profile) => (
          <div
            key={profile.id}
            className="profile-card group relative flex h-[400px] w-full cursor-pointer flex-col md:h-[600px]"
          >
            {/* Image wrapper to keep container size fixed */}
            <div className="h-[80%] w-full overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-full w-full transform rounded-sm object-cover transition-transform duration-600 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between p-4">
              <h3>{profile.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{profile.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesGrid;
