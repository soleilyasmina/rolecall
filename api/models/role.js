const { model, Schema } = require('mongoose');

const roleSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    position: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    remote: { type: Boolean, default: false },
    minSalary: Number,
    maxSalary: Number,
    timeline: [
      {
        status: {
          type: String,
          enum: {
            values: [
              'Found',
              'Applied',
              'Phone Screen',
              'Technical Assessment',
              'Behavioral Interview',
              'Misc',
              'Required',
              'Offered',
            ],
            message: '{VALUE} is not supported',
          },
          required: true,
        },
        when: { type: String, required: true },
      },
    ],
    link: {
      type: String,
      validate: {
        validator: (url) =>
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(
            url
          ),
        message: 'URL validation failed!',
      },
      required: true,
    },
    source: String,
    notes: String,
    contact: {
      type: String,
      validate: {
        validator: (email) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email),
        message: 'Email validation failed!',
      },
    },
    referral: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = model('roles', roleSchema);
