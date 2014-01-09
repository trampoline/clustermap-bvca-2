// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.search.search_box = (function search_box(data){if(typeof clustermap.search.t10921 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t10921 = (function (data,search_box,meta10922){
this.data = data;
this.search_box = search_box;
this.meta10922 = meta10922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t10921.cljs$lang$type = true;
clustermap.search.t10921.cljs$lang$ctorStr = "clustermap.search/t10921";
clustermap.search.t10921.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t10921");
});
clustermap.search.t10921.prototype.om$core$IRender$ = true;
clustermap.search.t10921.prototype.om$core$IRender$render$arity$1 = (function (this__9163__auto__){var self__ = this;
var this__9163__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,React.DOM.input({"type": "text", "placeholder": new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(self__.data)}),React.DOM.button({"type": "reset"},"\u00D7")));
});
clustermap.search.t10921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10923){var self__ = this;
var _10923__$1 = this;return self__.meta10922;
});
clustermap.search.t10921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10923,meta10922__$1){var self__ = this;
var _10923__$1 = this;return (new clustermap.search.t10921(self__.data,self__.search_box,meta10922__$1));
});
clustermap.search.__GT_t10921 = (function __GT_t10921(data__$1,search_box__$1,meta10922){return (new clustermap.search.t10921(data__$1,search_box__$1,meta10922));
});
}
return (new clustermap.search.t10921(data,search_box,null));
});
clustermap.search.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.search.search_box,document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map