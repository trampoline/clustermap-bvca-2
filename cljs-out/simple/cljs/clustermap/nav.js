// Compiled by ClojureScript 0.0-2322
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
var seq__32695_32701 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32696_32702 = null;var count__32697_32703 = (0);var i__32698_32704 = (0);while(true){
if((i__32698_32704 < count__32697_32703))
{var vec__32699_32705 = cljs.core._nth.call(null,chunk__32696_32702,i__32698_32704);var v_32706 = cljs.core.nth.call(null,vec__32699_32705,(0),null);var body_class_32707 = cljs.core.nth.call(null,vec__32699_32705,(1),null);if(cljs.core._EQ_.call(null,v_32706,view))
{domina.add_class_BANG_.call(null,body,body_class_32707);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32707);
}
{
var G__32708 = seq__32695_32701;
var G__32709 = chunk__32696_32702;
var G__32710 = count__32697_32703;
var G__32711 = (i__32698_32704 + (1));
seq__32695_32701 = G__32708;
chunk__32696_32702 = G__32709;
count__32697_32703 = G__32710;
i__32698_32704 = G__32711;
continue;
}
} else
{var temp__4126__auto___32712 = cljs.core.seq.call(null,seq__32695_32701);if(temp__4126__auto___32712)
{var seq__32695_32713__$1 = temp__4126__auto___32712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32695_32713__$1))
{var c__4314__auto___32714 = cljs.core.chunk_first.call(null,seq__32695_32713__$1);{
var G__32715 = cljs.core.chunk_rest.call(null,seq__32695_32713__$1);
var G__32716 = c__4314__auto___32714;
var G__32717 = cljs.core.count.call(null,c__4314__auto___32714);
var G__32718 = (0);
seq__32695_32701 = G__32715;
chunk__32696_32702 = G__32716;
count__32697_32703 = G__32717;
i__32698_32704 = G__32718;
continue;
}
} else
{var vec__32700_32719 = cljs.core.first.call(null,seq__32695_32713__$1);var v_32720 = cljs.core.nth.call(null,vec__32700_32719,(0),null);var body_class_32721 = cljs.core.nth.call(null,vec__32700_32719,(1),null);if(cljs.core._EQ_.call(null,v_32720,view))
{domina.add_class_BANG_.call(null,body,body_class_32721);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32721);
}
{
var G__32722 = cljs.core.next.call(null,seq__32695_32713__$1);
var G__32723 = null;
var G__32724 = (0);
var G__32725 = (0);
seq__32695_32701 = G__32722;
chunk__32696_32702 = G__32723;
count__32697_32703 = G__32724;
i__32698_32704 = G__32725;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32732 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32733 = null;var count__32734 = (0);var i__32735 = (0);while(true){
if((i__32735 < count__32734))
{var vec__32736 = cljs.core._nth.call(null,chunk__32733,i__32735);var v = cljs.core.nth.call(null,vec__32736,(0),null);var _ = cljs.core.nth.call(null,vec__32736,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32732,chunk__32733,count__32734,i__32735,vec__32736,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32732,chunk__32733,count__32734,i__32735,vec__32736,v,_))
);
{
var G__32738 = seq__32732;
var G__32739 = chunk__32733;
var G__32740 = count__32734;
var G__32741 = (i__32735 + (1));
seq__32732 = G__32738;
chunk__32733 = G__32739;
count__32734 = G__32740;
i__32735 = G__32741;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32732);if(temp__4126__auto__)
{var seq__32732__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32732__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32732__$1);{
var G__32742 = cljs.core.chunk_rest.call(null,seq__32732__$1);
var G__32743 = c__4314__auto__;
var G__32744 = cljs.core.count.call(null,c__4314__auto__);
var G__32745 = (0);
seq__32732 = G__32742;
chunk__32733 = G__32743;
count__32734 = G__32744;
i__32735 = G__32745;
continue;
}
} else
{var vec__32737 = cljs.core.first.call(null,seq__32732__$1);var v = cljs.core.nth.call(null,vec__32737,(0),null);var _ = cljs.core.nth.call(null,vec__32737,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32732,chunk__32733,count__32734,i__32735,vec__32737,v,_,seq__32732__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32732,chunk__32733,count__32734,i__32735,vec__32737,v,_,seq__32732__$1,temp__4126__auto__))
);
{
var G__32746 = cljs.core.next.call(null,seq__32732__$1);
var G__32747 = null;
var G__32748 = (0);
var G__32749 = (0);
seq__32732 = G__32746;
chunk__32733 = G__32747;
count__32734 = G__32748;
i__32735 = G__32749;
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
