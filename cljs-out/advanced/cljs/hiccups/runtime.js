// Compiled by ClojureScript 0.0-2322
goog.provide('hiccups.runtime');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
hiccups.runtime.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Characters to replace when escaping HTML
*/
hiccups.runtime.character_escapes = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
/**
* A list of tags that need an explicit ending tag when rendered.
*/
hiccups.runtime.container_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 33, ["table",null,"canvas",null,"body",null,"h3",null,"dt",null,"label",null,"fieldset",null,"form",null,"em",null,"option",null,"h2",null,"h4",null,"style",null,"span",null,"script",null,"ol",null,"dd",null,"a",null,"head",null,"textarea",null,"i",null,"div",null,"b",null,"h5",null,"pre",null,"ul",null,"iframe",null,"strong",null,"html",null,"h1",null,"li",null,"dl",null,"h6",null], null), null);
hiccups.runtime.as_str = (function as_str(x){if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))
{return cljs.core.name(x);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}
});
hiccups.runtime._STAR_html_mode_STAR_ = cljs.core.constant$keyword$1512;
hiccups.runtime.xml_mode_QMARK_ = (function xml_mode_QMARK_(){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hiccups.runtime._STAR_html_mode_STAR_,cljs.core.constant$keyword$1512);
});
hiccups.runtime.in_mode = (function in_mode(mode,f){var _STAR_html_mode_STAR_50023 = hiccups.runtime._STAR_html_mode_STAR_;try{hiccups.runtime._STAR_html_mode_STAR_ = mode;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_50023;
}});
/**
* Change special characters into HTML character entities.
*/
hiccups.runtime.escape_html = (function escape_html(text){return clojure.string.escape(hiccups.runtime.as_str(text),hiccups.runtime.character_escapes);
});
hiccups.runtime.h = hiccups.runtime.escape_html;
hiccups.runtime.end_tag = (function end_tag(){if(hiccups.runtime.xml_mode_QMARK_())
{return " />";
} else
{return ">";
}
});
hiccups.runtime.xml_attribute = (function xml_attribute(name,value){return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.as_str(name))+"=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.escape_html(value))+"\"");
});
hiccups.runtime.render_attribute = (function render_attribute(p__50024){var vec__50026 = p__50024;var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50026,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50026,(1),null);if(value === true)
{if(hiccups.runtime.xml_mode_QMARK_())
{return hiccups.runtime.xml_attribute(name,name);
} else
{return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.as_str(name)));
}
} else
{if(cljs.core.not(value))
{return "";
} else
{return hiccups.runtime.xml_attribute(name,value);

}
}
});
hiccups.runtime.render_attr_map = (function render_attr_map(attrs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(hiccups.runtime.render_attribute,attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
hiccups.runtime.normalize_element = (function normalize_element(p__50027){var vec__50030 = p__50027;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50030,(0),null);var content = cljs.core.nthnext(vec__50030,(1));if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid tag name");
} else
{}
var vec__50031 = cljs.core.re_matches(hiccups.runtime.re_tag,hiccups.runtime.as_str(tag));var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(0),null);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(2),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50031,(3),null);var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1140,id,cljs.core.constant$keyword$1227,(cljs.core.truth_(class$)?clojure.string.replace(class$,"."," "):null)], null);var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
* Render a tag vector as a HTML element.
*/
hiccups.runtime.render_element = (function render_element(element){var vec__50033 = hiccups.runtime.normalize_element(element);var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50033,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50033,(1),null);var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50033,(2),null);if(cljs.core.truth_((function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1 ? hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1(tag) : hiccups.runtime.container_tags.call(null,tag));
}
})()))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(attrs))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((hiccups.runtime.render_html.cljs$core$IFn$_invoke$arity$1 ? hiccups.runtime.render_html.cljs$core$IFn$_invoke$arity$1(content) : hiccups.runtime.render_html.call(null,content)))+"</"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+">");
} else
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(attrs))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.end_tag()));
}
});
/**
* Turn a Clojure data type into a string of HTML.
*/
hiccups.runtime.render_html = (function render_html(x){if(cljs.core.vector_QMARK_(x))
{return hiccups.runtime.render_element(x);
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(render_html,x));
} else
{return hiccups.runtime.as_str(x);

}
}
});
