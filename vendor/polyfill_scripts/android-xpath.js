/* Android 2.x claims XPath support, but has none.  Force non-native
   XPath implementation in this case */
  if (document.implementation
      && document.implementation.hasFeature
      && document.implementation.hasFeature("XPath",null)
      && !document.evaluate) {
    window.jsxpath = {
      targetFrame: undefined,
      exportInstaller: false,
      useNative: false, /* force non-native implementation */
      useInnerText: true
    };
  }
