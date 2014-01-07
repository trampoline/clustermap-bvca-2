// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.render');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
sablono.render.HtmlRenderer = (function (){var obj15155 = {};return obj15155;
})();
sablono.render.render_html = (function render_html(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.sablono$render$HtmlRenderer$render_html$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.sablono$render$HtmlRenderer$render_html$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (sablono.render.render_html[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (sablono.render.render_html["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"HtmlRenderer.render-html",this$);
}
}
})().call(null,this$);
}
});
sablono.render.IJSValue = (function (){var obj15157 = {};return obj15157;
})();
sablono.render.to_js = (function to_js(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.sablono$render$IJSValue$to_js$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.sablono$render$IJSValue$to_js$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (sablono.render.to_js[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (sablono.render.to_js["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IJSValue.to-js",x);
}
}
})().call(null,x);
}
});
sablono.render.render_attrs = (function render_attrs(attrs){var attrs__$1 = cljs.core.clj__GT_js.call(null,attrs);var class$ = clojure.string.join.call(null," ",cljs.core.flatten.call(null,cljs.core.seq.call(null,attrs__$1.className)));if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,class$)))
{attrs__$1.className = class$;
} else
{}
return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.render.render_element = (function render_element(element){var vec__15159 = sablono.util.normalize_element.call(null,element);var tag = cljs.core.nth.call(null,vec__15159,0,null);var attrs = cljs.core.nth.call(null,vec__15159,1,null);var content = cljs.core.nth.call(null,vec__15159,2,null);var dom_fn = (React.DOM[cljs.core.name.call(null,tag)]);if(cljs.core.truth_(content))
{return dom_fn.call(null,sablono.render.render_attrs.call(null,attrs),sablono.render.render_html.call(null,content));
} else
{return dom_fn.call(null,sablono.render.render_attrs.call(null,attrs));
}
});
sablono.render.render_seq = (function render_seq(s){return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.render.render_html,s));
});
(sablono.render.HtmlRenderer["null"] = true);
(sablono.render.render_html["null"] = (function (this$){return null;
}));
(sablono.render.HtmlRenderer["_"] = true);
(sablono.render.render_html["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.PersistentVector.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_element.call(null,this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.IndexedSeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq.call(null,this$__$1);
});
cljs.core.List.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.List.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq.call(null,this$__$1);
});
cljs.core.LazySeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.LazySeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq.call(null,this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.ChunkedSeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq.call(null,this$__$1);
});
cljs.core.Cons.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.Cons.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq.call(null,this$__$1);
});

//# sourceMappingURL=render.js.map