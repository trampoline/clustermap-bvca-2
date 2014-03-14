// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__34025){var map__34034 = p__34025;var map__34034__$1 = ((cljs.core.seq_QMARK_(map__34034))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34034):map__34034);var opts = map__34034__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34034__$1,cljs.core.constant$keyword$630);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34034__$1,cljs.core.constant$keyword$647);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$627,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t34035 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34035 = (function (company_path,link_fn,path_fn,opts,map__34034,p__34025,owner,investment,meta34036){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34034 = map__34034;
this.p__34025 = p__34025;
this.owner = owner;
this.investment = investment;
this.meta34036 = meta34036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34035.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34035.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34035";
clustermap.components.full_report.company_site_list.t34035.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-site-list/t34035");
});
clustermap.components.full_report.company_site_list.t34035.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34035.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34038 = cljs.core.constant$keyword$648.cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_(attrs34038))
{return React.DOM.td(sablono.interpreter.attributes(attrs34038),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34038));
}
})(),(function (){var attrs34039 = cljs.core.constant$keyword$649.cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_(attrs34039))
{return React.DOM.td(sablono.interpreter.attributes(attrs34039),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34039));
}
})(),(function (){var attrs34040 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$628,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$650,cljs.core.constant$keyword$650.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$592,cljs.core.constant$keyword$651.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$628,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$650,cljs.core.constant$keyword$650.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$592,cljs.core.constant$keyword$651.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));if(cljs.core.map_QMARK_(attrs34040))
{return React.DOM.td(sablono.interpreter.attributes(attrs34040),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34040));
}
})(),(function (){var attrs34041 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$652,cljs.core.constant$keyword$652.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$653,cljs.core.constant$keyword$654.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$629,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$652,cljs.core.constant$keyword$652.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$653,cljs.core.constant$keyword$654.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));if(cljs.core.map_QMARK_(attrs34041))
{return React.DOM.td(sablono.interpreter.attributes(attrs34041),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34041));
}
})());
});
clustermap.components.full_report.company_site_list.t34035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34037){var self__ = this;
var _34037__$1 = this;return self__.meta34036;
});
clustermap.components.full_report.company_site_list.t34035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34037,meta34036__$1){var self__ = this;
var _34037__$1 = this;return (new clustermap.components.full_report.company_site_list.t34035(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34034,self__.p__34025,self__.owner,self__.investment,meta34036__$1));
});
clustermap.components.full_report.company_site_list.__GT_t34035 = (function __GT_t34035(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34034__$2,p__34025__$1,owner__$1,investment__$2,meta34036){return (new clustermap.components.full_report.company_site_list.t34035(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34034__$2,p__34025__$1,owner__$1,investment__$2,meta34036));
});
}
return (new clustermap.components.full_report.company_site_list.t34035(company_path,link_fn,path_fn,opts,map__34034__$1,p__34025,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$631);if(typeof clustermap.components.full_report.company_site_list.t34056 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t34056 = (function (comm,opts,owner,investments,company_site_list,meta34057){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta34057 = meta34057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t34056.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t34056.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t34056";
clustermap.components.full_report.company_site_list.t34056.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-site-list/t34056");
});
clustermap.components.full_report.company_site_list.t34056.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t34056.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs34059 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$655);if(cljs.core.map_QMARK_(attrs34059))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34059], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34060 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Investor-backed Company",cljs.core.constant$keyword$656);if(cljs.core.map_QMARK_(attrs34060))
{return React.DOM.th(sablono.interpreter.attributes(attrs34060),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34060));
}
})(),(function (){var attrs34061 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Postcode",cljs.core.constant$keyword$657);if(cljs.core.map_QMARK_(attrs34061))
{return React.DOM.th(sablono.interpreter.attributes(attrs34061),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34061));
}
})(),(function (){var attrs34062 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Investor",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34062))
{return React.DOM.th(sablono.interpreter.attributes(attrs34062),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34062));
}
})(),(function (){var attrs34063 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Constituency",cljs.core.constant$keyword$569);if(cljs.core.map_QMARK_(attrs34063))
{return React.DOM.th(sablono.interpreter.attributes(attrs34063),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34063));
}
})())),(function (){var attrs34064 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$658.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$659,cljs.core.constant$keyword$618,self__.opts], null));if(cljs.core.map_QMARK_(attrs34064))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34064),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34064));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$655)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs34059),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34065 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Investor-backed Company",cljs.core.constant$keyword$656);if(cljs.core.map_QMARK_(attrs34065))
{return React.DOM.th(sablono.interpreter.attributes(attrs34065),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34065));
}
})(),(function (){var attrs34066 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Postcode",cljs.core.constant$keyword$657);if(cljs.core.map_QMARK_(attrs34066))
{return React.DOM.th(sablono.interpreter.attributes(attrs34066),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34066));
}
})(),(function (){var attrs34067 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Investor",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34067))
{return React.DOM.th(sablono.interpreter.attributes(attrs34067),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34067));
}
})(),(function (){var attrs34068 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$655,"Constituency",cljs.core.constant$keyword$569);if(cljs.core.map_QMARK_(attrs34068))
{return React.DOM.th(sablono.interpreter.attributes(attrs34068),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34068));
}
})())),(function (){var attrs34069 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$658.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,cljs.core.constant$keyword$659,cljs.core.constant$keyword$618,self__.opts], null));if(cljs.core.map_QMARK_(attrs34069))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34069),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34069));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$655)));
}
});
clustermap.components.full_report.company_site_list.t34056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34058){var self__ = this;
var _34058__$1 = this;return self__.meta34057;
});
clustermap.components.full_report.company_site_list.t34056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34058,meta34057__$1){var self__ = this;
var _34058__$1 = this;return (new clustermap.components.full_report.company_site_list.t34056(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta34057__$1));
});
clustermap.components.full_report.company_site_list.__GT_t34056 = (function __GT_t34056(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34057){return (new clustermap.components.full_report.company_site_list.t34056(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta34057));
});
}
return (new clustermap.components.full_report.company_site_list.t34056(comm,opts,owner,investments,company_site_list,null));
});
