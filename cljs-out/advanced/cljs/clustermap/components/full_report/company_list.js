// Compiled by ClojureScript 0.0-2322
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
{var attrs39241 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39241))?sablono.interpreter.attributes(attrs39241):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39241),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__39250){var map__39263 = p__39250;var map__39263__$1 = ((cljs.core.seq_QMARK_(map__39263))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39263):map__39263);var opts = map__39263__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39263__$1,cljs.core.constant$keyword$1012);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39263__$1,cljs.core.constant$keyword$1013);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1014,company) : path_fn.call(null,cljs.core.constant$keyword$1014,company));if(typeof clustermap.components.full_report.company_list.t39264 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t39264 = (function (company_path,link_fn,path_fn,opts,map__39263,p__39250,owner,company,portfolio_company,meta39265){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__39263 = map__39263;
this.p__39250 = p__39250;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta39265 = meta39265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t39264.cljs$lang$type = true;
clustermap.components.full_report.company_list.t39264.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t39264";
clustermap.components.full_report.company_list.t39264.cljs$lang$ctorPrWriter = ((function (company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t39264");
});})(company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39264.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t39264.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs39267 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1014,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$1014,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39267))?sablono.interpreter.attributes(attrs39267):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39267)], null))));
})(),(function (){var attrs39268 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1015,cljs.core.constant$keyword$1016.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39268))?sablono.interpreter.attributes(attrs39268):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39268))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39268)], null))));
})(),(function (){var attrs39269 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1017,(function (){var G__39274 = self__.company;var G__39274__$1 = (((G__39274 == null))?null:cljs.core.constant$keyword$909.cljs$core$IFn$_invoke$arity$1(G__39274));var G__39274__$2 = (((G__39274__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__39274,G__39274__$1,this__9504__auto____$1,company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__39274,G__39274__$1,this__9504__auto____$1,company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
,G__39274__$1));return G__39274__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39269))?sablono.interpreter.attributes(attrs39269):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39269))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39269)], null))));
})(),(function (){var attrs39270 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1019.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1019.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39270))?sablono.interpreter.attributes(attrs39270):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39270))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1020.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39270),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1020.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs39271 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1021.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39271))?sablono.interpreter.attributes(attrs39271):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39271)], null))));
})(),(function (){var attrs39272 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1021.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1021.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39272))?sablono.interpreter.attributes(attrs39272):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39272)], null))));
})(),(function (){var attrs39273 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1022.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1010,(0),cljs.core.constant$keyword$871,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$1022.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1010,(0),cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39273))?sablono.interpreter.attributes(attrs39273):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39273))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1020.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39273),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1020.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function (_39266){var self__ = this;
var _39266__$1 = this;return self__.meta39265;
});})(company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function (_39266,meta39265__$1){var self__ = this;
var _39266__$1 = this;return (new clustermap.components.full_report.company_list.t39264(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__39263,self__.p__39250,self__.owner,self__.company,self__.portfolio_company,meta39265__$1));
});})(company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t39264 = ((function (company_path,map__39263,map__39263__$1,opts,path_fn,link_fn){
return (function __GT_t39264(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__39263__$2,p__39250__$1,owner__$1,company__$1,portfolio_company__$1,meta39265){return (new clustermap.components.full_report.company_list.t39264(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__39263__$2,p__39250__$1,owner__$1,company__$1,portfolio_company__$1,meta39265));
});})(company_path,map__39263,map__39263__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t39264(company_path,link_fn,path_fn,opts,map__39263__$1,p__39250,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1023);if(typeof clustermap.components.full_report.company_list.t39295 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t39295 = (function (comm,opts,owner,companies,company_list,meta39296){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta39296 = meta39296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t39295.cljs$lang$type = true;
clustermap.components.full_report.company_list.t39295.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t39295";
clustermap.components.full_report.company_list.t39295.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t39295");
});})(comm))
;
clustermap.components.full_report.company_list.t39295.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t39295.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs39298 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1024);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39298))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs39298], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39298))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs39299 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Investor-backed company",cljs.core.constant$keyword$941);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39299))?sablono.interpreter.attributes(attrs39299):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39299))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39299)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs39304 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Revenue",cljs.core.constant$keyword$1019);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39304))?sablono.interpreter.attributes(attrs39304):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39304))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39304)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Rev. change",cljs.core.constant$keyword$1021))),(function (){var attrs39305 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Employees",cljs.core.constant$keyword$1022);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39305))?sablono.interpreter.attributes(attrs39305):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39305))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39305)], null))));
})())),(function (){var attrs39306 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1025.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$977,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs39306))?sablono.interpreter.attributes(attrs39306):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39306))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39306)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1024))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39298),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs39307 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Investor-backed company",cljs.core.constant$keyword$941);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39307))?sablono.interpreter.attributes(attrs39307):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39307))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39307)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs39312 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Revenue",cljs.core.constant$keyword$1019);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39312))?sablono.interpreter.attributes(attrs39312):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39312))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39312)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Rev. change",cljs.core.constant$keyword$1021))),(function (){var attrs39313 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1024,"Employees",cljs.core.constant$keyword$1022);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39313))?sablono.interpreter.attributes(attrs39313):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39313))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39313)], null))));
})())),(function (){var attrs39314 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1025.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$977,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs39314))?sablono.interpreter.attributes(attrs39314):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39314))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39314)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1024))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t39295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_39297){var self__ = this;
var _39297__$1 = this;return self__.meta39296;
});})(comm))
;
clustermap.components.full_report.company_list.t39295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_39297,meta39296__$1){var self__ = this;
var _39297__$1 = this;return (new clustermap.components.full_report.company_list.t39295(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta39296__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t39295 = ((function (comm){
return (function __GT_t39295(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta39296){return (new clustermap.components.full_report.company_list.t39295(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta39296));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t39295(comm,opts,owner,companies,company_list,null));
});
