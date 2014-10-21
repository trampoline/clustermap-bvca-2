// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$1332;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1)));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2)));
});
var update__6 = (function() { 
var G__50798__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__50798 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__50798__delegate.call(this,m,k,f,x1,x2,xs);};
G__50798.cljs$lang$maxFixedArity = 5;
G__50798.cljs$lang$applyTo = (function (arglist__50799){
var m = cljs.core.first(arglist__50799);
arglist__50799 = cljs.core.next(arglist__50799);
var k = cljs.core.first(arglist__50799);
arglist__50799 = cljs.core.next(arglist__50799);
var f = cljs.core.first(arglist__50799);
arglist__50799 = cljs.core.next(arglist__50799);
var x1 = cljs.core.first(arglist__50799);
arglist__50799 = cljs.core.next(arglist__50799);
var x2 = cljs.core.first(arglist__50799);
var xs = cljs.core.rest(arglist__50799);
return G__50798__delegate(m,k,f,x1,x2,xs);
});
G__50798.cljs$core$IFn$_invoke$arity$variadic = G__50798__delegate;
return G__50798;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_(m))
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14644__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__50808_50814 = cljs.core.seq(m);var chunk__50809_50815 = null;var count__50810_50816 = (0);var i__50811_50817 = (0);while(true){
if((i__50811_50817 < count__50810_50816))
{var vec__50812_50818 = chunk__50809_50815.cljs$core$IIndexed$_nth$arity$2(null,i__50811_50817);var k_50819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50812_50818,(0),null);var v_50820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50812_50818,(1),null);var m50807_50821 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50807_50821,k_50819,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50820) : f.call(null,v_50820)))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50807_50821,k_50819,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50820) : f.call(null,v_50820)))));
{
var G__50822 = seq__50808_50814;
var G__50823 = chunk__50809_50815;
var G__50824 = count__50810_50816;
var G__50825 = (i__50811_50817 + (1));
seq__50808_50814 = G__50822;
chunk__50809_50815 = G__50823;
count__50810_50816 = G__50824;
i__50811_50817 = G__50825;
continue;
}
} else
{var temp__4126__auto___50826 = cljs.core.seq(seq__50808_50814);if(temp__4126__auto___50826)
{var seq__50808_50827__$1 = temp__4126__auto___50826;if(cljs.core.chunked_seq_QMARK_(seq__50808_50827__$1))
{var c__4314__auto___50828 = cljs.core.chunk_first(seq__50808_50827__$1);{
var G__50829 = cljs.core.chunk_rest(seq__50808_50827__$1);
var G__50830 = c__4314__auto___50828;
var G__50831 = cljs.core.count(c__4314__auto___50828);
var G__50832 = (0);
seq__50808_50814 = G__50829;
chunk__50809_50815 = G__50830;
count__50810_50816 = G__50831;
i__50811_50817 = G__50832;
continue;
}
} else
{var vec__50813_50833 = cljs.core.first(seq__50808_50827__$1);var k_50834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50813_50833,(0),null);var v_50835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50813_50833,(1),null);var m50807_50836 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50807_50836,k_50834,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50835) : f.call(null,v_50835)))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50807_50836,k_50834,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50835) : f.call(null,v_50835)))));
{
var G__50837 = cljs.core.next(seq__50808_50827__$1);
var G__50838 = null;
var G__50839 = (0);
var G__50840 = (0);
seq__50808_50814 = G__50837;
chunk__50809_50815 = G__50838;
count__50810_50816 = G__50839;
i__50811_50817 = G__50840;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__)));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14644__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__50849_50855 = cljs.core.seq(m);var chunk__50850_50856 = null;var count__50851_50857 = (0);var i__50852_50858 = (0);while(true){
if((i__50852_50858 < count__50851_50857))
{var vec__50853_50859 = chunk__50850_50856.cljs$core$IIndexed$_nth$arity$2(null,i__50852_50858);var k_50860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853_50859,(0),null);var v_50861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853_50859,(1),null);var m50848_50862 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50848_50862,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50860) : f.call(null,k_50860)),v_50861)) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50848_50862,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50860) : f.call(null,k_50860)),v_50861)));
{
var G__50863 = seq__50849_50855;
var G__50864 = chunk__50850_50856;
var G__50865 = count__50851_50857;
var G__50866 = (i__50852_50858 + (1));
seq__50849_50855 = G__50863;
chunk__50850_50856 = G__50864;
count__50851_50857 = G__50865;
i__50852_50858 = G__50866;
continue;
}
} else
{var temp__4126__auto___50867 = cljs.core.seq(seq__50849_50855);if(temp__4126__auto___50867)
{var seq__50849_50868__$1 = temp__4126__auto___50867;if(cljs.core.chunked_seq_QMARK_(seq__50849_50868__$1))
{var c__4314__auto___50869 = cljs.core.chunk_first(seq__50849_50868__$1);{
var G__50870 = cljs.core.chunk_rest(seq__50849_50868__$1);
var G__50871 = c__4314__auto___50869;
var G__50872 = cljs.core.count(c__4314__auto___50869);
var G__50873 = (0);
seq__50849_50855 = G__50870;
chunk__50850_50856 = G__50871;
count__50851_50857 = G__50872;
i__50852_50858 = G__50873;
continue;
}
} else
{var vec__50854_50874 = cljs.core.first(seq__50849_50868__$1);var k_50875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50854_50874,(0),null);var v_50876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50854_50874,(1),null);var m50848_50877 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50848_50877,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50875) : f.call(null,k_50875)),v_50876)) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50848_50877,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50875) : f.call(null,k_50875)),v_50876)));
{
var G__50878 = cljs.core.next(seq__50849_50868__$1);
var G__50879 = null;
var G__50880 = (0);
var G__50881 = (0);
seq__50849_50855 = G__50878;
chunk__50850_50856 = G__50879;
count__50851_50857 = G__50880;
i__50852_50858 = G__50881;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__)));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14644__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__50888_50892 = cljs.core.seq(ks);var chunk__50889_50893 = null;var count__50890_50894 = (0);var i__50891_50895 = (0);while(true){
if((i__50891_50895 < count__50890_50894))
{var k_50896 = chunk__50889_50893.cljs$core$IIndexed$_nth$arity$2(null,i__50891_50895);var m50887_50897 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50887_50897,k_50896,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50896) : f.call(null,k_50896)))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50887_50897,k_50896,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50896) : f.call(null,k_50896)))));
{
var G__50898 = seq__50888_50892;
var G__50899 = chunk__50889_50893;
var G__50900 = count__50890_50894;
var G__50901 = (i__50891_50895 + (1));
seq__50888_50892 = G__50898;
chunk__50889_50893 = G__50899;
count__50890_50894 = G__50900;
i__50891_50895 = G__50901;
continue;
}
} else
{var temp__4126__auto___50902 = cljs.core.seq(seq__50888_50892);if(temp__4126__auto___50902)
{var seq__50888_50903__$1 = temp__4126__auto___50902;if(cljs.core.chunked_seq_QMARK_(seq__50888_50903__$1))
{var c__4314__auto___50904 = cljs.core.chunk_first(seq__50888_50903__$1);{
var G__50905 = cljs.core.chunk_rest(seq__50888_50903__$1);
var G__50906 = c__4314__auto___50904;
var G__50907 = cljs.core.count(c__4314__auto___50904);
var G__50908 = (0);
seq__50888_50892 = G__50905;
chunk__50889_50893 = G__50906;
count__50890_50894 = G__50907;
i__50891_50895 = G__50908;
continue;
}
} else
{var k_50909 = cljs.core.first(seq__50888_50903__$1);var m50887_50910 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50887_50910,k_50909,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50909) : f.call(null,k_50909)))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50887_50910,k_50909,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_50909) : f.call(null,k_50909)))));
{
var G__50911 = cljs.core.next(seq__50888_50903__$1);
var G__50912 = null;
var G__50913 = (0);
var G__50914 = (0);
seq__50888_50892 = G__50911;
chunk__50889_50893 = G__50912;
count__50890_50894 = G__50913;
i__50891_50895 = G__50914;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__)));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14644__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__50921_50925 = cljs.core.seq(vs);var chunk__50922_50926 = null;var count__50923_50927 = (0);var i__50924_50928 = (0);while(true){
if((i__50924_50928 < count__50923_50927))
{var v_50929 = chunk__50922_50926.cljs$core$IIndexed$_nth$arity$2(null,i__50924_50928);var m50920_50930 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50920_50930,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50929) : f.call(null,v_50929)),v_50929)) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50920_50930,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50929) : f.call(null,v_50929)),v_50929)));
{
var G__50931 = seq__50921_50925;
var G__50932 = chunk__50922_50926;
var G__50933 = count__50923_50927;
var G__50934 = (i__50924_50928 + (1));
seq__50921_50925 = G__50931;
chunk__50922_50926 = G__50932;
count__50923_50927 = G__50933;
i__50924_50928 = G__50934;
continue;
}
} else
{var temp__4126__auto___50935 = cljs.core.seq(seq__50921_50925);if(temp__4126__auto___50935)
{var seq__50921_50936__$1 = temp__4126__auto___50935;if(cljs.core.chunked_seq_QMARK_(seq__50921_50936__$1))
{var c__4314__auto___50937 = cljs.core.chunk_first(seq__50921_50936__$1);{
var G__50938 = cljs.core.chunk_rest(seq__50921_50936__$1);
var G__50939 = c__4314__auto___50937;
var G__50940 = cljs.core.count(c__4314__auto___50937);
var G__50941 = (0);
seq__50921_50925 = G__50938;
chunk__50922_50926 = G__50939;
count__50923_50927 = G__50940;
i__50924_50928 = G__50941;
continue;
}
} else
{var v_50942 = cljs.core.first(seq__50921_50936__$1);var m50920_50943 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50920_50943,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50942) : f.call(null,v_50942)),v_50942)) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50920_50943,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_50942) : f.call(null,v_50942)),v_50942)));
{
var G__50944 = cljs.core.next(seq__50921_50936__$1);
var G__50945 = null;
var G__50946 = (0);
var G__50947 = (0);
seq__50921_50925 = G__50944;
chunk__50922_50926 = G__50945;
count__50923_50927 = G__50946;
i__50924_50928 = G__50947;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__)));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__50948){var vec__50950 = p__50948;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50950,(0),null);var ks = cljs.core.nthnext(vec__50950,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)),ks);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else
{var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);if(cljs.core.empty_QMARK_(res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_(x))
{var m_atom__14644__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__50959_50965 = cljs.core.seq(x);var chunk__50960_50966 = null;var count__50961_50967 = (0);var i__50962_50968 = (0);while(true){
if((i__50962_50968 < count__50961_50967))
{var vec__50963_50969 = chunk__50960_50966.cljs$core$IIndexed$_nth$arity$2(null,i__50962_50968);var k_50970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50963_50969,(0),null);var v_50971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50963_50969,(1),null);var m50958_50972 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50958_50972,((typeof k_50970 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_50970):k_50970),keywordize_map(v_50971))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50958_50972,((typeof k_50970 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_50970):k_50970),keywordize_map(v_50971))));
{
var G__50973 = seq__50959_50965;
var G__50974 = chunk__50960_50966;
var G__50975 = count__50961_50967;
var G__50976 = (i__50962_50968 + (1));
seq__50959_50965 = G__50973;
chunk__50960_50966 = G__50974;
count__50961_50967 = G__50975;
i__50962_50968 = G__50976;
continue;
}
} else
{var temp__4126__auto___50977 = cljs.core.seq(seq__50959_50965);if(temp__4126__auto___50977)
{var seq__50959_50978__$1 = temp__4126__auto___50977;if(cljs.core.chunked_seq_QMARK_(seq__50959_50978__$1))
{var c__4314__auto___50979 = cljs.core.chunk_first(seq__50959_50978__$1);{
var G__50980 = cljs.core.chunk_rest(seq__50959_50978__$1);
var G__50981 = c__4314__auto___50979;
var G__50982 = cljs.core.count(c__4314__auto___50979);
var G__50983 = (0);
seq__50959_50965 = G__50980;
chunk__50960_50966 = G__50981;
count__50961_50967 = G__50982;
i__50962_50968 = G__50983;
continue;
}
} else
{var vec__50964_50984 = cljs.core.first(seq__50959_50978__$1);var k_50985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50964_50984,(0),null);var v_50986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50964_50984,(1),null);var m50958_50987 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50958_50987,((typeof k_50985 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_50985):k_50985),keywordize_map(v_50986))) : cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m50958_50987,((typeof k_50985 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_50985):k_50985),keywordize_map(v_50986))));
{
var G__50988 = cljs.core.next(seq__50959_50978__$1);
var G__50989 = null;
var G__50990 = (0);
var G__50991 = (0);
seq__50959_50965 = G__50988;
chunk__50960_50966 = G__50989;
count__50961_50967 = G__50990;
i__50962_50968 = G__50991;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__14644__auto__) : cljs.core.deref.call(null,m_atom__14644__auto__)));
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_(x))
{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find(m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__14713__auto__ = temp__4124__auto__;return cljs.core.val(pair__14713__auto__);
} else
{var e = schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__50992 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__50993 = cljs.core.next(ks);
m = G__50992;
ks = G__50993;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__51002(s__51003){return (new cljs.core.LazySeq(null,(function (){var s__51003__$1 = s__51003;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51003__$1);if(temp__4126__auto__)
{var s__51003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51003__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51003__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51005 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51004 = (0);while(true){
if((i__51004 < size__4282__auto__))
{var vec__51008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51004);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__51005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__51010 = (i__51004 + (1));
i__51004 = G__51010;
continue;
}
} else
{{
var G__51011 = (i__51004 + (1));
i__51004 = G__51011;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51005),iter__51002(cljs.core.chunk_rest(s__51003__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51005),null);
}
} else
{var vec__51009 = cljs.core.first(s__51003__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51009,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51009,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__51002(cljs.core.rest(s__51003__$2)));
} else
{{
var G__51012 = cljs.core.rest(s__51003__$2);
s__51003__$1 = G__51012;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__51013){
var m = cljs.core.first(arglist__51013);
var kvs = cljs.core.rest(arglist__51013);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__51014){
var m = cljs.core.first(arglist__51014);
arglist__51014 = cljs.core.next(arglist__51014);
var key_seq = cljs.core.first(arglist__51014);
arglist__51014 = cljs.core.next(arglist__51014);
var f = cljs.core.first(arglist__51014);
var args = cljs.core.rest(arglist__51014);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next(s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat(n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq(s))
{return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){return unchunk(cljs.core.rest(s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq(xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next(xs__$1))
{return null;
} else
{return cljs.core.first(xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));var iter__4283__auto__ = ((function (s){
return (function iter__51019(s__51020){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__51020__$1 = s__51020;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51020__$1);if(temp__4126__auto__)
{var s__51020__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51020__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51020__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51022 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51021 = (0);while(true){
if((i__51021 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51021);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{cljs.core.chunk_append(b__51022,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__51023 = (i__51021 + (1));
i__51021 = G__51023;
continue;
}
} else
{{
var G__51024 = (i__51021 + (1));
i__51021 = G__51024;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51022),iter__51019(cljs.core.chunk_rest(s__51020__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51022),null);
}
} else
{var x = cljs.core.first(s__51020__$2);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__51019(cljs.core.rest(s__51020__$2)));
} else
{{
var G__51025 = cljs.core.rest(s__51020__$2);
s__51020__$1 = G__51025;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4283__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq(seqs))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__51026){
var colls = cljs.core.seq(arglist__51026);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__51027__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__51028 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__51029 = cljs.core.first(xs);
var G__51030 = cljs.core.next(xs);
coll = G__51028;
x = G__51029;
xs = G__51030;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__51027 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51027__delegate.call(this,coll,x,xs);};
G__51027.cljs$lang$maxFixedArity = 2;
G__51027.cljs$lang$applyTo = (function (arglist__51031){
var coll = cljs.core.first(arglist__51031);
arglist__51031 = cljs.core.next(arglist__51031);
var x = cljs.core.first(arglist__51031);
var xs = cljs.core.rest(arglist__51031);
return G__51027__delegate(coll,x,xs);
});
G__51027.cljs$core$IFn$_invoke$arity$variadic = G__51027__delegate;
return G__51027;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons(x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__51033__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__51032_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__51032_SHARP_,args);
}));
};
var G__51033 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51033__delegate.call(this,a,f,args);};
G__51033.cljs$lang$maxFixedArity = 2;
G__51033.cljs$lang$applyTo = (function (arglist__51034){
var a = cljs.core.first(arglist__51034);
arglist__51034 = cljs.core.next(arglist__51034);
var f = cljs.core.first(arglist__51034);
var args = cljs.core.rest(arglist__51034);
return G__51033__delegate(a,f,args);
});
G__51033.cljs$core$IFn$_invoke$arity$variadic = G__51033__delegate;
return G__51033;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__51035__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__51035 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51035__delegate.call(this,f,arg,args);};
G__51035.cljs$lang$maxFixedArity = 2;
G__51035.cljs$lang$applyTo = (function (arglist__51036){
var f = cljs.core.first(arglist__51036);
arglist__51036 = cljs.core.next(arglist__51036);
var arg = cljs.core.first(arglist__51036);
var args = cljs.core.rest(arglist__51036);
return G__51035__delegate(f,arg,args);
});
G__51035.cljs$core$IFn$_invoke$arity$variadic = G__51035__delegate;
return G__51035;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
