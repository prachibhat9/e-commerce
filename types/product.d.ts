export interface IProduct {
  id: any;
  localizeInfos: { title: any };
  price: any;
  attributeValues: {
    p_image: { value: { downloadLink: any } };
    p_title: { value: any };
    p_price:any;
    p_description:{value:any};
  };
}