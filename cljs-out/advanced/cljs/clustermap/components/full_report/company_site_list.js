// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__36634){var map__36643 = p__36634;var map__36643__$1 = ((cljs.core.seq_QMARK_(map__36643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36643):map__36643);var opts = map__36643__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,cljs.core.constant$keyword$878);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,cljs.core.constant$keyword$879);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$880,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t36644 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t36644 = (function (company_path,link_fn,path_fn,opts,map__36643,p__36634,owner,investment,meta36645){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__36643 = map__36643;
this.p__36634 = p__36634;
this.owner = owner;
this.investment = investment;
this.meta36645 = meta36645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t36644.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t36644.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t36644";
clustermap.components.full_report.company_site_list.t36644.cljs$lang$ctorPrWriter = ((function (company_path,map__36643,map__36643__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t36644");
});})(company_path,map__36643,map__36643__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36644.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t36644.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__36643,map__36643__$1,opts,path_fn,link_fn){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs36647 = cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36647))?sablono.interpreter.attributes(attrs36647):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36647))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36647)], null))));
})(),(function (){var attrs36648 = cljs.core.constant$keyword$893.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36648))?sablono.interpreter.attributes(attrs36648):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36648))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36648)], null))));
})(),(function (){var attrs36649 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,cljs.core.constant$keyword$894.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$825,cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,cljs.core.constant$keyword$894.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$825,cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36649))?sablono.interpreter.attributes(attrs36649):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36649))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36649)], null))));
})(),(function (){var attrs36650 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$799,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$883,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$799,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36650))?sablono.interpreter.attributes(attrs36650):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36650))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36650)], null))));
})());
});})(company_path,map__36643,map__36643__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__36643,map__36643__$1,opts,path_fn,link_fn){
return (function (_36646){var self__ = this;
var _36646__$1 = this;return self__.meta36645;
});})(company_path,map__36643,map__36643__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t36644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__36643,map__36643__$1,opts,path_fn,link_fn){
return (function (_36646,meta36645__$1){var self__ = this;
var _36646__$1 = this;return (new clustermap.components.full_report.company_site_list.t36644(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__36643,self__.p__36634,self__.owner,self__.investment,meta36645__$1));
});})(company_path,map__36643,map__36643__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t36644 = ((function (company_path,map__36643,map__36643__$1,opts,path_fn,link_fn){
return (function __GT_t36644(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36643__$2,p__36634__$1,owner__$1,investment__$2,meta36645){return (new clustermap.components.full_report.company_site_list.t36644(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36643__$2,p__36634__$1,owner__$1,investment__$2,meta36645));
});})(company_path,map__36643,map__36643__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t36644(company_path,link_fn,path_fn,opts,map__36643__$1,p__36634,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$888);if(typeof clustermap.components.full_report.company_site_list.t36665 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t36665 = (function (comm,opts,owner,investments,company_site_list,meta36666){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta36666 = meta36666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t36665.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t36665.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t36665";
clustermap.components.full_report.company_site_list.t36665.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t36665");
});})(comm))
;
clustermap.components.full_report.company_site_list.t36665.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t36665.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;var attrs36668 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$897);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36668))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs36668], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36668))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36669 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Investor-backed Company",cljs.core.constant$keyword$898);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36669))?sablono.interpreter.attributes(attrs36669):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36669))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36669)], null))));
})(),(function (){var attrs36670 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Postcode",cljs.core.constant$keyword$899);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36670))?sablono.interpreter.attributes(attrs36670):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36670))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36670)], null))));
})(),(function (){var attrs36671 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Investor",cljs.core.constant$keyword$789);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36671))?sablono.interpreter.attributes(attrs36671):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36671))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36671)], null))));
})(),(function (){var attrs36672 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Constituency",cljs.core.constant$keyword$788);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36672))?sablono.interpreter.attributes(attrs36672):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36672))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36672)], null))));
})())),(function (){var attrs36673 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$868,cljs.core.constant$keyword$900,cljs.core.constant$keyword$871,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36673))?sablono.interpreter.attributes(attrs36673):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36673))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36673)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$897))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36668),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36674 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Investor-backed Company",cljs.core.constant$keyword$898);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36674))?sablono.interpreter.attributes(attrs36674):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36674))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36674)], null))));
})(),(function (){var attrs36675 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Postcode",cljs.core.constant$keyword$899);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36675))?sablono.interpreter.attributes(attrs36675):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36675))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36675)], null))));
})(),(function (){var attrs36676 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Investor",cljs.core.constant$keyword$789);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36676))?sablono.interpreter.attributes(attrs36676):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36676))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36676)], null))));
})(),(function (){var attrs36677 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$897,"Constituency",cljs.core.constant$keyword$788);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36677))?sablono.interpreter.attributes(attrs36677):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36677))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36677)], null))));
})())),(function (){var attrs36678 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$868,cljs.core.constant$keyword$900,cljs.core.constant$keyword$871,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36678))?sablono.interpreter.attributes(attrs36678):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36678))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36678)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$897))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t36665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_36667){var self__ = this;
var _36667__$1 = this;return self__.meta36666;
});})(comm))
;
clustermap.components.full_report.company_site_list.t36665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_36667,meta36666__$1){var self__ = this;
var _36667__$1 = this;return (new clustermap.components.full_report.company_site_list.t36665(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta36666__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t36665 = ((function (comm){
return (function __GT_t36665(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta36666){return (new clustermap.components.full_report.company_site_list.t36665(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta36666));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t36665(comm,opts,owner,investments,company_site_list,null));
});
