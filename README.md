# Rolecall

A MERN stack application to keep track of, analyze, and apply for positions.

## Component Hierarchy

<img width="700" src=".github/assets/component-hierarchy.png"/>

## Data Structure

```js
// User
{
  username: String,
  password_digest: String,
  email: String,
}

// Job
{
  position: String,
  company: String,
  timeline: [
    {
      status: Enum["Found", "Applied", "Phone Screen", "Technical Assessment", "Behavioral Interview", "Misc", "Rejected", "Offered"],
      when: Date,
    }
  ],
  link: String<url>,
  source: String,
  notes: String,
  contact: String<email>,
  referral: Boolean,
  createdAt: Date,
  updatedAt: Date,
}
```
