// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('sablono.util');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('clojure.string');
sablono.interpreter.IInterpreter = (function (){var obj15603 = {};return obj15603;
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
{throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});
sablono.interpreter.attributes = (function attributes(attrs){var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));var class$ = clojure.string.join.call(null," ",cljs.core.flatten.call(null,cljs.core.seq.call(null,attrs__$1.className)));if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,class$)))
{attrs__$1.className = class$;
} else
{}
return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){var vec__15605 = sablono.util.normalize_element.call(null,element__$1);var tag = cljs.core.nth.call(null,vec__15605,0,null);var attrs = cljs.core.nth.call(null,vec__15605,1,null);var content = cljs.core.nth.call(null,vec__15605,2,null);var temp__4090__auto__ = (React.DOM[cljs.core.name.call(null,tag)]);if(cljs.core.truth_(temp__4090__auto__))
{var dom_fn = temp__4090__auto__;return dom_fn.call(null,sablono.interpreter.attributes.call(null,attrs),(((cljs.core.sequential_QMARK_.call(null,content)) && (typeof cljs.core.first.call(null,content) === 'string') && (cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,content))))?sablono.interpreter.interpret.call(null,cljs.core.first.call(null,content)):(cljs.core.truth_(content)?sablono.interpreter.interpret.call(null,content):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null))));
} else
{throw cljs.core.ex_info.call(null,"Unsupported HTML tag",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",1014018828),tag,new cljs.core.Keyword(null,"attrs","attrs",1107056660),attrs,new cljs.core.Keyword(null,"content","content",1965434859),content], null));
}
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);
(sablono.interpreter.interpret["null"] = (function (this$){return null;
}));
(sablono.interpreter.IInterpreter["_"] = true);
(sablono.interpreter.interpret["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.element.call(null,this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
