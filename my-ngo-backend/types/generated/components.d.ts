import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBeneficiary extends Struct.ComponentSchema {
  collectionName: 'components_shared_beneficiaries';
  info: {
    displayName: 'Beneficiary';
    icon: 'handHeart';
  };
  attributes: {
    initials: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteSettingsBankDetails extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_bank_details';
  info: {
    displayName: 'Bank Details';
    icon: 'briefcase';
  };
  attributes: {
    accountName: Schema.Attribute.String & Schema.Attribute.Required;
    accountNumber: Schema.Attribute.String & Schema.Attribute.Required;
    bankName: Schema.Attribute.String & Schema.Attribute.Required;
    donateNote: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteSettingsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_contact_infos';
  info: {
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    phones: Schema.Attribute.Component<'site-settings.phone-number', true> &
      Schema.Attribute.Required;
  };
}

export interface SiteSettingsPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_phone_numbers';
  info: {
    displayName: 'Phone Number';
    icon: 'phone';
  };
  attributes: {
    phone: Schema.Attribute.String;
  };
}

export interface SiteSettingsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'link';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface VolunteerVolunteerTask extends Struct.ComponentSchema {
  collectionName: 'components_volunteer_volunteer_tasks';
  info: {
    displayName: 'Volunteer Task';
    icon: 'bulletList';
  };
  attributes: {
    task: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.beneficiary': SharedBeneficiary;
      'site-settings.bank-details': SiteSettingsBankDetails;
      'site-settings.contact-info': SiteSettingsContactInfo;
      'site-settings.phone-number': SiteSettingsPhoneNumber;
      'site-settings.social-links': SiteSettingsSocialLinks;
      'volunteer.volunteer-task': VolunteerVolunteerTask;
    }
  }
}
