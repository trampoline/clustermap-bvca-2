// Compiled by ClojureScript 0.0-2261
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
var seq__25798_25804 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25799_25805 = null;var count__25800_25806 = (0);var i__25801_25807 = (0);while(true){
if((i__25801_25807 < count__25800_25806))
{var vec__25802_25808 = cljs.core._nth.call(null,chunk__25799_25805,i__25801_25807);var v_25809 = cljs.core.nth.call(null,vec__25802_25808,(0),null);var body_class_25810 = cljs.core.nth.call(null,vec__25802_25808,(1),null);if(cljs.core._EQ_.call(null,v_25809,view))
{domina.add_class_BANG_.call(null,body,body_class_25810);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25810);
}
{
var G__25811 = seq__25798_25804;
var G__25812 = chunk__25799_25805;
var G__25813 = count__25800_25806;
var G__25814 = (i__25801_25807 + (1));
seq__25798_25804 = G__25811;
chunk__25799_25805 = G__25812;
count__25800_25806 = G__25813;
i__25801_25807 = G__25814;
continue;
}
} else
{var temp__4126__auto___25815 = cljs.core.seq.call(null,seq__25798_25804);if(temp__4126__auto___25815)
{var seq__25798_25816__$1 = temp__4126__auto___25815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25798_25816__$1))
{var c__4299__auto___25817 = cljs.core.chunk_first.call(null,seq__25798_25816__$1);{
var G__25818 = cljs.core.chunk_rest.call(null,seq__25798_25816__$1);
var G__25819 = c__4299__auto___25817;
var G__25820 = cljs.core.count.call(null,c__4299__auto___25817);
var G__25821 = (0);
seq__25798_25804 = G__25818;
chunk__25799_25805 = G__25819;
count__25800_25806 = G__25820;
i__25801_25807 = G__25821;
continue;
}
} else
{var vec__25803_25822 = cljs.core.first.call(null,seq__25798_25816__$1);var v_25823 = cljs.core.nth.call(null,vec__25803_25822,(0),null);var body_class_25824 = cljs.core.nth.call(null,vec__25803_25822,(1),null);if(cljs.core._EQ_.call(null,v_25823,view))
{domina.add_class_BANG_.call(null,body,body_class_25824);
} else
{domina.remove_class_BANG_.call(null,body,body_class_25824);
}
{
var G__25825 = cljs.core.next.call(null,seq__25798_25816__$1);
var G__25826 = null;
var G__25827 = (0);
var G__25828 = (0);
seq__25798_25804 = G__25825;
chunk__25799_25805 = G__25826;
count__25800_25806 = G__25827;
i__25801_25807 = G__25828;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__25835 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__25836 = null;var count__25837 = (0);var i__25838 = (0);while(true){
if((i__25838 < count__25837))
{var vec__25839 = cljs.core._nth.call(null,chunk__25836,i__25838);var v = cljs.core.nth.call(null,vec__25839,(0),null);var _ = cljs.core.nth.call(null,vec__25839,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25835,chunk__25836,count__25837,i__25838,vec__25839,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25835,chunk__25836,count__25837,i__25838,vec__25839,v,_))
);
{
var G__25841 = seq__25835;
var G__25842 = chunk__25836;
var G__25843 = count__25837;
var G__25844 = (i__25838 + (1));
seq__25835 = G__25841;
chunk__25836 = G__25842;
count__25837 = G__25843;
i__25838 = G__25844;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25835);if(temp__4126__auto__)
{var seq__25835__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25835__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25835__$1);{
var G__25845 = cljs.core.chunk_rest.call(null,seq__25835__$1);
var G__25846 = c__4299__auto__;
var G__25847 = cljs.core.count.call(null,c__4299__auto__);
var G__25848 = (0);
seq__25835 = G__25845;
chunk__25836 = G__25846;
count__25837 = G__25847;
i__25838 = G__25848;
continue;
}
} else
{var vec__25840 = cljs.core.first.call(null,seq__25835__$1);var v = cljs.core.nth.call(null,vec__25840,(0),null);var _ = cljs.core.nth.call(null,vec__25840,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__25835,chunk__25836,count__25837,i__25838,vec__25840,v,_,seq__25835__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__25835,chunk__25836,count__25837,i__25838,vec__25840,v,_,seq__25835__$1,temp__4126__auto__))
);
{
var G__25849 = cljs.core.next.call(null,seq__25835__$1);
var G__25850 = null;
var G__25851 = (0);
var G__25852 = (0);
seq__25835 = G__25849;
chunk__25836 = G__25850;
count__25837 = G__25851;
i__25838 = G__25852;
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
