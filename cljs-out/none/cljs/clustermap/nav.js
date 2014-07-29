// Compiled by ClojureScript 0.0-2268
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
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
} else
{return null;
}
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
var seq__50811_50817 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__50812_50818 = null;var count__50813_50819 = (0);var i__50814_50820 = (0);while(true){
if((i__50814_50820 < count__50813_50819))
{var vec__50815_50821 = cljs.core._nth.call(null,chunk__50812_50818,i__50814_50820);var v_50822 = cljs.core.nth.call(null,vec__50815_50821,(0),null);var body_class_50823 = cljs.core.nth.call(null,vec__50815_50821,(1),null);if(cljs.core._EQ_.call(null,v_50822,view))
{domina.add_class_BANG_.call(null,body,body_class_50823);
} else
{domina.remove_class_BANG_.call(null,body,body_class_50823);
}
{
var G__50824 = seq__50811_50817;
var G__50825 = chunk__50812_50818;
var G__50826 = count__50813_50819;
var G__50827 = (i__50814_50820 + (1));
seq__50811_50817 = G__50824;
chunk__50812_50818 = G__50825;
count__50813_50819 = G__50826;
i__50814_50820 = G__50827;
continue;
}
} else
{var temp__4126__auto___50828 = cljs.core.seq.call(null,seq__50811_50817);if(temp__4126__auto___50828)
{var seq__50811_50829__$1 = temp__4126__auto___50828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50811_50829__$1))
{var c__4299__auto___50830 = cljs.core.chunk_first.call(null,seq__50811_50829__$1);{
var G__50831 = cljs.core.chunk_rest.call(null,seq__50811_50829__$1);
var G__50832 = c__4299__auto___50830;
var G__50833 = cljs.core.count.call(null,c__4299__auto___50830);
var G__50834 = (0);
seq__50811_50817 = G__50831;
chunk__50812_50818 = G__50832;
count__50813_50819 = G__50833;
i__50814_50820 = G__50834;
continue;
}
} else
{var vec__50816_50835 = cljs.core.first.call(null,seq__50811_50829__$1);var v_50836 = cljs.core.nth.call(null,vec__50816_50835,(0),null);var body_class_50837 = cljs.core.nth.call(null,vec__50816_50835,(1),null);if(cljs.core._EQ_.call(null,v_50836,view))
{domina.add_class_BANG_.call(null,body,body_class_50837);
} else
{domina.remove_class_BANG_.call(null,body,body_class_50837);
}
{
var G__50838 = cljs.core.next.call(null,seq__50811_50829__$1);
var G__50839 = null;
var G__50840 = (0);
var G__50841 = (0);
seq__50811_50817 = G__50838;
chunk__50812_50818 = G__50839;
count__50813_50819 = G__50840;
i__50814_50820 = G__50841;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__50848 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__50849 = null;var count__50850 = (0);var i__50851 = (0);while(true){
if((i__50851 < count__50850))
{var vec__50852 = cljs.core._nth.call(null,chunk__50849,i__50851);var v = cljs.core.nth.call(null,vec__50852,(0),null);var _ = cljs.core.nth.call(null,vec__50852,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__50848,chunk__50849,count__50850,i__50851,vec__50852,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__50848,chunk__50849,count__50850,i__50851,vec__50852,v,_))
);
{
var G__50854 = seq__50848;
var G__50855 = chunk__50849;
var G__50856 = count__50850;
var G__50857 = (i__50851 + (1));
seq__50848 = G__50854;
chunk__50849 = G__50855;
count__50850 = G__50856;
i__50851 = G__50857;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50848);if(temp__4126__auto__)
{var seq__50848__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50848__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__50848__$1);{
var G__50858 = cljs.core.chunk_rest.call(null,seq__50848__$1);
var G__50859 = c__4299__auto__;
var G__50860 = cljs.core.count.call(null,c__4299__auto__);
var G__50861 = (0);
seq__50848 = G__50858;
chunk__50849 = G__50859;
count__50850 = G__50860;
i__50851 = G__50861;
continue;
}
} else
{var vec__50853 = cljs.core.first.call(null,seq__50848__$1);var v = cljs.core.nth.call(null,vec__50853,(0),null);var _ = cljs.core.nth.call(null,vec__50853,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__50848,chunk__50849,count__50850,i__50851,vec__50853,v,_,seq__50848__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__50848,chunk__50849,count__50850,i__50851,vec__50853,v,_,seq__50848__$1,temp__4126__auto__))
);
{
var G__50862 = cljs.core.next.call(null,seq__50848__$1);
var G__50863 = null;
var G__50864 = (0);
var G__50865 = (0);
seq__50848 = G__50862;
chunk__50849 = G__50863;
count__50850 = G__50864;
i__50851 = G__50865;
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

//# sourceMappingURL=nav.js.map