// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
sablono.util.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
sablono.util.ToString = (function (){var obj24683 = {};return obj24683;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (sablono.util.to_str[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (sablono.util.to_str["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj24685 = {};return obj24685;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (sablono.util.to_uri[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (sablono.util.to_uri["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
as_str.cljs$lang$applyTo = (function (arglist__24686){
var xs = cljs.core.seq(arglist__24686);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Removes all map entries where value is nil.
*/
sablono.util.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return m__$1;
} else
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,cljs.core.keys(m));
});
/**
* Like clojure.core/merge but concat :className entries.
* @param {...*} var_args
*/
sablono.util.merge_with_class = (function() { 
var merge_with_class__delegate = function (maps){var classes = cljs.core.vec(cljs.core.remove(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__24687_SHARP_){if(cljs.core.list_QMARK_(p1__24687_SHARP_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24687_SHARP_], null);
} else
{if(cljs.core.vector_QMARK_(p1__24687_SHARP_))
{return p1__24687_SHARP_;
} else
{if(cljs.core.constant$keyword$109)
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24687_SHARP_], null);
} else
{return null;
}
}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,maps))));var maps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps);if(cljs.core.empty_QMARK_(classes))
{return maps__$1;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maps__$1,cljs.core.constant$keyword$134,classes);
}
};
var merge_with_class = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_with_class__delegate.call(this,maps);};
merge_with_class.cljs$lang$maxFixedArity = 0;
merge_with_class.cljs$lang$applyTo = (function (arglist__24688){
var maps = cljs.core.seq(arglist__24688);
return merge_with_class__delegate(maps);
});
merge_with_class.cljs$core$IFn$_invoke$arity$variadic = merge_with_class__delegate;
return merge_with_class;
})()
;
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.util.normalize_element = (function normalize_element(p__24689){var vec__24692 = p__24689;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24692,0,null);var content = cljs.core.nthnext(vec__24692,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,tag,cljs.core.constant$keyword$136,content], null));
} else
{}
var vec__24693 = cljs.core.re_matches(sablono.util.re_tag,cljs.core.name(tag));var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,0,null);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,2,null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,3,null);var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,id,cljs.core.constant$keyword$134,(cljs.core.truth_(class$)?clojure.string.split.cljs$core$IFn$_invoke$arity$2(class$,/\./):null)], null);var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.compact_map(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0))),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.compact_map(tag_attrs),content], null);
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
sablono.util.react_symbol = (function react_symbol(tag){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name(tag))].join(''));
});
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3406__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})()))
{return [cljs.core.str(x__$1)].join('');
} else
{var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base)))
{return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,0,(cljs.core.count(base) - 1))),cljs.core.str(x__$1)].join('');
} else
{return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name(x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri([cljs.core.str(x)].join('')));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});
