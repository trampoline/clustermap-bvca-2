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
{var attrs34528 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34528))?sablono.interpreter.attributes(attrs34528):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34528))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34528),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__34537){var map__34550 = p__34537;var map__34550__$1 = ((cljs.core.seq_QMARK_(map__34550))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34550):map__34550);var opts = map__34550__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34550__$1,cljs.core.constant$keyword$696);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34550__$1,cljs.core.constant$keyword$697);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,company) : path_fn.call(null,cljs.core.constant$keyword$698,company));if(typeof clustermap.components.full_report.company_list.t34551 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34551 = (function (company_path,link_fn,path_fn,opts,map__34550,p__34537,owner,company,portfolio_company,meta34552){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34550 = map__34550;
this.p__34537 = p__34537;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta34552 = meta34552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34551.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34551.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34551";
clustermap.components.full_report.company_list.t34551.cljs$lang$ctorPrWriter = ((function (company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-list/t34551");
});})(company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34551.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34551.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34554 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$698,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34554))?sablono.interpreter.attributes(attrs34554):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34554))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34554)], null))));
})(),(function (){var attrs34555 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$699,cljs.core.constant$keyword$700.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34555))?sablono.interpreter.attributes(attrs34555):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34555))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34555)], null))));
})(),(function (){var attrs34556 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$701,(function (){var G__34561 = self__.company;var G__34561__$1 = (((G__34561 == null))?null:cljs.core.constant$keyword$702.cljs$core$IFn$_invoke$arity$1(G__34561));var G__34561__$2 = (((G__34561__$1 == null))?null:cljs.core.filter(((function (G__34561,G__34561__$1,this__9410__auto____$1,company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$703.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__34561,G__34561__$1,this__9410__auto____$1,company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
,G__34561__$1));return G__34561__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34556))?sablono.interpreter.attributes(attrs34556):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34556))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34556)], null))));
})(),(function (){var attrs34557 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$608.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$608.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34557))?sablono.interpreter.attributes(attrs34557):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34557))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34557),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs34558 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$705.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34558))?sablono.interpreter.attributes(attrs34558):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34558))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34558)], null))));
})(),(function (){var attrs34559 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$705.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$705.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34559))?sablono.interpreter.attributes(attrs34559):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34559))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34559)], null))));
})(),(function (){var attrs34560 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$706.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34560))?sablono.interpreter.attributes(attrs34560):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34560))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34560),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3539__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$704.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function (_34553){var self__ = this;
var _34553__$1 = this;return self__.meta34552;
});})(company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function (_34553,meta34552__$1){var self__ = this;
var _34553__$1 = this;return (new clustermap.components.full_report.company_list.t34551(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34550,self__.p__34537,self__.owner,self__.company,self__.portfolio_company,meta34552__$1));
});})(company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t34551 = ((function (company_path,map__34550,map__34550__$1,opts,path_fn,link_fn){
return (function __GT_t34551(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34550__$2,p__34537__$1,owner__$1,company__$1,portfolio_company__$1,meta34552){return (new clustermap.components.full_report.company_list.t34551(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34550__$2,p__34537__$1,owner__$1,company__$1,portfolio_company__$1,meta34552));
});})(company_path,map__34550,map__34550__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t34551(company_path,link_fn,path_fn,opts,map__34550__$1,p__34537,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$707);if(typeof clustermap.components.full_report.company_list.t34582 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34582 = (function (comm,opts,owner,companies,company_list,meta34583){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34583 = meta34583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34582.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34582.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34582";
clustermap.components.full_report.company_list.t34582.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.full-report.company-list/t34582");
});})(comm))
;
clustermap.components.full_report.company_list.t34582.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34582.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;var attrs34585 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$708);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34585))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$625,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34585], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34585))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34586 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Investor-backed company",cljs.core.constant$keyword$643);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34586))?sablono.interpreter.attributes(attrs34586):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34586))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34586)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34591 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Revenue",cljs.core.constant$keyword$608);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34591))?sablono.interpreter.attributes(attrs34591):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34591)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Rev. change",cljs.core.constant$keyword$705))),(function (){var attrs34592 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Employees",cljs.core.constant$keyword$706);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34592))?sablono.interpreter.attributes(attrs34592):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34592)], null))));
})())),(function (){var attrs34593 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$709.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$686,cljs.core.constant$keyword$710,cljs.core.constant$keyword$689,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34593))?sablono.interpreter.attributes(attrs34593):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34593))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34593)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$708))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34585),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34594 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Investor-backed company",cljs.core.constant$keyword$643);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34594))?sablono.interpreter.attributes(attrs34594):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34594)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34599 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Revenue",cljs.core.constant$keyword$608);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34599))?sablono.interpreter.attributes(attrs34599):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34599)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Rev. change",cljs.core.constant$keyword$705))),(function (){var attrs34600 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$708,"Employees",cljs.core.constant$keyword$706);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34600))?sablono.interpreter.attributes(attrs34600):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34600)], null))));
})())),(function (){var attrs34601 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$709.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$686,cljs.core.constant$keyword$710,cljs.core.constant$keyword$689,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34601))?sablono.interpreter.attributes(attrs34601):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34601)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$708))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t34582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34584){var self__ = this;
var _34584__$1 = this;return self__.meta34583;
});})(comm))
;
clustermap.components.full_report.company_list.t34582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34584,meta34583__$1){var self__ = this;
var _34584__$1 = this;return (new clustermap.components.full_report.company_list.t34582(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34583__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t34582 = ((function (comm){
return (function __GT_t34582(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34583){return (new clustermap.components.full_report.company_list.t34582(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34583));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t34582(comm,opts,owner,companies,company_list,null));
});
