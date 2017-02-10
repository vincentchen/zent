const helper = {
  getCalculatedWidth(width) {
    if (width) {
      width = `${width}`;
      if (!(/px$|%$/.test(width))) {
        width += '%';
      }
    } else {
      width = '';
    }

    return width;
  }
};

export default helper;