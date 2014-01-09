// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$122);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t23361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t23361 = (function (f,fn_handler,meta23362){
this.f = f;
this.fn_handler = fn_handler;
this.meta23362 = meta23362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t23361.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t23361.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t23361";
cljs.core.async.impl.ioc_helpers.t23361.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async.impl.ioc-helpers/t23361");
});
cljs.core.async.impl.ioc_helpers.t23361.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t23361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t23361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t23361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23363){var self__ = this;
var _23363__$1 = this;return self__.meta23362;
});
cljs.core.async.impl.ioc_helpers.t23361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23363,meta23362__$1){var self__ = this;
var _23363__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t23361(self__.f,self__.fn_handler,meta23362__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t23361 = (function __GT_t23361(f__$1,fn_handler__$1,meta23362){return (new cljs.core.async.impl.ioc_helpers.t23361(f__$1,fn_handler__$1,meta23362));
});
}
return (new cljs.core.async.impl.ioc_helpers.t23361(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e23365){if((e23365 instanceof Object))
{var ex = e23365;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$112)
{throw e23365;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_23368_23370 = state;(statearr_23368_23370[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_23368_23370[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_23369_23371 = state;(statearr_23369_23371[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_23369_23371[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$123;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_23374_23376 = state;(statearr_23374_23376[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_23374_23376[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_23375_23377 = state;(statearr_23375_23377[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_23375_23377[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$123;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23378){var map__23383 = p__23378;var map__23383__$1 = ((cljs.core.seq_QMARK_(map__23383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23383):map__23383);var opts = map__23383__$1;var statearr_23384_23387 = state;(statearr_23384_23387[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_23385_23388 = state;(statearr_23385_23388[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_23386_23389 = state;(statearr_23386_23389[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$123;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23378 = null;if (arguments.length > 3) {
  p__23378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23378);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23390){
var state = cljs.core.first(arglist__23390);
arglist__23390 = cljs.core.next(arglist__23390);
var cont_block = cljs.core.first(arglist__23390);
arglist__23390 = cljs.core.next(arglist__23390);
var ports = cljs.core.first(arglist__23390);
var p__23378 = cljs.core.rest(arglist__23390);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23378);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3981__auto__){var self__ = this;
var this__3981__auto____$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(this__3981__auto____$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3986__auto__,k__3987__auto__){var self__ = this;
var this__3986__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3986__auto____$1,k__3987__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3988__auto__,k23392,else__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k23392,cljs.core.constant$keyword$124))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k23392,cljs.core.constant$keyword$125))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k23392,cljs.core.constant$keyword$126))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k23392,cljs.core.constant$keyword$127))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k23392,cljs.core.constant$keyword$128))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$112)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23392,else__3989__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3993__auto__,k__3994__auto__,G__23391){var self__ = this;
var this__3993__auto____$1 = this;var pred__23394 = cljs.core.keyword_identical_QMARK_;var expr__23395 = k__3994__auto__;if(cljs.core.truth_((pred__23394.cljs$core$IFn$_invoke$arity$2 ? pred__23394.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$124,expr__23395) : pred__23394.call(null,cljs.core.constant$keyword$124,expr__23395))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__23391,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__23394.cljs$core$IFn$_invoke$arity$2 ? pred__23394.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$125,expr__23395) : pred__23394.call(null,cljs.core.constant$keyword$125,expr__23395))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__23391,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__23394.cljs$core$IFn$_invoke$arity$2 ? pred__23394.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$126,expr__23395) : pred__23394.call(null,cljs.core.constant$keyword$126,expr__23395))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__23391,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__23394.cljs$core$IFn$_invoke$arity$2 ? pred__23394.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$127,expr__23395) : pred__23394.call(null,cljs.core.constant$keyword$127,expr__23395))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__23391,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__23394.cljs$core$IFn$_invoke$arity$2 ? pred__23394.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$128,expr__23395) : pred__23394.call(null,cljs.core.constant$keyword$128,expr__23395))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__23391,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3994__auto__,G__23391),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4000__auto__,writer__4001__auto__,opts__4002__auto__){var self__ = this;
var this__4000__auto____$1 = this;var pr_pair__4003__auto__ = (function (keyval__4004__auto__){return cljs.core.pr_sequential_writer(writer__4001__auto__,cljs.core.pr_writer,""," ","",opts__4002__auto__,keyval__4004__auto__);
});return cljs.core.pr_sequential_writer(writer__4001__auto__,pr_pair__4003__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4002__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$124,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$125,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$126,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$127,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$128,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3991__auto__,entry__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3992__auto__))
{return cljs.core._assoc(this__3991__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3991__auto____$1,entry__3992__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3998__auto__){var self__ = this;
var this__3998__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$124,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$125,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$126,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$127,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$128,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3990__auto__){var self__ = this;
var this__3990__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3982__auto__,other__3983__auto__){var self__ = this;
var this__3982__auto____$1 = this;if(cljs.core.truth_((function (){var and__3394__auto__ = other__3983__auto__;if(cljs.core.truth_(and__3394__auto__))
{return ((this__3982__auto____$1.constructor === other__3983__auto__.constructor)) && (cljs.core.equiv_map(this__3982__auto____$1,other__3983__auto__));
} else
{return and__3394__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3985__auto__,G__23391){var self__ = this;
var this__3985__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__23391,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3995__auto__,k__3996__auto__){var self__ = this;
var this__3995__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$126,null,cljs.core.constant$keyword$124,null,cljs.core.constant$keyword$125,null,cljs.core.constant$keyword$127,null,cljs.core.constant$keyword$128,null], null), null),k__3996__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3995__auto____$1),self__.__meta),k__3996__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3996__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4020__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4020__auto__,writer__4021__auto__){return cljs.core._write(writer__4021__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__23393){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(G__23393),cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(G__23393),cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(G__23393),cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(G__23393),cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(G__23393),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23393,cljs.core.constant$keyword$124,cljs.core.array_seq([cljs.core.constant$keyword$125,cljs.core.constant$keyword$126,cljs.core.constant$keyword$127,cljs.core.constant$keyword$128], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_23398 = state;(statearr_23398[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_23398;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3394__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = catch_block;if(cljs.core.truth_(and__3394__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var statearr_23404 = state;(statearr_23404[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_23404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_23404[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_23404[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$124,null,cljs.core.array_seq([cljs.core.constant$keyword$125,null], 0)));
return statearr_23404;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3394__auto__;
}
})()))
{var statearr_23405_23409 = state;(statearr_23405_23409[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__23410 = state;
state = G__23410;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(catch_block);if(and__3394__auto____$1)
{return cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var statearr_23406 = state;(statearr_23406[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23406[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$126,null));
return statearr_23406;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(exception);if(and__3394__auto__)
{return cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto__;
}
})()))
{var statearr_23407 = state;(statearr_23407[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23407[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$126,null));
return statearr_23407;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_23408 = state;(statearr_23408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23408[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$128.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_23408;
} else
{if(cljs.core.constant$keyword$112)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
