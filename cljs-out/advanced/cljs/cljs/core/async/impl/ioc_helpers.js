// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$1093);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t51755 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t51755 = (function (f,fn_handler,meta51756){
this.f = f;
this.fn_handler = fn_handler;
this.meta51756 = meta51756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t51755.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t51755.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t51755";
cljs.core.async.impl.ioc_helpers.t51755.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async.impl.ioc-helpers/t51755");
});
cljs.core.async.impl.ioc_helpers.t51755.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t51755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t51755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t51755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51757){var self__ = this;
var _51757__$1 = this;return self__.meta51756;
});
cljs.core.async.impl.ioc_helpers.t51755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51757,meta51756__$1){var self__ = this;
var _51757__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t51755(self__.f,self__.fn_handler,meta51756__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t51755 = (function __GT_t51755(f__$1,fn_handler__$1,meta51756){return (new cljs.core.async.impl.ioc_helpers.t51755(f__$1,fn_handler__$1,meta51756));
});
}
return (new cljs.core.async.impl.ioc_helpers.t51755(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e51759){if((e51759 instanceof Object))
{var ex = e51759;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e51759;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_51762_51764 = state;(statearr_51762_51764[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_51762_51764[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_51763_51765 = state;(statearr_51763_51765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
(statearr_51763_51765[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$1094;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_51768_51770 = state;(statearr_51768_51770[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_51768_51770[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_51769_51771 = state;(statearr_51769_51771[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
(statearr_51769_51771[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$1094;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__51772){var map__51777 = p__51772;var map__51777__$1 = ((cljs.core.seq_QMARK_(map__51777))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51777):map__51777);var opts = map__51777__$1;var statearr_51778_51781 = state;(statearr_51778_51781[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__51777,map__51777__$1,opts){
return (function (val){var statearr_51779_51782 = state;(statearr_51779_51782[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__51777,map__51777__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_51780_51783 = state;(statearr_51780_51783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
return cljs.core.constant$keyword$1094;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__51772 = null;if (arguments.length > 3) {
  p__51772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__51772);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__51784){
var state = cljs.core.first(arglist__51784);
arglist__51784 = cljs.core.next(arglist__51784);
var cont_block = cljs.core.first(arglist__51784);
arglist__51784 = cljs.core.next(arglist__51784);
var ports = cljs.core.first(arglist__51784);
var p__51772 = cljs.core.rest(arglist__51784);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__51772);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4144__auto__,k__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4144__auto____$1,k__4145__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4146__auto__,k51786,else__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;var G__51788 = (((k51786 instanceof cljs.core.Keyword))?k51786.fqn:null);switch (G__51788) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51786,else__4147__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4158__auto__,writer__4159__auto__,opts__4160__auto__){var self__ = this;
var this__4158__auto____$1 = this;var pr_pair__4161__auto__ = ((function (this__4158__auto____$1){
return (function (keyval__4162__auto__){return cljs.core.pr_sequential_writer(writer__4159__auto__,cljs.core.pr_writer,""," ","",opts__4160__auto__,keyval__4162__auto__);
});})(this__4158__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4159__auto__,pr_pair__4161__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4160__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1095,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1096,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1097,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1098,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1099,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4138__auto__){var self__ = this;
var this__4138__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4148__auto__){var self__ = this;
var this__4148__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4139__auto__){var self__ = this;
var this__4139__auto____$1 = this;var h__3969__auto__ = self__.__hash;if(!((h__3969__auto__ == null)))
{return h__3969__auto__;
} else
{var h__3969__auto____$1 = cljs.core.hash_imap(this__4139__auto____$1);self__.__hash = h__3969__auto____$1;
return h__3969__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4140__auto__,other__4141__auto__){var self__ = this;
var this__4140__auto____$1 = this;if(cljs.core.truth_((function (){var and__3546__auto__ = other__4141__auto__;if(cljs.core.truth_(and__3546__auto__))
{return ((this__4140__auto____$1.constructor === other__4141__auto__.constructor)) && (cljs.core.equiv_map(this__4140__auto____$1,other__4141__auto__));
} else
{return and__3546__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4153__auto__,k__4154__auto__){var self__ = this;
var this__4153__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1097,null,cljs.core.constant$keyword$1095,null,cljs.core.constant$keyword$1096,null,cljs.core.constant$keyword$1099,null,cljs.core.constant$keyword$1098,null], null), null),k__4154__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4153__auto____$1),self__.__meta),k__4154__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4154__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4151__auto__,k__4152__auto__,G__51785){var self__ = this;
var this__4151__auto____$1 = this;var pred__51789 = cljs.core.keyword_identical_QMARK_;var expr__51790 = k__4152__auto__;if(cljs.core.truth_((pred__51789.cljs$core$IFn$_invoke$arity$2 ? pred__51789.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1095,expr__51790) : pred__51789.call(null,cljs.core.constant$keyword$1095,expr__51790))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__51785,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__51789.cljs$core$IFn$_invoke$arity$2 ? pred__51789.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1096,expr__51790) : pred__51789.call(null,cljs.core.constant$keyword$1096,expr__51790))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__51785,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__51789.cljs$core$IFn$_invoke$arity$2 ? pred__51789.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1097,expr__51790) : pred__51789.call(null,cljs.core.constant$keyword$1097,expr__51790))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__51785,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__51789.cljs$core$IFn$_invoke$arity$2 ? pred__51789.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1098,expr__51790) : pred__51789.call(null,cljs.core.constant$keyword$1098,expr__51790))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__51785,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__51789.cljs$core$IFn$_invoke$arity$2 ? pred__51789.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1099,expr__51790) : pred__51789.call(null,cljs.core.constant$keyword$1099,expr__51790))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__51785,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4152__auto__,G__51785),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4156__auto__){var self__ = this;
var this__4156__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1095,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1096,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1097,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1098,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1099,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4143__auto__,G__51785){var self__ = this;
var this__4143__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__51785,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4149__auto__,entry__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4150__auto__))
{return cljs.core._assoc(this__4149__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4150__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4150__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4149__auto____$1,entry__4150__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4178__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4178__auto__,writer__4179__auto__){return cljs.core._write(writer__4179__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__51787){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$1095.cljs$core$IFn$_invoke$arity$1(G__51787),cljs.core.constant$keyword$1096.cljs$core$IFn$_invoke$arity$1(G__51787),cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(G__51787),cljs.core.constant$keyword$1098.cljs$core$IFn$_invoke$arity$1(G__51787),cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(G__51787),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51787,cljs.core.constant$keyword$1095,cljs.core.array_seq([cljs.core.constant$keyword$1096,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1099], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_51794 = state;(statearr_51794[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_51794;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$1095.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$1096.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3546__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = catch_block;if(cljs.core.truth_(and__3546__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var statearr_51800 = state;(statearr_51800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_51800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_51800[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_51800[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$1095,null,cljs.core.array_seq([cljs.core.constant$keyword$1096,null], 0)));
return statearr_51800;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3546__auto__;
}
})()))
{var statearr_51801_51805 = state;(statearr_51801_51805[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__51806 = state;
state = G__51806;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(catch_block);if(and__3546__auto____$1)
{return cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var statearr_51802 = state;(statearr_51802[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_51802[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$1097,null));
return statearr_51802;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(exception);if(and__3546__auto__)
{return cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3546__auto__;
}
})()))
{var statearr_51803 = state;(statearr_51803[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_51803[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$1097,null));
return statearr_51803;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_51804 = state;(statearr_51804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$1098.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_51804[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_51804;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});
