import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonColor: Schema.Attribute.String;
    buttonHover: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
  };
}

export interface CompanyNameCompanyName extends Struct.ComponentSchema {
  collectionName: 'components_company_name_company_names';
  info: {
    displayName: 'CompanyName';
  };
  attributes: {
    companyColor: Schema.Attribute.String;
    companyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    companyName: Schema.Attribute.String;
    companyUrl: Schema.Attribute.String;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    headingColor: Schema.Attribute.String;
    mainHeading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    subheadingColor: Schema.Attribute.String;
  };
}

export interface InfoBlockInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_info_block_info_blocks';
  info: {
    description: '';
    displayName: 'InfoBlock';
  };
  attributes: {
    headingColor: Schema.Attribute.String;
    infoHeading: Schema.Attribute.String;
    infoIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    infoSubheading: Schema.Attribute.Text;
    subheadingColor: Schema.Attribute.String;
  };
}

export interface LinktextLinkText extends Struct.ComponentSchema {
  collectionName: 'components_linktext_link_texts';
  info: {
    displayName: 'LinkText';
  };
  attributes: {
    linkColor: Schema.Attribute.String;
    linkHover: Schema.Attribute.String;
    linkName: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
  };
}

export interface NavbarItemsNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_navbar_items_navbar_items';
  info: {
    displayName: 'NavbarItems';
  };
  attributes: {
    itemColor: Schema.Attribute.String;
    itemHover: Schema.Attribute.String;
    items: Schema.Attribute.JSON;
    pageName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.button': ButtonButton;
      'company-name.company-name': CompanyNameCompanyName;
      'heading.heading': HeadingHeading;
      'info-block.info-block': InfoBlockInfoBlock;
      'linktext.link-text': LinktextLinkText;
      'navbar-items.navbar-items': NavbarItemsNavbarItems;
    }
  }
}
