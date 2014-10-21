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
var seq__33745_33751 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33746_33752 = null;var count__33747_33753 = (0);var i__33748_33754 = (0);while(true){
if((i__33748_33754 < count__33747_33753))
{var vec__33749_33755 = cljs.core._nth.call(null,chunk__33746_33752,i__33748_33754);var v_33756 = cljs.core.nth.call(null,vec__33749_33755,(0),null);var body_class_33757 = cljs.core.nth.call(null,vec__33749_33755,(1),null);if(cljs.core._EQ_.call(null,v_33756,view))
{domina.add_class_BANG_.call(null,body,body_class_33757);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33757);
}
{
var G__33758 = seq__33745_33751;
var G__33759 = chunk__33746_33752;
var G__33760 = count__33747_33753;
var G__33761 = (i__33748_33754 + (1));
seq__33745_33751 = G__33758;
chunk__33746_33752 = G__33759;
count__33747_33753 = G__33760;
i__33748_33754 = G__33761;
continue;
}
} else
{var temp__4126__auto___33762 = cljs.core.seq.call(null,seq__33745_33751);if(temp__4126__auto___33762)
{var seq__33745_33763__$1 = temp__4126__auto___33762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33745_33763__$1))
{var c__4406__auto___33764 = cljs.core.chunk_first.call(null,seq__33745_33763__$1);{
var G__33765 = cljs.core.chunk_rest.call(null,seq__33745_33763__$1);
var G__33766 = c__4406__auto___33764;
var G__33767 = cljs.core.count.call(null,c__4406__auto___33764);
var G__33768 = (0);
seq__33745_33751 = G__33765;
chunk__33746_33752 = G__33766;
count__33747_33753 = G__33767;
i__33748_33754 = G__33768;
continue;
}
} else
{var vec__33750_33769 = cljs.core.first.call(null,seq__33745_33763__$1);var v_33770 = cljs.core.nth.call(null,vec__33750_33769,(0),null);var body_class_33771 = cljs.core.nth.call(null,vec__33750_33769,(1),null);if(cljs.core._EQ_.call(null,v_33770,view))
{domina.add_class_BANG_.call(null,body,body_class_33771);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33771);
}
{
var G__33772 = cljs.core.next.call(null,seq__33745_33763__$1);
var G__33773 = null;
var G__33774 = (0);
var G__33775 = (0);
seq__33745_33751 = G__33772;
chunk__33746_33752 = G__33773;
count__33747_33753 = G__33774;
i__33748_33754 = G__33775;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33782 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33783 = null;var count__33784 = (0);var i__33785 = (0);while(true){
if((i__33785 < count__33784))
{var vec__33786 = cljs.core._nth.call(null,chunk__33783,i__33785);var v = cljs.core.nth.call(null,vec__33786,(0),null);var _ = cljs.core.nth.call(null,vec__33786,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__33782,chunk__33783,count__33784,i__33785,vec__33786,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__33782,chunk__33783,count__33784,i__33785,vec__33786,v,_))
);
{
var G__33788 = seq__33782;
var G__33789 = chunk__33783;
var G__33790 = count__33784;
var G__33791 = (i__33785 + (1));
seq__33782 = G__33788;
chunk__33783 = G__33789;
count__33784 = G__33790;
i__33785 = G__33791;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33782);if(temp__4126__auto__)
{var seq__33782__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33782__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__33782__$1);{
var G__33792 = cljs.core.chunk_rest.call(null,seq__33782__$1);
var G__33793 = c__4406__auto__;
var G__33794 = cljs.core.count.call(null,c__4406__auto__);
var G__33795 = (0);
seq__33782 = G__33792;
chunk__33783 = G__33793;
count__33784 = G__33794;
i__33785 = G__33795;
continue;
}
} else
{var vec__33787 = cljs.core.first.call(null,seq__33782__$1);var v = cljs.core.nth.call(null,vec__33787,(0),null);var _ = cljs.core.nth.call(null,vec__33787,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__33782,chunk__33783,count__33784,i__33785,vec__33787,v,_,seq__33782__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__33782,chunk__33783,count__33784,i__33785,vec__33787,v,_,seq__33782__$1,temp__4126__auto__))
);
{
var G__33796 = cljs.core.next.call(null,seq__33782__$1);
var G__33797 = null;
var G__33798 = (0);
var G__33799 = (0);
seq__33782 = G__33796;
chunk__33783 = G__33797;
count__33784 = G__33798;
i__33785 = G__33799;
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
