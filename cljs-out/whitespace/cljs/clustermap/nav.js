// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__17809_17815 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17810_17816 = null;var count__17811_17817 = (0);var i__17812_17818 = (0);while(true){
if((i__17812_17818 < count__17811_17817))
{var vec__17813_17819 = cljs.core._nth.call(null,chunk__17810_17816,i__17812_17818);var v_17820 = cljs.core.nth.call(null,vec__17813_17819,(0),null);var body_class_17821 = cljs.core.nth.call(null,vec__17813_17819,(1),null);if(cljs.core._EQ_.call(null,v_17820,view))
{domina.add_class_BANG_.call(null,body,body_class_17821);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17821);
}
{
var G__17822 = seq__17809_17815;
var G__17823 = chunk__17810_17816;
var G__17824 = count__17811_17817;
var G__17825 = (i__17812_17818 + (1));
seq__17809_17815 = G__17822;
chunk__17810_17816 = G__17823;
count__17811_17817 = G__17824;
i__17812_17818 = G__17825;
continue;
}
} else
{var temp__4126__auto___17826 = cljs.core.seq.call(null,seq__17809_17815);if(temp__4126__auto___17826)
{var seq__17809_17827__$1 = temp__4126__auto___17826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17809_17827__$1))
{var c__4406__auto___17828 = cljs.core.chunk_first.call(null,seq__17809_17827__$1);{
var G__17829 = cljs.core.chunk_rest.call(null,seq__17809_17827__$1);
var G__17830 = c__4406__auto___17828;
var G__17831 = cljs.core.count.call(null,c__4406__auto___17828);
var G__17832 = (0);
seq__17809_17815 = G__17829;
chunk__17810_17816 = G__17830;
count__17811_17817 = G__17831;
i__17812_17818 = G__17832;
continue;
}
} else
{var vec__17814_17833 = cljs.core.first.call(null,seq__17809_17827__$1);var v_17834 = cljs.core.nth.call(null,vec__17814_17833,(0),null);var body_class_17835 = cljs.core.nth.call(null,vec__17814_17833,(1),null);if(cljs.core._EQ_.call(null,v_17834,view))
{domina.add_class_BANG_.call(null,body,body_class_17835);
} else
{domina.remove_class_BANG_.call(null,body,body_class_17835);
}
{
var G__17836 = cljs.core.next.call(null,seq__17809_17827__$1);
var G__17837 = null;
var G__17838 = (0);
var G__17839 = (0);
seq__17809_17815 = G__17836;
chunk__17810_17816 = G__17837;
count__17811_17817 = G__17838;
i__17812_17818 = G__17839;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__17846 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__17847 = null;var count__17848 = (0);var i__17849 = (0);while(true){
if((i__17849 < count__17848))
{var vec__17850 = cljs.core._nth.call(null,chunk__17847,i__17849);var v = cljs.core.nth.call(null,vec__17850,(0),null);var _ = cljs.core.nth.call(null,vec__17850,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17846,chunk__17847,count__17848,i__17849,vec__17850,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17846,chunk__17847,count__17848,i__17849,vec__17850,v,_))
);
{
var G__17852 = seq__17846;
var G__17853 = chunk__17847;
var G__17854 = count__17848;
var G__17855 = (i__17849 + (1));
seq__17846 = G__17852;
chunk__17847 = G__17853;
count__17848 = G__17854;
i__17849 = G__17855;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17846);if(temp__4126__auto__)
{var seq__17846__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17846__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__17846__$1);{
var G__17856 = cljs.core.chunk_rest.call(null,seq__17846__$1);
var G__17857 = c__4406__auto__;
var G__17858 = cljs.core.count.call(null,c__4406__auto__);
var G__17859 = (0);
seq__17846 = G__17856;
chunk__17847 = G__17857;
count__17848 = G__17858;
i__17849 = G__17859;
continue;
}
} else
{var vec__17851 = cljs.core.first.call(null,seq__17846__$1);var v = cljs.core.nth.call(null,vec__17851,(0),null);var _ = cljs.core.nth.call(null,vec__17851,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__17846,chunk__17847,count__17848,i__17849,vec__17851,v,_,seq__17846__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__17846,chunk__17847,count__17848,i__17849,vec__17851,v,_,seq__17846__$1,temp__4126__auto__))
);
{
var G__17860 = cljs.core.next.call(null,seq__17846__$1);
var G__17861 = null;
var G__17862 = (0);
var G__17863 = (0);
seq__17846 = G__17860;
chunk__17847 = G__17861;
count__17848 = G__17862;
i__17849 = G__17863;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
