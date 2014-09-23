// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
sablono.util.ToString = (function (){var obj43797 = {};return obj43797;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3546__auto__ = x;if(and__3546__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3546__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4185__auto__ = (((x == null))?null:x);return (function (){var or__3558__auto__ = (sablono.util.to_str[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (sablono.util.to_str["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj43799 = {};return obj43799;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3546__auto__ = x;if(and__3546__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3546__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4185__auto__ = (((x == null))?null:x);return (function (){var or__3558__auto__ = (sablono.util.to_uri[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (sablono.util.to_uri["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
})().call(null,x);
}
});
/**
* Converts its arguments into a string using to-str.
* @param {...*} var_args
*/
sablono.util.as_str = (function() { 
var as_str__delegate = function (xs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
};
var as_str = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,xs);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__43800){
var xs = cljs.core.seq(arglist__43800);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
*/
sablono.util.camel_case = (function camel_case(k){if(cljs.core.truth_(k))
{var vec__43802 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);var first_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43802,(0),null);var words = cljs.core.nthnext(vec__43802,(1));if((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))
{return k;
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else
{return null;
}
});
/**
* Recursively transforms all map keys into camel case.
*/
sablono.util.camel_case_keys = (function camel_case_keys(m){if(cljs.core.map_QMARK_(m))
{var ks = cljs.core.keys(m);var kmap = cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.camel_case,ks));var G__43804 = clojure.set.rename_keys(m,kmap);var G__43804__$1 = ((cljs.core.map_QMARK_(cljs.core.constant$keyword$884.cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__43804,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$884], null),camel_case_keys):G__43804);return G__43804__$1;
} else
{return m;
}
});
/**
* Converts all HTML attributes to their DOM equivalents.
*/
sablono.util.html_to_dom_attrs = (function html_to_dom_attrs(attrs){return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$885,cljs.core.constant$keyword$887,cljs.core.constant$keyword$886,cljs.core.constant$keyword$888], null));
});
/**
* Removes all map entries where the value of the entry is empty.
*/
sablono.util.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(cljs.core.empty_QMARK_(v))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Like clojure.core/merge but concatenate :class entries.
* @param {...*} var_args
*/
sablono.util.merge_with_class = (function() { 
var merge_with_class__delegate = function (maps){var classes = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__43805_SHARP_){if(cljs.core.list_QMARK_(p1__43805_SHARP_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43805_SHARP_], null);
} else
{if(cljs.core.sequential_QMARK_(p1__43805_SHARP_))
{return p1__43805_SHARP_;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43805_SHARP_], null);

}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$885,maps))));var maps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps);if(cljs.core.empty_QMARK_(classes))
{return maps__$1;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maps__$1,cljs.core.constant$keyword$885,classes);
}
};
var merge_with_class = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_with_class__delegate.call(this,maps);};
merge_with_class.cljs$lang$maxFixedArity = 0;
merge_with_class.cljs$lang$applyTo = (function (arglist__43806){
var maps = cljs.core.seq(arglist__43806);
return merge_with_class__delegate(maps);
});
merge_with_class.cljs$core$IFn$_invoke$arity$variadic = merge_with_class__delegate;
return merge_with_class;
})()
;
/**
* Strip the # and . characters from the beginning of `s`.
*/
sablono.util.strip_css = (function strip_css(s){if(cljs.core.truth_(s))
{return clojure.string.replace(s,/^[.#]/,"");
} else
{return null;
}
});
/**
* Match `s` as a CSS tag and return a vector of tag name, CSS id and
* CSS classes.
*/
sablono.util.match_tag = (function match_tag(s){var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));var vec__43810 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(("Can't match CSS tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$889,s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43810,(0),null);var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43810,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__43810,tag_name,names){
return (function (p1__43807_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__43807_SHARP_));
});})(matches,vec__43810,tag_name,names))
,names))),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__43810,tag_name,names){
return (function (p1__43808_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__43808_SHARP_));
});})(matches,vec__43810,tag_name,names))
,names)))], null);
});
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.util.normalize_element = (function normalize_element(p__43811){var vec__43814 = p__43811;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43814,(0),null);var content = cljs.core.nthnext(vec__43814,(1));if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid element name."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,tag,cljs.core.constant$keyword$850,content], null));
} else
{}
var vec__43815 = sablono.util.match_tag(tag);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43815,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43815,(1),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43815,(2),null);var tag_attrs = sablono.util.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,id,cljs.core.constant$keyword$885,class$], null));var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
* Join the `classes` with a whitespace.
*/
sablono.util.join_classes = (function join_classes(classes){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(classes));
});
/**
* Returns the React function to render `tag` as a symbol.
*/
sablono.util.react_symbol = (function react_symbol(tag){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",("React.DOM."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag))));
});
/**
* Same as `react-symbol` but wrap input and text elements.
*/
sablono.util.react_fn = (function react_fn(tag){if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,null,cljs.core.constant$keyword$891,null,cljs.core.constant$keyword$892,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag)))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sablono.interpreter",cljs.core.name(tag));
} else
{return sablono.util.react_symbol(tag);
}
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
sablono.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern(("\\s+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))+"\\s*=\\s*['\"][^\"']+['\"]"));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
sablono.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace(s,sablono.util.attr_pattern(attr),"");
} else
{return null;
}
});
/**
* Strip the outer HTML tag from the string `s`.
*/
sablono.util.strip_outer = (function strip_outer(s){if(cljs.core.truth_(s))
{return clojure.string.replace(clojure.string.replace(s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else
{return null;
}
});
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{var base = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_));if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name(x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});
