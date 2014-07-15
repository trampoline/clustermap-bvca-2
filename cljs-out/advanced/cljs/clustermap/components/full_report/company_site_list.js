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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__35319){var map__35328 = p__35319;var map__35328__$1 = ((cljs.core.seq_QMARK_(map__35328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35328):map__35328);var opts = map__35328__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,cljs.core.constant$keyword$857);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35328__$1,cljs.core.constant$keyword$858);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$859,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t35329 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t35329 = (function (company_path,link_fn,path_fn,opts,map__35328,p__35319,owner,investment,meta35330){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__35328 = map__35328;
this.p__35319 = p__35319;
this.owner = owner;
this.investment = investment;
this.meta35330 = meta35330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t35329.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t35329.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t35329";
clustermap.components.full_report.company_site_list.t35329.cljs$lang$ctorPrWriter = ((function (company_path,map__35328,map__35328__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t35329");
});})(company_path,map__35328,map__35328__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t35329.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t35329.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__35328,map__35328__$1,opts,path_fn,link_fn){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs35332 = cljs.core.constant$keyword$871.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35332))?sablono.interpreter.attributes(attrs35332):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35332))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35332)], null))));
})(),(function (){var attrs35333 = cljs.core.constant$keyword$872.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35333))?sablono.interpreter.attributes(attrs35333):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35333))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35333)], null))));
})(),(function (){var attrs35334 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$860,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$803,cljs.core.constant$keyword$874.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$860,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$803,cljs.core.constant$keyword$874.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35334))?sablono.interpreter.attributes(attrs35334):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35334))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35334)], null))));
})(),(function (){var attrs35335 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$862,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$775,cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$776,cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$862,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$775,cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$776,cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35335))?sablono.interpreter.attributes(attrs35335):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35335))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35335)], null))));
})());
});})(company_path,map__35328,map__35328__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t35329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__35328,map__35328__$1,opts,path_fn,link_fn){
return (function (_35331){var self__ = this;
var _35331__$1 = this;return self__.meta35330;
});})(company_path,map__35328,map__35328__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t35329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__35328,map__35328__$1,opts,path_fn,link_fn){
return (function (_35331,meta35330__$1){var self__ = this;
var _35331__$1 = this;return (new clustermap.components.full_report.company_site_list.t35329(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__35328,self__.p__35319,self__.owner,self__.investment,meta35330__$1));
});})(company_path,map__35328,map__35328__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t35329 = ((function (company_path,map__35328,map__35328__$1,opts,path_fn,link_fn){
return (function __GT_t35329(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__35328__$2,p__35319__$1,owner__$1,investment__$2,meta35330){return (new clustermap.components.full_report.company_site_list.t35329(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__35328__$2,p__35319__$1,owner__$1,investment__$2,meta35330));
});})(company_path,map__35328,map__35328__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t35329(company_path,link_fn,path_fn,opts,map__35328__$1,p__35319,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$867);if(typeof clustermap.components.full_report.company_site_list.t35350 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t35350 = (function (comm,opts,owner,investments,company_site_list,meta35351){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta35351 = meta35351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t35350.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t35350.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t35350";
clustermap.components.full_report.company_site_list.t35350.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t35350");
});})(comm))
;
clustermap.components.full_report.company_site_list.t35350.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t35350.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;var attrs35353 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$876);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs35353))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs35353], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35353))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs35354 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Investor-backed Company",cljs.core.constant$keyword$877);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35354))?sablono.interpreter.attributes(attrs35354):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35354)], null))));
})(),(function (){var attrs35355 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Postcode",cljs.core.constant$keyword$878);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35355))?sablono.interpreter.attributes(attrs35355):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35355))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35355)], null))));
})(),(function (){var attrs35356 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Investor",cljs.core.constant$keyword$766);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35356))?sablono.interpreter.attributes(attrs35356):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35356))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35356)], null))));
})(),(function (){var attrs35357 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Constituency",cljs.core.constant$keyword$765);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35357))?sablono.interpreter.attributes(attrs35357):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35357)], null))));
})())),(function (){var attrs35358 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$869.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$847,cljs.core.constant$keyword$879,cljs.core.constant$keyword$850,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs35358))?sablono.interpreter.attributes(attrs35358):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35358)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$876))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35353),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs35359 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Investor-backed Company",cljs.core.constant$keyword$877);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35359))?sablono.interpreter.attributes(attrs35359):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35359))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35359)], null))));
})(),(function (){var attrs35360 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Postcode",cljs.core.constant$keyword$878);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35360))?sablono.interpreter.attributes(attrs35360):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35360)], null))));
})(),(function (){var attrs35361 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Investor",cljs.core.constant$keyword$766);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35361))?sablono.interpreter.attributes(attrs35361):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35361)], null))));
})(),(function (){var attrs35362 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$876,"Constituency",cljs.core.constant$keyword$765);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35362))?sablono.interpreter.attributes(attrs35362):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35362))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35362)], null))));
})())),(function (){var attrs35363 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$869.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$847,cljs.core.constant$keyword$879,cljs.core.constant$keyword$850,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs35363))?sablono.interpreter.attributes(attrs35363):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35363))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35363)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$876))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t35350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_35352){var self__ = this;
var _35352__$1 = this;return self__.meta35351;
});})(comm))
;
clustermap.components.full_report.company_site_list.t35350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_35352,meta35351__$1){var self__ = this;
var _35352__$1 = this;return (new clustermap.components.full_report.company_site_list.t35350(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta35351__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t35350 = ((function (comm){
return (function __GT_t35350(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta35351){return (new clustermap.components.full_report.company_site_list.t35350(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta35351));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t35350(comm,opts,owner,investments,company_site_list,null));
});
