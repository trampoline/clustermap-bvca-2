// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('sablono.util');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('clojure.string');
sablono.interpreter.IInterpreter = (function (){var obj25085 = {};return obj25085;
})();
sablono.interpreter.interpret = (function interpret(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (sablono.interpreter.interpret["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});
sablono.interpreter.attributes = (function attributes(attrs){var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(cljs.core.seq(attrs__$1.className)));if(cljs.core.not(clojure.string.blank_QMARK_(class$)))
{attrs__$1.className = class$;
} else
{}
return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){var vec__25087 = sablono.util.normalize_element(element__$1);var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25087,0,null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25087,1,null);var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25087,2,null);var temp__4090__auto__ = (React.DOM[cljs.core.name(tag)]);if(cljs.core.truth_(temp__4090__auto__))
{var dom_fn = temp__4090__auto__;return (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.attributes(attrs),(((cljs.core.sequential_QMARK_(content)) && (typeof cljs.core.first(content) === 'string') && (cljs.core.empty_QMARK_(cljs.core.rest(content))))?sablono.interpreter.interpret(cljs.core.first(content)):(cljs.core.truth_(content)?sablono.interpreter.interpret(content):((cljs.core.constant$keyword$124)?null:null)))) : dom_fn.call(null,sablono.interpreter.attributes(attrs),(((cljs.core.sequential_QMARK_(content)) && (typeof cljs.core.first(content) === 'string') && (cljs.core.empty_QMARK_(cljs.core.rest(content))))?sablono.interpreter.interpret(cljs.core.first(content)):(cljs.core.truth_(content)?sablono.interpreter.interpret(content):((cljs.core.constant$keyword$124)?null:null)))));
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported HTML tag",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$153,tag,cljs.core.constant$keyword$156,attrs,cljs.core.constant$keyword$154,content], null));
}
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);
(sablono.interpreter.interpret["null"] = (function (this$){return null;
}));
(sablono.interpreter.IInterpreter["_"] = true);
(sablono.interpreter.interpret["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.element(this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
