export const recent = (items) => {
  return items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const newestFound = (items) => {
  return recent(
    items.filter((item) => lastInArray(item.timeline).status === statuses[0])
  );
};

export const newestArchived = (items) => {
  return recent(
    items.filter((item) => lastInArray(item.timeline).status === statuses[6])
  );
};

export const stale = (items) => {
  return items.filter(
    (item) => new Date() - new Date(item.updatedAt) > 1210000000
  );
};

// name of profile section and relevant filter
const filters = {
  "newest-found": newestFound,
  "recent": recent,
  "newest-archived": newestArchived,
  "stale": stale 
}

// all names of profile sections
export const profiles = Object.keys(filters);

export const getRolesFromProfiles = (user, roles) => {
  // first get all sections from user profile
  const { profile } = user;
  // for each of these sections, apply the relevant filter and assign a list of roles for that section
  return profile.map((type) => filters[type](roles));
}

export const statuses = [
  "Found",
  "Applied",
  "Phone Screen",
  "Technical Assessment",
  "Behavioral Interview",
  "Misc",
  "Rejected",
  "Offered",
];

const colors = [
  "#4169e1",
  "#cb5fce",
  "#ff65a3",
  "#ff8e77",
  "#ffc45d",
  "#f9f871",
  "#454555",
  "#1fc198",
];

export const getColorFromStatus = (status) => colors[statuses.indexOf(status)];

export const lastInArray = (arr) => arr[arr.length - 1];
