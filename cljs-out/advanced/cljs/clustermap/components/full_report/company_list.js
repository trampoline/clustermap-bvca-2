// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs34510 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34510))?sablono.interpreter.attributes(attrs34510):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34510))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34510),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__34519){var map__34532 = p__34519;var map__34532__$1 = ((cljs.core.seq_QMARK_(map__34532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34532):map__34532);var opts = map__34532__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,cljs.core.constant$keyword$698);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,cljs.core.constant$keyword$699);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,company) : path_fn.call(null,cljs.core.constant$keyword$700,company));if(typeof clustermap.components.full_report.company_list.t34533 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34533 = (function (company_path,link_fn,path_fn,opts,map__34532,p__34519,owner,company,portfolio_company,meta34534){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34532 = map__34532;
this.p__34519 = p__34519;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta34534 = meta34534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34533.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34533.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34533";
clustermap.components.full_report.company_list.t34533.cljs$lang$ctorPrWriter = ((function (company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-list/t34533");
});})(company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34533.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34533.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34536 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$700,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34536))?sablono.interpreter.attributes(attrs34536):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34536))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34536)], null))));
})(),(function (){var attrs34537 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$701,cljs.core.constant$keyword$702.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34537))?sablono.interpreter.attributes(attrs34537):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34537)], null))));
})(),(function (){var attrs34538 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$703,(function (){var G__34543 = self__.company;var G__34543__$1 = (((G__34543 == null))?null:cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(G__34543));var G__34543__$2 = (((G__34543__$1 == null))?null:cljs.core.filter(((function (G__34543,G__34543__$1,this__9410__auto____$1,company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$705.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__34543,G__34543__$1,this__9410__auto____$1,company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
,G__34543__$1));return G__34543__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34538))?sablono.interpreter.attributes(attrs34538):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34538)], null))));
})(),(function (){var attrs34539 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$610.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$610.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34539))?sablono.interpreter.attributes(attrs34539):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34539))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34539),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs34540 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34540))?sablono.interpreter.attributes(attrs34540):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34540)], null))));
})(),(function (){var attrs34541 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34541))?sablono.interpreter.attributes(attrs34541):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34541)], null))));
})(),(function (){var attrs34542 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$708.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$708.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34542))?sablono.interpreter.attributes(attrs34542):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34542))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34542),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function (_34535){var self__ = this;
var _34535__$1 = this;return self__.meta34534;
});})(company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function (_34535,meta34534__$1){var self__ = this;
var _34535__$1 = this;return (new clustermap.components.full_report.company_list.t34533(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34532,self__.p__34519,self__.owner,self__.company,self__.portfolio_company,meta34534__$1));
});})(company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t34533 = ((function (company_path,map__34532,map__34532__$1,opts,path_fn,link_fn){
return (function __GT_t34533(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34532__$2,p__34519__$1,owner__$1,company__$1,portfolio_company__$1,meta34534){return (new clustermap.components.full_report.company_list.t34533(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34532__$2,p__34519__$1,owner__$1,company__$1,portfolio_company__$1,meta34534));
});})(company_path,map__34532,map__34532__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t34533(company_path,link_fn,path_fn,opts,map__34532__$1,p__34519,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$709);if(typeof clustermap.components.full_report.company_list.t34564 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34564 = (function (comm,opts,owner,companies,company_list,meta34565){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34565 = meta34565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34564.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34564.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34564";
clustermap.components.full_report.company_list.t34564.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-list/t34564");
});})(comm))
;
clustermap.components.full_report.company_list.t34564.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34564.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;var attrs34567 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34567))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34567], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34567))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34568 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Investor-backed company",cljs.core.constant$keyword$645);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34568))?sablono.interpreter.attributes(attrs34568):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34568))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34568)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34573 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Revenue",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34573))?sablono.interpreter.attributes(attrs34573):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34573))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34573)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Rev. change",cljs.core.constant$keyword$707))),(function (){var attrs34574 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Employees",cljs.core.constant$keyword$708);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34574))?sablono.interpreter.attributes(attrs34574):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34574))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34574)], null))));
})())),(function (){var attrs34575 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$712,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34575))?sablono.interpreter.attributes(attrs34575):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34575))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34575)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34567),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34576 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Investor-backed company",cljs.core.constant$keyword$645);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34576))?sablono.interpreter.attributes(attrs34576):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34576))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34576)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34581 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Revenue",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34581))?sablono.interpreter.attributes(attrs34581):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34581))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34581)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Rev. change",cljs.core.constant$keyword$707))),(function (){var attrs34582 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Employees",cljs.core.constant$keyword$708);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34582))?sablono.interpreter.attributes(attrs34582):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34582))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34582)], null))));
})())),(function (){var attrs34583 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$712,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34583))?sablono.interpreter.attributes(attrs34583):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34583)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t34564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34566){var self__ = this;
var _34566__$1 = this;return self__.meta34565;
});})(comm))
;
clustermap.components.full_report.company_list.t34564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34566,meta34565__$1){var self__ = this;
var _34566__$1 = this;return (new clustermap.components.full_report.company_list.t34564(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34565__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t34564 = ((function (comm){
return (function __GT_t34564(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34565){return (new clustermap.components.full_report.company_list.t34564(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34565));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t34564(comm,opts,owner,companies,company_list,null));
});
