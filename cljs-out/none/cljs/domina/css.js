// Compiled by ClojureScript 0.0-2173
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t28923 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t28923 = (function (expr,base,sel,meta28924){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta28924 = meta28924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t28923.cljs$lang$type = true;
domina.css.t28923.cljs$lang$ctorStr = "domina.css/t28923";
domina.css.t28923.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.css/t28923");
});
domina.css.t28923.prototype.domina$DomContent$ = true;
domina.css.t28923.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,(function (p1__28918_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__28918_SHARP_));
}),domina.nodes.call(null,self__.base));
});
domina.css.t28923.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__28919_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__28919_SHARP_));
}),domina.nodes.call(null,self__.base))));
});
domina.css.t28923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28925){var self__ = this;
var _28925__$1 = this;return self__.meta28924;
});
domina.css.t28923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28925,meta28924__$1){var self__ = this;
var _28925__$1 = this;return (new domina.css.t28923(self__.expr,self__.base,self__.sel,meta28924__$1));
});
domina.css.__GT_t28923 = (function __GT_t28923(expr__$1,base__$1,sel__$1,meta28924){return (new domina.css.t28923(expr__$1,base__$1,sel__$1,meta28924));
});
}
return (new domina.css.t28923(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;

//# sourceMappingURL=css.js.map