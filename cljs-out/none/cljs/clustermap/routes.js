// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.routes');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
clustermap.routes.type_name_keys = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665)], null);
clustermap.routes.name_for = (function name_for(type,obj){return cljs.core.get.call(null,obj,cljs.core.get.call(null,clustermap.routes.type_name_keys,type));
});
clustermap.routes.portfolio_company_path = (function portfolio_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__12617 = app_state;var G__12617__$1 = (((G__12617 == null))?null:cljs.core.deref.call(null,G__12617));var G__12617__$2 = (((G__12617__$1 == null))?null:new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(G__12617__$1));var G__12617__$3 = (((G__12617__$2 == null))?null:cljs.core.name.call(null,G__12617__$2));return G__12617__$3;
})()),cljs.core.str("/portfolio-company/"),cljs.core.str(new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.investor_company_path = (function investor_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__12619 = app_state;var G__12619__$1 = (((G__12619 == null))?null:cljs.core.deref.call(null,G__12619));var G__12619__$2 = (((G__12619__$1 == null))?null:new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(G__12619__$1));var G__12619__$3 = (((G__12619__$2 == null))?null:cljs.core.name.call(null,G__12619__$2));return G__12619__$3;
})()),cljs.core.str("/investor-company/"),cljs.core.str(new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.constituency_path = (function constituency_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__12621 = app_state;var G__12621__$1 = (((G__12621 == null))?null:cljs.core.deref.call(null,G__12621));var G__12621__$2 = (((G__12621__$1 == null))?null:new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(G__12621__$1));var G__12621__$3 = (((G__12621__$2 == null))?null:cljs.core.name.call(null,G__12621__$2));return G__12621__$3;
})()),cljs.core.str("/constituency/"),cljs.core.str(new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.no_selection_path = (function no_selection_path(app_state,_){return [cljs.core.str("#/"),cljs.core.str((function (){var G__12623 = app_state;var G__12623__$1 = (((G__12623 == null))?null:cljs.core.deref.call(null,G__12623));var G__12623__$2 = (((G__12623__$1 == null))?null:new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(G__12623__$1));var G__12623__$3 = (((G__12623__$2 == null))?null:cljs.core.name.call(null,G__12623__$2));return G__12623__$3;
})())].join('');
});
clustermap.routes.type_paths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),clustermap.routes.portfolio_company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),clustermap.routes.investor_company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),clustermap.routes.constituency_path,null,clustermap.routes.no_selection_path], null);
clustermap.routes.path_for = (function path_for(app_state,type,obj){return cljs.core.apply.call(null,cljs.core.get.call(null,clustermap.routes.type_paths,type),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_state,obj], null));
});
clustermap.routes.link_for = (function link_for(app_state,type,obj){return React.DOM.a({"href": clustermap.routes.path_for.call(null,app_state,type,obj)},sablono.interpreter.interpret.call(null,clustermap.routes.name_for.call(null,type,obj)));
});

//# sourceMappingURL=routes.js.map