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
{var attrs34512 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34512))?sablono.interpreter.attributes(attrs34512):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34512))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34512),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__34521){var map__34534 = p__34521;var map__34534__$1 = ((cljs.core.seq_QMARK_(map__34534))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34534):map__34534);var opts = map__34534__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,cljs.core.constant$keyword$698);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34534__$1,cljs.core.constant$keyword$699);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,company) : path_fn.call(null,cljs.core.constant$keyword$700,company));if(typeof clustermap.components.full_report.company_list.t34535 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34535 = (function (company_path,link_fn,path_fn,opts,map__34534,p__34521,owner,company,portfolio_company,meta34536){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34534 = map__34534;
this.p__34521 = p__34521;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta34536 = meta34536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34535.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34535.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34535";
clustermap.components.full_report.company_list.t34535.cljs$lang$ctorPrWriter = ((function (company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.full-report.company-list/t34535");
});})(company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34535.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34535.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34538 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$700,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34538))?sablono.interpreter.attributes(attrs34538):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34538)], null))));
})(),(function (){var attrs34539 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$701,cljs.core.constant$keyword$702.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34539))?sablono.interpreter.attributes(attrs34539):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34539)], null))));
})(),(function (){var attrs34540 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$703,(function (){var G__34545 = self__.company;var G__34545__$1 = (((G__34545 == null))?null:cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(G__34545));var G__34545__$2 = (((G__34545__$1 == null))?null:cljs.core.filter(((function (G__34545,G__34545__$1,this__9412__auto____$1,company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$705.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__34545,G__34545__$1,this__9412__auto____$1,company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
,G__34545__$1));return G__34545__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34540))?sablono.interpreter.attributes(attrs34540):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34540)], null))));
})(),(function (){var attrs34541 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$610.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$610.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34541))?sablono.interpreter.attributes(attrs34541):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34541))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34541),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs34542 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34542))?sablono.interpreter.attributes(attrs34542):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34542)], null))));
})(),(function (){var attrs34543 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$707.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34543))?sablono.interpreter.attributes(attrs34543):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34543)], null))));
})(),(function (){var attrs34544 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$708.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$708.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34544))?sablono.interpreter.attributes(attrs34544):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34544),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3541__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function (_34537){var self__ = this;
var _34537__$1 = this;return self__.meta34536;
});})(company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function (_34537,meta34536__$1){var self__ = this;
var _34537__$1 = this;return (new clustermap.components.full_report.company_list.t34535(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34534,self__.p__34521,self__.owner,self__.company,self__.portfolio_company,meta34536__$1));
});})(company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t34535 = ((function (company_path,map__34534,map__34534__$1,opts,path_fn,link_fn){
return (function __GT_t34535(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34534__$2,p__34521__$1,owner__$1,company__$1,portfolio_company__$1,meta34536){return (new clustermap.components.full_report.company_list.t34535(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34534__$2,p__34521__$1,owner__$1,company__$1,portfolio_company__$1,meta34536));
});})(company_path,map__34534,map__34534__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t34535(company_path,link_fn,path_fn,opts,map__34534__$1,p__34521,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$709);if(typeof clustermap.components.full_report.company_list.t34566 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34566 = (function (comm,opts,owner,companies,company_list,meta34567){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34567 = meta34567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34566.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34566.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34566";
clustermap.components.full_report.company_list.t34566.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.full-report.company-list/t34566");
});})(comm))
;
clustermap.components.full_report.company_list.t34566.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34566.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;var attrs34569 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34569))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34569], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34569))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34570 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Investor-backed company",cljs.core.constant$keyword$645);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34570))?sablono.interpreter.attributes(attrs34570):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34570))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34570)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34575 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Revenue",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34575))?sablono.interpreter.attributes(attrs34575):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34575))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34575)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Rev. change",cljs.core.constant$keyword$707))),(function (){var attrs34576 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Employees",cljs.core.constant$keyword$708);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34576))?sablono.interpreter.attributes(attrs34576):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34576))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34576)], null))));
})())),(function (){var attrs34577 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$712,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34577))?sablono.interpreter.attributes(attrs34577):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34577))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34577)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34569),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34578 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Investor-backed company",cljs.core.constant$keyword$645);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34578))?sablono.interpreter.attributes(attrs34578):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34578))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34578)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34583 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Revenue",cljs.core.constant$keyword$610);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34583))?sablono.interpreter.attributes(attrs34583):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34583)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Rev. change",cljs.core.constant$keyword$707))),(function (){var attrs34584 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$710,"Employees",cljs.core.constant$keyword$708);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34584))?sablono.interpreter.attributes(attrs34584):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34584)], null))));
})())),(function (){var attrs34585 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$688,cljs.core.constant$keyword$712,cljs.core.constant$keyword$691,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34585))?sablono.interpreter.attributes(attrs34585):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34585))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34585)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$710))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t34566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34568){var self__ = this;
var _34568__$1 = this;return self__.meta34567;
});})(comm))
;
clustermap.components.full_report.company_list.t34566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34568,meta34567__$1){var self__ = this;
var _34568__$1 = this;return (new clustermap.components.full_report.company_list.t34566(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34567__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t34566 = ((function (comm){
return (function __GT_t34566(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34567){return (new clustermap.components.full_report.company_list.t34566(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34567));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t34566(comm,opts,owner,companies,company_list,null));
});
