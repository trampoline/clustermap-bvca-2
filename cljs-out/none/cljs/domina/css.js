// Compiled by ClojureScript 0.0-2138
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
var sel__2 = (function (base,expr){if(typeof domina.css.t15382 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t15382 = (function (expr,base,sel,meta15383){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta15383 = meta15383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t15382.cljs$lang$type = true;
domina.css.t15382.cljs$lang$ctorStr = "domina.css/t15382";
domina.css.t15382.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.css/t15382");
});
domina.css.t15382.prototype.domina$DomContent$ = true;
domina.css.t15382.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,(function (p1__15377_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__15377_SHARP_));
}),domina.nodes.call(null,self__.base));
});
domina.css.t15382.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__15378_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__15378_SHARP_));
}),domina.nodes.call(null,self__.base))));
});
domina.css.t15382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15384){var self__ = this;
var _15384__$1 = this;return self__.meta15383;
});
domina.css.t15382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15384,meta15383__$1){var self__ = this;
var _15384__$1 = this;return (new domina.css.t15382(self__.expr,self__.base,self__.sel,meta15383__$1));
});
domina.css.__GT_t15382 = (function __GT_t15382(expr__$1,base__$1,sel__$1,meta15383){return (new domina.css.t15382(expr__$1,base__$1,sel__$1,meta15383));
});
}
return (new domina.css.t15382(expr,base,sel,null));
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