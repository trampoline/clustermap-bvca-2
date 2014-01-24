// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12768 = (function (f,fn_handler,meta12769){
this.f = f;
this.fn_handler = fn_handler;
this.meta12769 = meta12769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12768.cljs$lang$type = true;
cljs.core.async.t12768.cljs$lang$ctorStr = "cljs.core.async/t12768";
cljs.core.async.t12768.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12768");
});
cljs.core.async.t12768.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12770){var self__ = this;
var _12770__$1 = this;return self__.meta12769;
});
cljs.core.async.t12768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12770,meta12769__$1){var self__ = this;
var _12770__$1 = this;return (new cljs.core.async.t12768(self__.f,self__.fn_handler,meta12769__$1));
});
cljs.core.async.__GT_t12768 = (function __GT_t12768(f__$1,fn_handler__$1,meta12769){return (new cljs.core.async.t12768(f__$1,fn_handler__$1,meta12769));
});
}
return (new cljs.core.async.t12768(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12772 = buff;if(G__12772)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12772.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12772.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12772);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12772);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12773 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12773);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12773);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12774 = n;var x_12775 = 0;while(true){
if((x_12775 < n__4248__auto___12774))
{(a[x_12775] = 0);
{
var G__12776 = (x_12775 + 1);
x_12775 = G__12776;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12777 = (i + 1);
i = G__12777;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12781 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12781 = (function (flag,alt_flag,meta12782){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12782 = meta12782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12781.cljs$lang$type = true;
cljs.core.async.t12781.cljs$lang$ctorStr = "cljs.core.async/t12781";
cljs.core.async.t12781.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12781");
});
cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12783){var self__ = this;
var _12783__$1 = this;return self__.meta12782;
});
cljs.core.async.t12781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12783,meta12782__$1){var self__ = this;
var _12783__$1 = this;return (new cljs.core.async.t12781(self__.flag,self__.alt_flag,meta12782__$1));
});
cljs.core.async.__GT_t12781 = (function __GT_t12781(flag__$1,alt_flag__$1,meta12782){return (new cljs.core.async.t12781(flag__$1,alt_flag__$1,meta12782));
});
}
return (new cljs.core.async.t12781(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12787 = (function (cb,flag,alt_handler,meta12788){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12788 = meta12788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12787.cljs$lang$type = true;
cljs.core.async.t12787.cljs$lang$ctorStr = "cljs.core.async/t12787";
cljs.core.async.t12787.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12787");
});
cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12789){var self__ = this;
var _12789__$1 = this;return self__.meta12788;
});
cljs.core.async.t12787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12789,meta12788__$1){var self__ = this;
var _12789__$1 = this;return (new cljs.core.async.t12787(self__.cb,self__.flag,self__.alt_handler,meta12788__$1));
});
cljs.core.async.__GT_t12787 = (function __GT_t12787(cb__$1,flag__$1,alt_handler__$1,meta12788){return (new cljs.core.async.t12787(cb__$1,flag__$1,alt_handler__$1,meta12788));
});
}
return (new cljs.core.async.t12787(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12790_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12790_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12791 = (i + 1);
i = G__12791;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12792){var map__12794 = p__12792;var map__12794__$1 = ((cljs.core.seq_QMARK_.call(null,map__12794))?cljs.core.apply.call(null,cljs.core.hash_map,map__12794):map__12794);var opts = map__12794__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12792 = null;if (arguments.length > 1) {
  p__12792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12792);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12795){
var ports = cljs.core.first(arglist__12795);
var p__12792 = cljs.core.rest(arglist__12795);
return alts_BANG___delegate(ports,p__12792);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12803 = (function (ch,f,map_LT_,meta12804){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12804 = meta12804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12803.cljs$lang$type = true;
cljs.core.async.t12803.cljs$lang$ctorStr = "cljs.core.async/t12803";
cljs.core.async.t12803.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12803");
});
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12806 = (function (fn1,_,meta12804,ch,f,map_LT_,meta12807){
this.fn1 = fn1;
this._ = _;
this.meta12804 = meta12804;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12807 = meta12807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12806.cljs$lang$type = true;
cljs.core.async.t12806.cljs$lang$ctorStr = "cljs.core.async/t12806";
cljs.core.async.t12806.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12806");
});
cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12796_SHARP_){return f1.call(null,(((p1__12796_SHARP_ == null))?null:self__.f.call(null,p1__12796_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12808){var self__ = this;
var _12808__$1 = this;return self__.meta12807;
});
cljs.core.async.t12806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12808,meta12807__$1){var self__ = this;
var _12808__$1 = this;return (new cljs.core.async.t12806(self__.fn1,self__._,self__.meta12804,self__.ch,self__.f,self__.map_LT_,meta12807__$1));
});
cljs.core.async.__GT_t12806 = (function __GT_t12806(fn1__$1,___$2,meta12804__$1,ch__$2,f__$2,map_LT___$2,meta12807){return (new cljs.core.async.t12806(fn1__$1,___$2,meta12804__$1,ch__$2,f__$2,map_LT___$2,meta12807));
});
}
return (new cljs.core.async.t12806(fn1,___$1,self__.meta12804,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12805){var self__ = this;
var _12805__$1 = this;return self__.meta12804;
});
cljs.core.async.t12803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12805,meta12804__$1){var self__ = this;
var _12805__$1 = this;return (new cljs.core.async.t12803(self__.ch,self__.f,self__.map_LT_,meta12804__$1));
});
cljs.core.async.__GT_t12803 = (function __GT_t12803(ch__$1,f__$1,map_LT___$1,meta12804){return (new cljs.core.async.t12803(ch__$1,f__$1,map_LT___$1,meta12804));
});
}
return (new cljs.core.async.t12803(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12812 = (function (ch,f,map_GT_,meta12813){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12813 = meta12813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12812.cljs$lang$type = true;
cljs.core.async.t12812.cljs$lang$ctorStr = "cljs.core.async/t12812";
cljs.core.async.t12812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12812");
});
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12814){var self__ = this;
var _12814__$1 = this;return self__.meta12813;
});
cljs.core.async.t12812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12814,meta12813__$1){var self__ = this;
var _12814__$1 = this;return (new cljs.core.async.t12812(self__.ch,self__.f,self__.map_GT_,meta12813__$1));
});
cljs.core.async.__GT_t12812 = (function __GT_t12812(ch__$1,f__$1,map_GT___$1,meta12813){return (new cljs.core.async.t12812(ch__$1,f__$1,map_GT___$1,meta12813));
});
}
return (new cljs.core.async.t12812(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12818 = (function (ch,p,filter_GT_,meta12819){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12819 = meta12819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12818.cljs$lang$type = true;
cljs.core.async.t12818.cljs$lang$ctorStr = "cljs.core.async/t12818";
cljs.core.async.t12818.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12818");
});
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12820){var self__ = this;
var _12820__$1 = this;return self__.meta12819;
});
cljs.core.async.t12818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12820,meta12819__$1){var self__ = this;
var _12820__$1 = this;return (new cljs.core.async.t12818(self__.ch,self__.p,self__.filter_GT_,meta12819__$1));
});
cljs.core.async.__GT_t12818 = (function __GT_t12818(ch__$1,p__$1,filter_GT___$1,meta12819){return (new cljs.core.async.t12818(ch__$1,p__$1,filter_GT___$1,meta12819));
});
}
return (new cljs.core.async.t12818(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12882){var state_val_12883 = (state_12882[1]);if((state_val_12883 === 1))
{var state_12882__$1 = state_12882;var statearr_12884_12904 = state_12882__$1;(statearr_12884_12904[2] = null);
(statearr_12884_12904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 2))
{var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12882__$1,4,ch);
} else
{if((state_val_12883 === 3))
{var inst_12880 = (state_12882[2]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12882__$1,inst_12880);
} else
{if((state_val_12883 === 4))
{var inst_12864 = (state_12882[7]);var inst_12864__$1 = (state_12882[2]);var inst_12865 = (inst_12864__$1 == null);var state_12882__$1 = (function (){var statearr_12885 = state_12882;(statearr_12885[7] = inst_12864__$1);
return statearr_12885;
})();if(cljs.core.truth_(inst_12865))
{var statearr_12886_12905 = state_12882__$1;(statearr_12886_12905[1] = 5);
} else
{var statearr_12887_12906 = state_12882__$1;(statearr_12887_12906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 5))
{var inst_12867 = cljs.core.async.close_BANG_.call(null,out);var state_12882__$1 = state_12882;var statearr_12888_12907 = state_12882__$1;(statearr_12888_12907[2] = inst_12867);
(statearr_12888_12907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 6))
{var inst_12864 = (state_12882[7]);var inst_12869 = p.call(null,inst_12864);var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12869))
{var statearr_12889_12908 = state_12882__$1;(statearr_12889_12908[1] = 8);
} else
{var statearr_12890_12909 = state_12882__$1;(statearr_12890_12909[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 7))
{var inst_12878 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12891_12910 = state_12882__$1;(statearr_12891_12910[2] = inst_12878);
(statearr_12891_12910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 8))
{var inst_12864 = (state_12882[7]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12882__$1,11,out,inst_12864);
} else
{if((state_val_12883 === 9))
{var state_12882__$1 = state_12882;var statearr_12892_12911 = state_12882__$1;(statearr_12892_12911[2] = null);
(statearr_12892_12911[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 10))
{var inst_12875 = (state_12882[2]);var state_12882__$1 = (function (){var statearr_12893 = state_12882;(statearr_12893[8] = inst_12875);
return statearr_12893;
})();var statearr_12894_12912 = state_12882__$1;(statearr_12894_12912[2] = null);
(statearr_12894_12912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 11))
{var inst_12872 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12895_12913 = state_12882__$1;(statearr_12895_12913[2] = inst_12872);
(statearr_12895_12913[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_12899 = [null,null,null,null,null,null,null,null,null];(statearr_12899[0] = state_machine__5507__auto__);
(statearr_12899[1] = 1);
return statearr_12899;
});
var state_machine__5507__auto____1 = (function (state_12882){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12882);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12900){if((e12900 instanceof Object))
{var ex__5510__auto__ = e12900;var statearr_12901_12914 = state_12882;(statearr_12901_12914[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12915 = state_12882;
state_12882 = G__12915;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12902 = f__5522__auto__.call(null);(statearr_12902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12903);
return statearr_12902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13067){var state_val_13068 = (state_13067[1]);if((state_val_13068 === 1))
{var state_13067__$1 = state_13067;var statearr_13069_13106 = state_13067__$1;(statearr_13069_13106[2] = null);
(statearr_13069_13106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 2))
{var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13067__$1,4,in$);
} else
{if((state_val_13068 === 3))
{var inst_13065 = (state_13067[2]);var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13067__$1,inst_13065);
} else
{if((state_val_13068 === 4))
{var inst_13013 = (state_13067[7]);var inst_13013__$1 = (state_13067[2]);var inst_13014 = (inst_13013__$1 == null);var state_13067__$1 = (function (){var statearr_13070 = state_13067;(statearr_13070[7] = inst_13013__$1);
return statearr_13070;
})();if(cljs.core.truth_(inst_13014))
{var statearr_13071_13107 = state_13067__$1;(statearr_13071_13107[1] = 5);
} else
{var statearr_13072_13108 = state_13067__$1;(statearr_13072_13108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 5))
{var inst_13016 = cljs.core.async.close_BANG_.call(null,out);var state_13067__$1 = state_13067;var statearr_13073_13109 = state_13067__$1;(statearr_13073_13109[2] = inst_13016);
(statearr_13073_13109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 6))
{var inst_13013 = (state_13067[7]);var inst_13018 = f.call(null,inst_13013);var inst_13023 = cljs.core.seq.call(null,inst_13018);var inst_13024 = inst_13023;var inst_13025 = null;var inst_13026 = 0;var inst_13027 = 0;var state_13067__$1 = (function (){var statearr_13074 = state_13067;(statearr_13074[8] = inst_13027);
(statearr_13074[9] = inst_13026);
(statearr_13074[10] = inst_13025);
(statearr_13074[11] = inst_13024);
return statearr_13074;
})();var statearr_13075_13110 = state_13067__$1;(statearr_13075_13110[2] = null);
(statearr_13075_13110[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 7))
{var inst_13063 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13076_13111 = state_13067__$1;(statearr_13076_13111[2] = inst_13063);
(statearr_13076_13111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 8))
{var inst_13027 = (state_13067[8]);var inst_13026 = (state_13067[9]);var inst_13029 = (inst_13027 < inst_13026);var inst_13030 = inst_13029;var state_13067__$1 = state_13067;if(cljs.core.truth_(inst_13030))
{var statearr_13077_13112 = state_13067__$1;(statearr_13077_13112[1] = 10);
} else
{var statearr_13078_13113 = state_13067__$1;(statearr_13078_13113[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 9))
{var inst_13060 = (state_13067[2]);var state_13067__$1 = (function (){var statearr_13079 = state_13067;(statearr_13079[12] = inst_13060);
return statearr_13079;
})();var statearr_13080_13114 = state_13067__$1;(statearr_13080_13114[2] = null);
(statearr_13080_13114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 10))
{var inst_13027 = (state_13067[8]);var inst_13025 = (state_13067[10]);var inst_13032 = cljs.core._nth.call(null,inst_13025,inst_13027);var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,13,out,inst_13032);
} else
{if((state_val_13068 === 11))
{var inst_13038 = (state_13067[13]);var inst_13024 = (state_13067[11]);var inst_13038__$1 = cljs.core.seq.call(null,inst_13024);var state_13067__$1 = (function (){var statearr_13084 = state_13067;(statearr_13084[13] = inst_13038__$1);
return statearr_13084;
})();if(inst_13038__$1)
{var statearr_13085_13115 = state_13067__$1;(statearr_13085_13115[1] = 14);
} else
{var statearr_13086_13116 = state_13067__$1;(statearr_13086_13116[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 12))
{var inst_13058 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13087_13117 = state_13067__$1;(statearr_13087_13117[2] = inst_13058);
(statearr_13087_13117[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 13))
{var inst_13027 = (state_13067[8]);var inst_13026 = (state_13067[9]);var inst_13025 = (state_13067[10]);var inst_13024 = (state_13067[11]);var inst_13034 = (state_13067[2]);var inst_13035 = (inst_13027 + 1);var tmp13081 = inst_13026;var tmp13082 = inst_13025;var tmp13083 = inst_13024;var inst_13024__$1 = tmp13083;var inst_13025__$1 = tmp13082;var inst_13026__$1 = tmp13081;var inst_13027__$1 = inst_13035;var state_13067__$1 = (function (){var statearr_13088 = state_13067;(statearr_13088[14] = inst_13034);
(statearr_13088[8] = inst_13027__$1);
(statearr_13088[9] = inst_13026__$1);
(statearr_13088[10] = inst_13025__$1);
(statearr_13088[11] = inst_13024__$1);
return statearr_13088;
})();var statearr_13089_13118 = state_13067__$1;(statearr_13089_13118[2] = null);
(statearr_13089_13118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 14))
{var inst_13038 = (state_13067[13]);var inst_13040 = cljs.core.chunked_seq_QMARK_.call(null,inst_13038);var state_13067__$1 = state_13067;if(inst_13040)
{var statearr_13090_13119 = state_13067__$1;(statearr_13090_13119[1] = 17);
} else
{var statearr_13091_13120 = state_13067__$1;(statearr_13091_13120[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 15))
{var state_13067__$1 = state_13067;var statearr_13092_13121 = state_13067__$1;(statearr_13092_13121[2] = null);
(statearr_13092_13121[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 16))
{var inst_13056 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13093_13122 = state_13067__$1;(statearr_13093_13122[2] = inst_13056);
(statearr_13093_13122[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 17))
{var inst_13038 = (state_13067[13]);var inst_13042 = cljs.core.chunk_first.call(null,inst_13038);var inst_13043 = cljs.core.chunk_rest.call(null,inst_13038);var inst_13044 = cljs.core.count.call(null,inst_13042);var inst_13024 = inst_13043;var inst_13025 = inst_13042;var inst_13026 = inst_13044;var inst_13027 = 0;var state_13067__$1 = (function (){var statearr_13094 = state_13067;(statearr_13094[8] = inst_13027);
(statearr_13094[9] = inst_13026);
(statearr_13094[10] = inst_13025);
(statearr_13094[11] = inst_13024);
return statearr_13094;
})();var statearr_13095_13123 = state_13067__$1;(statearr_13095_13123[2] = null);
(statearr_13095_13123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 18))
{var inst_13038 = (state_13067[13]);var inst_13047 = cljs.core.first.call(null,inst_13038);var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,20,out,inst_13047);
} else
{if((state_val_13068 === 19))
{var inst_13053 = (state_13067[2]);var state_13067__$1 = state_13067;var statearr_13096_13124 = state_13067__$1;(statearr_13096_13124[2] = inst_13053);
(statearr_13096_13124[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13068 === 20))
{var inst_13038 = (state_13067[13]);var inst_13049 = (state_13067[2]);var inst_13050 = cljs.core.next.call(null,inst_13038);var inst_13024 = inst_13050;var inst_13025 = null;var inst_13026 = 0;var inst_13027 = 0;var state_13067__$1 = (function (){var statearr_13097 = state_13067;(statearr_13097[15] = inst_13049);
(statearr_13097[8] = inst_13027);
(statearr_13097[9] = inst_13026);
(statearr_13097[10] = inst_13025);
(statearr_13097[11] = inst_13024);
return statearr_13097;
})();var statearr_13098_13125 = state_13067__$1;(statearr_13098_13125[2] = null);
(statearr_13098_13125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13102[0] = state_machine__5507__auto__);
(statearr_13102[1] = 1);
return statearr_13102;
});
var state_machine__5507__auto____1 = (function (state_13067){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13103){if((e13103 instanceof Object))
{var ex__5510__auto__ = e13103;var statearr_13104_13126 = state_13067;(statearr_13104_13126[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13127 = state_13067;
state_13067 = G__13127;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13067){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13105 = f__5522__auto__.call(null);(statearr_13105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13187){var state_val_13188 = (state_13187[1]);if((state_val_13188 === 1))
{var state_13187__$1 = state_13187;var statearr_13189_13209 = state_13187__$1;(statearr_13189_13209[2] = null);
(statearr_13189_13209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 2))
{var state_13187__$1 = state_13187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13187__$1,4,from);
} else
{if((state_val_13188 === 3))
{var inst_13185 = (state_13187[2]);var state_13187__$1 = state_13187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13187__$1,inst_13185);
} else
{if((state_val_13188 === 4))
{var inst_13170 = (state_13187[7]);var inst_13170__$1 = (state_13187[2]);var inst_13171 = (inst_13170__$1 == null);var state_13187__$1 = (function (){var statearr_13190 = state_13187;(statearr_13190[7] = inst_13170__$1);
return statearr_13190;
})();if(cljs.core.truth_(inst_13171))
{var statearr_13191_13210 = state_13187__$1;(statearr_13191_13210[1] = 5);
} else
{var statearr_13192_13211 = state_13187__$1;(statearr_13192_13211[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 5))
{var state_13187__$1 = state_13187;if(cljs.core.truth_(close_QMARK_))
{var statearr_13193_13212 = state_13187__$1;(statearr_13193_13212[1] = 8);
} else
{var statearr_13194_13213 = state_13187__$1;(statearr_13194_13213[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 6))
{var inst_13170 = (state_13187[7]);var state_13187__$1 = state_13187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13187__$1,11,to,inst_13170);
} else
{if((state_val_13188 === 7))
{var inst_13183 = (state_13187[2]);var state_13187__$1 = state_13187;var statearr_13195_13214 = state_13187__$1;(statearr_13195_13214[2] = inst_13183);
(statearr_13195_13214[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 8))
{var inst_13174 = cljs.core.async.close_BANG_.call(null,to);var state_13187__$1 = state_13187;var statearr_13196_13215 = state_13187__$1;(statearr_13196_13215[2] = inst_13174);
(statearr_13196_13215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 9))
{var state_13187__$1 = state_13187;var statearr_13197_13216 = state_13187__$1;(statearr_13197_13216[2] = null);
(statearr_13197_13216[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 10))
{var inst_13177 = (state_13187[2]);var state_13187__$1 = state_13187;var statearr_13198_13217 = state_13187__$1;(statearr_13198_13217[2] = inst_13177);
(statearr_13198_13217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 11))
{var inst_13180 = (state_13187[2]);var state_13187__$1 = (function (){var statearr_13199 = state_13187;(statearr_13199[8] = inst_13180);
return statearr_13199;
})();var statearr_13200_13218 = state_13187__$1;(statearr_13200_13218[2] = null);
(statearr_13200_13218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13204 = [null,null,null,null,null,null,null,null,null];(statearr_13204[0] = state_machine__5507__auto__);
(statearr_13204[1] = 1);
return statearr_13204;
});
var state_machine__5507__auto____1 = (function (state_13187){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13187);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13205){if((e13205 instanceof Object))
{var ex__5510__auto__ = e13205;var statearr_13206_13219 = state_13187;(statearr_13206_13219[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13220 = state_13187;
state_13187 = G__13220;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13187){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13207 = f__5522__auto__.call(null);(statearr_13207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13208);
return statearr_13207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13307 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13285){var state_val_13286 = (state_13285[1]);if((state_val_13286 === 1))
{var state_13285__$1 = state_13285;var statearr_13287_13308 = state_13285__$1;(statearr_13287_13308[2] = null);
(statearr_13287_13308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 2))
{var state_13285__$1 = state_13285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13285__$1,4,ch);
} else
{if((state_val_13286 === 3))
{var inst_13283 = (state_13285[2]);var state_13285__$1 = state_13285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13285__$1,inst_13283);
} else
{if((state_val_13286 === 4))
{var inst_13266 = (state_13285[7]);var inst_13266__$1 = (state_13285[2]);var inst_13267 = (inst_13266__$1 == null);var state_13285__$1 = (function (){var statearr_13288 = state_13285;(statearr_13288[7] = inst_13266__$1);
return statearr_13288;
})();if(cljs.core.truth_(inst_13267))
{var statearr_13289_13309 = state_13285__$1;(statearr_13289_13309[1] = 5);
} else
{var statearr_13290_13310 = state_13285__$1;(statearr_13290_13310[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 5))
{var inst_13269 = cljs.core.async.close_BANG_.call(null,tc);var inst_13270 = cljs.core.async.close_BANG_.call(null,fc);var state_13285__$1 = (function (){var statearr_13291 = state_13285;(statearr_13291[8] = inst_13269);
return statearr_13291;
})();var statearr_13292_13311 = state_13285__$1;(statearr_13292_13311[2] = inst_13270);
(statearr_13292_13311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 6))
{var inst_13266 = (state_13285[7]);var inst_13272 = p.call(null,inst_13266);var state_13285__$1 = state_13285;if(cljs.core.truth_(inst_13272))
{var statearr_13293_13312 = state_13285__$1;(statearr_13293_13312[1] = 9);
} else
{var statearr_13294_13313 = state_13285__$1;(statearr_13294_13313[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 7))
{var inst_13281 = (state_13285[2]);var state_13285__$1 = state_13285;var statearr_13295_13314 = state_13285__$1;(statearr_13295_13314[2] = inst_13281);
(statearr_13295_13314[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 8))
{var inst_13278 = (state_13285[2]);var state_13285__$1 = (function (){var statearr_13296 = state_13285;(statearr_13296[9] = inst_13278);
return statearr_13296;
})();var statearr_13297_13315 = state_13285__$1;(statearr_13297_13315[2] = null);
(statearr_13297_13315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 9))
{var state_13285__$1 = state_13285;var statearr_13298_13316 = state_13285__$1;(statearr_13298_13316[2] = tc);
(statearr_13298_13316[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 10))
{var state_13285__$1 = state_13285;var statearr_13299_13317 = state_13285__$1;(statearr_13299_13317[2] = fc);
(statearr_13299_13317[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13286 === 11))
{var inst_13266 = (state_13285[7]);var inst_13276 = (state_13285[2]);var state_13285__$1 = state_13285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13285__$1,8,inst_13276,inst_13266);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13303 = [null,null,null,null,null,null,null,null,null,null];(statearr_13303[0] = state_machine__5507__auto__);
(statearr_13303[1] = 1);
return statearr_13303;
});
var state_machine__5507__auto____1 = (function (state_13285){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13285);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13304){if((e13304 instanceof Object))
{var ex__5510__auto__ = e13304;var statearr_13305_13318 = state_13285;(statearr_13305_13318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13319 = state_13285;
state_13285 = G__13319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13285){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13306 = f__5522__auto__.call(null);(statearr_13306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13307);
return statearr_13306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13366){var state_val_13367 = (state_13366[1]);if((state_val_13367 === 7))
{var inst_13362 = (state_13366[2]);var state_13366__$1 = state_13366;var statearr_13368_13384 = state_13366__$1;(statearr_13368_13384[2] = inst_13362);
(statearr_13368_13384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13367 === 6))
{var inst_13352 = (state_13366[7]);var inst_13355 = (state_13366[8]);var inst_13359 = f.call(null,inst_13352,inst_13355);var inst_13352__$1 = inst_13359;var state_13366__$1 = (function (){var statearr_13369 = state_13366;(statearr_13369[7] = inst_13352__$1);
return statearr_13369;
})();var statearr_13370_13385 = state_13366__$1;(statearr_13370_13385[2] = null);
(statearr_13370_13385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13367 === 5))
{var inst_13352 = (state_13366[7]);var state_13366__$1 = state_13366;var statearr_13371_13386 = state_13366__$1;(statearr_13371_13386[2] = inst_13352);
(statearr_13371_13386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13367 === 4))
{var inst_13355 = (state_13366[8]);var inst_13355__$1 = (state_13366[2]);var inst_13356 = (inst_13355__$1 == null);var state_13366__$1 = (function (){var statearr_13372 = state_13366;(statearr_13372[8] = inst_13355__$1);
return statearr_13372;
})();if(cljs.core.truth_(inst_13356))
{var statearr_13373_13387 = state_13366__$1;(statearr_13373_13387[1] = 5);
} else
{var statearr_13374_13388 = state_13366__$1;(statearr_13374_13388[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13367 === 3))
{var inst_13364 = (state_13366[2]);var state_13366__$1 = state_13366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13366__$1,inst_13364);
} else
{if((state_val_13367 === 2))
{var state_13366__$1 = state_13366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13366__$1,4,ch);
} else
{if((state_val_13367 === 1))
{var inst_13352 = init;var state_13366__$1 = (function (){var statearr_13375 = state_13366;(statearr_13375[7] = inst_13352);
return statearr_13375;
})();var statearr_13376_13389 = state_13366__$1;(statearr_13376_13389[2] = null);
(statearr_13376_13389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13380 = [null,null,null,null,null,null,null,null,null];(statearr_13380[0] = state_machine__5507__auto__);
(statearr_13380[1] = 1);
return statearr_13380;
});
var state_machine__5507__auto____1 = (function (state_13366){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13381){if((e13381 instanceof Object))
{var ex__5510__auto__ = e13381;var statearr_13382_13390 = state_13366;(statearr_13382_13390[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13391 = state_13366;
state_13366 = G__13391;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13366){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13383 = f__5522__auto__.call(null);(statearr_13383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13453){var state_val_13454 = (state_13453[1]);if((state_val_13454 === 1))
{var inst_13433 = cljs.core.seq.call(null,coll);var inst_13434 = inst_13433;var state_13453__$1 = (function (){var statearr_13455 = state_13453;(statearr_13455[7] = inst_13434);
return statearr_13455;
})();var statearr_13456_13474 = state_13453__$1;(statearr_13456_13474[2] = null);
(statearr_13456_13474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 2))
{var inst_13434 = (state_13453[7]);var state_13453__$1 = state_13453;if(cljs.core.truth_(inst_13434))
{var statearr_13457_13475 = state_13453__$1;(statearr_13457_13475[1] = 4);
} else
{var statearr_13458_13476 = state_13453__$1;(statearr_13458_13476[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 3))
{var inst_13451 = (state_13453[2]);var state_13453__$1 = state_13453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13453__$1,inst_13451);
} else
{if((state_val_13454 === 4))
{var inst_13434 = (state_13453[7]);var inst_13437 = cljs.core.first.call(null,inst_13434);var state_13453__$1 = state_13453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13453__$1,7,ch,inst_13437);
} else
{if((state_val_13454 === 5))
{var state_13453__$1 = state_13453;if(cljs.core.truth_(close_QMARK_))
{var statearr_13459_13477 = state_13453__$1;(statearr_13459_13477[1] = 8);
} else
{var statearr_13460_13478 = state_13453__$1;(statearr_13460_13478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 6))
{var inst_13449 = (state_13453[2]);var state_13453__$1 = state_13453;var statearr_13461_13479 = state_13453__$1;(statearr_13461_13479[2] = inst_13449);
(statearr_13461_13479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 7))
{var inst_13434 = (state_13453[7]);var inst_13439 = (state_13453[2]);var inst_13440 = cljs.core.next.call(null,inst_13434);var inst_13434__$1 = inst_13440;var state_13453__$1 = (function (){var statearr_13462 = state_13453;(statearr_13462[8] = inst_13439);
(statearr_13462[7] = inst_13434__$1);
return statearr_13462;
})();var statearr_13463_13480 = state_13453__$1;(statearr_13463_13480[2] = null);
(statearr_13463_13480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 8))
{var inst_13444 = cljs.core.async.close_BANG_.call(null,ch);var state_13453__$1 = state_13453;var statearr_13464_13481 = state_13453__$1;(statearr_13464_13481[2] = inst_13444);
(statearr_13464_13481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 9))
{var state_13453__$1 = state_13453;var statearr_13465_13482 = state_13453__$1;(statearr_13465_13482[2] = null);
(statearr_13465_13482[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13454 === 10))
{var inst_13447 = (state_13453[2]);var state_13453__$1 = state_13453;var statearr_13466_13483 = state_13453__$1;(statearr_13466_13483[2] = inst_13447);
(statearr_13466_13483[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13470 = [null,null,null,null,null,null,null,null,null];(statearr_13470[0] = state_machine__5507__auto__);
(statearr_13470[1] = 1);
return statearr_13470;
});
var state_machine__5507__auto____1 = (function (state_13453){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13453);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13471){if((e13471 instanceof Object))
{var ex__5510__auto__ = e13471;var statearr_13472_13484 = state_13453;(statearr_13472_13484[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13485 = state_13453;
state_13453 = G__13485;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13453){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13473 = f__5522__auto__.call(null);(statearr_13473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13487 = {};return obj13487;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13489 = {};return obj13489;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13713 = (function (cs,ch,mult,meta13714){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13714 = meta13714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13713.cljs$lang$type = true;
cljs.core.async.t13713.cljs$lang$ctorStr = "cljs.core.async/t13713";
cljs.core.async.t13713.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13713");
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13715){var self__ = this;
var _13715__$1 = this;return self__.meta13714;
});})(cs))
;
cljs.core.async.t13713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13715,meta13714__$1){var self__ = this;
var _13715__$1 = this;return (new cljs.core.async.t13713(self__.cs,self__.ch,self__.mult,meta13714__$1));
});})(cs))
;
cljs.core.async.__GT_t13713 = ((function (cs){
return (function __GT_t13713(cs__$1,ch__$1,mult__$1,meta13714){return (new cljs.core.async.t13713(cs__$1,ch__$1,mult__$1,meta13714));
});})(cs))
;
}
return (new cljs.core.async.t13713(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13936 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13850){var state_val_13851 = (state_13850[1]);if((state_val_13851 === 32))
{var inst_13794 = (state_13850[7]);var inst_13718 = (state_13850[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13850,31,Object,null,30);var inst_13801 = cljs.core.async.put_BANG_.call(null,inst_13794,inst_13718,done);var state_13850__$1 = state_13850;var statearr_13852_13937 = state_13850__$1;(statearr_13852_13937[2] = inst_13801);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 1))
{var state_13850__$1 = state_13850;var statearr_13853_13938 = state_13850__$1;(statearr_13853_13938[2] = null);
(statearr_13853_13938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 33))
{var inst_13807 = (state_13850[9]);var inst_13809 = cljs.core.chunked_seq_QMARK_.call(null,inst_13807);var state_13850__$1 = state_13850;if(inst_13809)
{var statearr_13854_13939 = state_13850__$1;(statearr_13854_13939[1] = 36);
} else
{var statearr_13855_13940 = state_13850__$1;(statearr_13855_13940[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 2))
{var state_13850__$1 = state_13850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,4,ch);
} else
{if((state_val_13851 === 34))
{var state_13850__$1 = state_13850;var statearr_13856_13941 = state_13850__$1;(statearr_13856_13941[2] = null);
(statearr_13856_13941[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 3))
{var inst_13848 = (state_13850[2]);var state_13850__$1 = state_13850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13850__$1,inst_13848);
} else
{if((state_val_13851 === 35))
{var inst_13832 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13857_13942 = state_13850__$1;(statearr_13857_13942[2] = inst_13832);
(statearr_13857_13942[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 4))
{var inst_13718 = (state_13850[8]);var inst_13718__$1 = (state_13850[2]);var inst_13719 = (inst_13718__$1 == null);var state_13850__$1 = (function (){var statearr_13858 = state_13850;(statearr_13858[8] = inst_13718__$1);
return statearr_13858;
})();if(cljs.core.truth_(inst_13719))
{var statearr_13859_13943 = state_13850__$1;(statearr_13859_13943[1] = 5);
} else
{var statearr_13860_13944 = state_13850__$1;(statearr_13860_13944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 36))
{var inst_13807 = (state_13850[9]);var inst_13811 = cljs.core.chunk_first.call(null,inst_13807);var inst_13812 = cljs.core.chunk_rest.call(null,inst_13807);var inst_13813 = cljs.core.count.call(null,inst_13811);var inst_13786 = inst_13812;var inst_13787 = inst_13811;var inst_13788 = inst_13813;var inst_13789 = 0;var state_13850__$1 = (function (){var statearr_13861 = state_13850;(statearr_13861[10] = inst_13788);
(statearr_13861[11] = inst_13789);
(statearr_13861[12] = inst_13787);
(statearr_13861[13] = inst_13786);
return statearr_13861;
})();var statearr_13862_13945 = state_13850__$1;(statearr_13862_13945[2] = null);
(statearr_13862_13945[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 5))
{var inst_13725 = cljs.core.deref.call(null,cs);var inst_13726 = cljs.core.seq.call(null,inst_13725);var inst_13727 = inst_13726;var inst_13728 = null;var inst_13729 = 0;var inst_13730 = 0;var state_13850__$1 = (function (){var statearr_13863 = state_13850;(statearr_13863[14] = inst_13727);
(statearr_13863[15] = inst_13729);
(statearr_13863[16] = inst_13728);
(statearr_13863[17] = inst_13730);
return statearr_13863;
})();var statearr_13864_13946 = state_13850__$1;(statearr_13864_13946[2] = null);
(statearr_13864_13946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 37))
{var inst_13807 = (state_13850[9]);var inst_13816 = cljs.core.first.call(null,inst_13807);var state_13850__$1 = (function (){var statearr_13865 = state_13850;(statearr_13865[18] = inst_13816);
return statearr_13865;
})();var statearr_13866_13947 = state_13850__$1;(statearr_13866_13947[2] = null);
(statearr_13866_13947[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 6))
{var inst_13778 = (state_13850[19]);var inst_13777 = cljs.core.deref.call(null,cs);var inst_13778__$1 = cljs.core.keys.call(null,inst_13777);var inst_13779 = cljs.core.count.call(null,inst_13778__$1);var inst_13780 = cljs.core.reset_BANG_.call(null,dctr,inst_13779);var inst_13785 = cljs.core.seq.call(null,inst_13778__$1);var inst_13786 = inst_13785;var inst_13787 = null;var inst_13788 = 0;var inst_13789 = 0;var state_13850__$1 = (function (){var statearr_13867 = state_13850;(statearr_13867[10] = inst_13788);
(statearr_13867[11] = inst_13789);
(statearr_13867[12] = inst_13787);
(statearr_13867[13] = inst_13786);
(statearr_13867[19] = inst_13778__$1);
(statearr_13867[20] = inst_13780);
return statearr_13867;
})();var statearr_13868_13948 = state_13850__$1;(statearr_13868_13948[2] = null);
(statearr_13868_13948[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 38))
{var inst_13829 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13869_13949 = state_13850__$1;(statearr_13869_13949[2] = inst_13829);
(statearr_13869_13949[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 7))
{var inst_13846 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13870_13950 = state_13850__$1;(statearr_13870_13950[2] = inst_13846);
(statearr_13870_13950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 39))
{var inst_13807 = (state_13850[9]);var inst_13825 = (state_13850[2]);var inst_13826 = cljs.core.next.call(null,inst_13807);var inst_13786 = inst_13826;var inst_13787 = null;var inst_13788 = 0;var inst_13789 = 0;var state_13850__$1 = (function (){var statearr_13871 = state_13850;(statearr_13871[10] = inst_13788);
(statearr_13871[11] = inst_13789);
(statearr_13871[21] = inst_13825);
(statearr_13871[12] = inst_13787);
(statearr_13871[13] = inst_13786);
return statearr_13871;
})();var statearr_13872_13951 = state_13850__$1;(statearr_13872_13951[2] = null);
(statearr_13872_13951[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 8))
{var inst_13729 = (state_13850[15]);var inst_13730 = (state_13850[17]);var inst_13732 = (inst_13730 < inst_13729);var inst_13733 = inst_13732;var state_13850__$1 = state_13850;if(cljs.core.truth_(inst_13733))
{var statearr_13873_13952 = state_13850__$1;(statearr_13873_13952[1] = 10);
} else
{var statearr_13874_13953 = state_13850__$1;(statearr_13874_13953[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 40))
{var inst_13816 = (state_13850[18]);var inst_13817 = (state_13850[2]);var inst_13818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13819 = cljs.core.async.untap_STAR_.call(null,m,inst_13816);var state_13850__$1 = (function (){var statearr_13875 = state_13850;(statearr_13875[22] = inst_13817);
(statearr_13875[23] = inst_13818);
return statearr_13875;
})();var statearr_13876_13954 = state_13850__$1;(statearr_13876_13954[2] = inst_13819);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 9))
{var inst_13775 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13877_13955 = state_13850__$1;(statearr_13877_13955[2] = inst_13775);
(statearr_13877_13955[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 41))
{var inst_13816 = (state_13850[18]);var inst_13718 = (state_13850[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13850,40,Object,null,39);var inst_13823 = cljs.core.async.put_BANG_.call(null,inst_13816,inst_13718,done);var state_13850__$1 = state_13850;var statearr_13878_13956 = state_13850__$1;(statearr_13878_13956[2] = inst_13823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 10))
{var inst_13728 = (state_13850[16]);var inst_13730 = (state_13850[17]);var inst_13736 = cljs.core._nth.call(null,inst_13728,inst_13730);var inst_13737 = cljs.core.nth.call(null,inst_13736,0,null);var inst_13738 = cljs.core.nth.call(null,inst_13736,1,null);var state_13850__$1 = (function (){var statearr_13879 = state_13850;(statearr_13879[24] = inst_13737);
return statearr_13879;
})();if(cljs.core.truth_(inst_13738))
{var statearr_13880_13957 = state_13850__$1;(statearr_13880_13957[1] = 13);
} else
{var statearr_13881_13958 = state_13850__$1;(statearr_13881_13958[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 42))
{var state_13850__$1 = state_13850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,45,dchan);
} else
{if((state_val_13851 === 11))
{var inst_13727 = (state_13850[14]);var inst_13747 = (state_13850[25]);var inst_13747__$1 = cljs.core.seq.call(null,inst_13727);var state_13850__$1 = (function (){var statearr_13882 = state_13850;(statearr_13882[25] = inst_13747__$1);
return statearr_13882;
})();if(inst_13747__$1)
{var statearr_13883_13959 = state_13850__$1;(statearr_13883_13959[1] = 16);
} else
{var statearr_13884_13960 = state_13850__$1;(statearr_13884_13960[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 43))
{var state_13850__$1 = state_13850;var statearr_13885_13961 = state_13850__$1;(statearr_13885_13961[2] = null);
(statearr_13885_13961[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 12))
{var inst_13773 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13886_13962 = state_13850__$1;(statearr_13886_13962[2] = inst_13773);
(statearr_13886_13962[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 44))
{var inst_13843 = (state_13850[2]);var state_13850__$1 = (function (){var statearr_13887 = state_13850;(statearr_13887[26] = inst_13843);
return statearr_13887;
})();var statearr_13888_13963 = state_13850__$1;(statearr_13888_13963[2] = null);
(statearr_13888_13963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 13))
{var inst_13737 = (state_13850[24]);var inst_13740 = cljs.core.async.close_BANG_.call(null,inst_13737);var state_13850__$1 = state_13850;var statearr_13889_13964 = state_13850__$1;(statearr_13889_13964[2] = inst_13740);
(statearr_13889_13964[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 45))
{var inst_13840 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13893_13965 = state_13850__$1;(statearr_13893_13965[2] = inst_13840);
(statearr_13893_13965[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 14))
{var state_13850__$1 = state_13850;var statearr_13894_13966 = state_13850__$1;(statearr_13894_13966[2] = null);
(statearr_13894_13966[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 15))
{var inst_13727 = (state_13850[14]);var inst_13729 = (state_13850[15]);var inst_13728 = (state_13850[16]);var inst_13730 = (state_13850[17]);var inst_13743 = (state_13850[2]);var inst_13744 = (inst_13730 + 1);var tmp13890 = inst_13727;var tmp13891 = inst_13729;var tmp13892 = inst_13728;var inst_13727__$1 = tmp13890;var inst_13728__$1 = tmp13892;var inst_13729__$1 = tmp13891;var inst_13730__$1 = inst_13744;var state_13850__$1 = (function (){var statearr_13895 = state_13850;(statearr_13895[14] = inst_13727__$1);
(statearr_13895[15] = inst_13729__$1);
(statearr_13895[16] = inst_13728__$1);
(statearr_13895[27] = inst_13743);
(statearr_13895[17] = inst_13730__$1);
return statearr_13895;
})();var statearr_13896_13967 = state_13850__$1;(statearr_13896_13967[2] = null);
(statearr_13896_13967[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 16))
{var inst_13747 = (state_13850[25]);var inst_13749 = cljs.core.chunked_seq_QMARK_.call(null,inst_13747);var state_13850__$1 = state_13850;if(inst_13749)
{var statearr_13897_13968 = state_13850__$1;(statearr_13897_13968[1] = 19);
} else
{var statearr_13898_13969 = state_13850__$1;(statearr_13898_13969[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 17))
{var state_13850__$1 = state_13850;var statearr_13899_13970 = state_13850__$1;(statearr_13899_13970[2] = null);
(statearr_13899_13970[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 18))
{var inst_13771 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13900_13971 = state_13850__$1;(statearr_13900_13971[2] = inst_13771);
(statearr_13900_13971[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 19))
{var inst_13747 = (state_13850[25]);var inst_13751 = cljs.core.chunk_first.call(null,inst_13747);var inst_13752 = cljs.core.chunk_rest.call(null,inst_13747);var inst_13753 = cljs.core.count.call(null,inst_13751);var inst_13727 = inst_13752;var inst_13728 = inst_13751;var inst_13729 = inst_13753;var inst_13730 = 0;var state_13850__$1 = (function (){var statearr_13901 = state_13850;(statearr_13901[14] = inst_13727);
(statearr_13901[15] = inst_13729);
(statearr_13901[16] = inst_13728);
(statearr_13901[17] = inst_13730);
return statearr_13901;
})();var statearr_13902_13972 = state_13850__$1;(statearr_13902_13972[2] = null);
(statearr_13902_13972[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 20))
{var inst_13747 = (state_13850[25]);var inst_13757 = cljs.core.first.call(null,inst_13747);var inst_13758 = cljs.core.nth.call(null,inst_13757,0,null);var inst_13759 = cljs.core.nth.call(null,inst_13757,1,null);var state_13850__$1 = (function (){var statearr_13903 = state_13850;(statearr_13903[28] = inst_13758);
return statearr_13903;
})();if(cljs.core.truth_(inst_13759))
{var statearr_13904_13973 = state_13850__$1;(statearr_13904_13973[1] = 22);
} else
{var statearr_13905_13974 = state_13850__$1;(statearr_13905_13974[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 21))
{var inst_13768 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13906_13975 = state_13850__$1;(statearr_13906_13975[2] = inst_13768);
(statearr_13906_13975[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 22))
{var inst_13758 = (state_13850[28]);var inst_13761 = cljs.core.async.close_BANG_.call(null,inst_13758);var state_13850__$1 = state_13850;var statearr_13907_13976 = state_13850__$1;(statearr_13907_13976[2] = inst_13761);
(statearr_13907_13976[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 23))
{var state_13850__$1 = state_13850;var statearr_13908_13977 = state_13850__$1;(statearr_13908_13977[2] = null);
(statearr_13908_13977[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 24))
{var inst_13747 = (state_13850[25]);var inst_13764 = (state_13850[2]);var inst_13765 = cljs.core.next.call(null,inst_13747);var inst_13727 = inst_13765;var inst_13728 = null;var inst_13729 = 0;var inst_13730 = 0;var state_13850__$1 = (function (){var statearr_13909 = state_13850;(statearr_13909[14] = inst_13727);
(statearr_13909[15] = inst_13729);
(statearr_13909[16] = inst_13728);
(statearr_13909[29] = inst_13764);
(statearr_13909[17] = inst_13730);
return statearr_13909;
})();var statearr_13910_13978 = state_13850__$1;(statearr_13910_13978[2] = null);
(statearr_13910_13978[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 25))
{var inst_13788 = (state_13850[10]);var inst_13789 = (state_13850[11]);var inst_13791 = (inst_13789 < inst_13788);var inst_13792 = inst_13791;var state_13850__$1 = state_13850;if(cljs.core.truth_(inst_13792))
{var statearr_13911_13979 = state_13850__$1;(statearr_13911_13979[1] = 27);
} else
{var statearr_13912_13980 = state_13850__$1;(statearr_13912_13980[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 26))
{var inst_13778 = (state_13850[19]);var inst_13836 = (state_13850[2]);var inst_13837 = cljs.core.seq.call(null,inst_13778);var state_13850__$1 = (function (){var statearr_13913 = state_13850;(statearr_13913[30] = inst_13836);
return statearr_13913;
})();if(inst_13837)
{var statearr_13914_13981 = state_13850__$1;(statearr_13914_13981[1] = 42);
} else
{var statearr_13915_13982 = state_13850__$1;(statearr_13915_13982[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 27))
{var inst_13789 = (state_13850[11]);var inst_13787 = (state_13850[12]);var inst_13794 = cljs.core._nth.call(null,inst_13787,inst_13789);var state_13850__$1 = (function (){var statearr_13916 = state_13850;(statearr_13916[7] = inst_13794);
return statearr_13916;
})();var statearr_13917_13983 = state_13850__$1;(statearr_13917_13983[2] = null);
(statearr_13917_13983[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 28))
{var inst_13807 = (state_13850[9]);var inst_13786 = (state_13850[13]);var inst_13807__$1 = cljs.core.seq.call(null,inst_13786);var state_13850__$1 = (function (){var statearr_13921 = state_13850;(statearr_13921[9] = inst_13807__$1);
return statearr_13921;
})();if(inst_13807__$1)
{var statearr_13922_13984 = state_13850__$1;(statearr_13922_13984[1] = 33);
} else
{var statearr_13923_13985 = state_13850__$1;(statearr_13923_13985[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 29))
{var inst_13834 = (state_13850[2]);var state_13850__$1 = state_13850;var statearr_13924_13986 = state_13850__$1;(statearr_13924_13986[2] = inst_13834);
(statearr_13924_13986[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 30))
{var inst_13788 = (state_13850[10]);var inst_13789 = (state_13850[11]);var inst_13787 = (state_13850[12]);var inst_13786 = (state_13850[13]);var inst_13803 = (state_13850[2]);var inst_13804 = (inst_13789 + 1);var tmp13918 = inst_13788;var tmp13919 = inst_13787;var tmp13920 = inst_13786;var inst_13786__$1 = tmp13920;var inst_13787__$1 = tmp13919;var inst_13788__$1 = tmp13918;var inst_13789__$1 = inst_13804;var state_13850__$1 = (function (){var statearr_13925 = state_13850;(statearr_13925[31] = inst_13803);
(statearr_13925[10] = inst_13788__$1);
(statearr_13925[11] = inst_13789__$1);
(statearr_13925[12] = inst_13787__$1);
(statearr_13925[13] = inst_13786__$1);
return statearr_13925;
})();var statearr_13926_13987 = state_13850__$1;(statearr_13926_13987[2] = null);
(statearr_13926_13987[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13851 === 31))
{var inst_13794 = (state_13850[7]);var inst_13795 = (state_13850[2]);var inst_13796 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13797 = cljs.core.async.untap_STAR_.call(null,m,inst_13794);var state_13850__$1 = (function (){var statearr_13927 = state_13850;(statearr_13927[32] = inst_13796);
(statearr_13927[33] = inst_13795);
return statearr_13927;
})();var statearr_13928_13988 = state_13850__$1;(statearr_13928_13988[2] = inst_13797);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13932[0] = state_machine__5507__auto__);
(statearr_13932[1] = 1);
return statearr_13932;
});
var state_machine__5507__auto____1 = (function (state_13850){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13850);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13933){if((e13933 instanceof Object))
{var ex__5510__auto__ = e13933;var statearr_13934_13989 = state_13850;(statearr_13934_13989[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13990 = state_13850;
state_13850 = G__13990;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13850){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13935 = f__5522__auto__.call(null);(statearr_13935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13936);
return statearr_13935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13992 = {};return obj13992;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14102 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14103){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14103 = meta14103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14102.cljs$lang$type = true;
cljs.core.async.t14102.cljs$lang$ctorStr = "cljs.core.async/t14102";
cljs.core.async.t14102.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14102");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14104){var self__ = this;
var _14104__$1 = this;return self__.meta14103;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14104,meta14103__$1){var self__ = this;
var _14104__$1 = this;return (new cljs.core.async.t14102(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14103__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14102 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14102(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14103){return (new cljs.core.async.t14102(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14103));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14102(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14169){var state_val_14170 = (state_14169[1]);if((state_val_14170 === 1))
{var inst_14108 = (state_14169[7]);var inst_14108__$1 = calc_state.call(null);var inst_14109 = cljs.core.seq_QMARK_.call(null,inst_14108__$1);var state_14169__$1 = (function (){var statearr_14171 = state_14169;(statearr_14171[7] = inst_14108__$1);
return statearr_14171;
})();if(inst_14109)
{var statearr_14172_14212 = state_14169__$1;(statearr_14172_14212[1] = 2);
} else
{var statearr_14173_14213 = state_14169__$1;(statearr_14173_14213[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 2))
{var inst_14108 = (state_14169[7]);var inst_14111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14108);var state_14169__$1 = state_14169;var statearr_14174_14214 = state_14169__$1;(statearr_14174_14214[2] = inst_14111);
(statearr_14174_14214[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 3))
{var inst_14108 = (state_14169[7]);var state_14169__$1 = state_14169;var statearr_14175_14215 = state_14169__$1;(statearr_14175_14215[2] = inst_14108);
(statearr_14175_14215[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 4))
{var inst_14108 = (state_14169[7]);var inst_14114 = (state_14169[2]);var inst_14115 = cljs.core.get.call(null,inst_14114,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14116 = cljs.core.get.call(null,inst_14114,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14117 = cljs.core.get.call(null,inst_14114,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14118 = inst_14108;var state_14169__$1 = (function (){var statearr_14176 = state_14169;(statearr_14176[8] = inst_14118);
(statearr_14176[9] = inst_14117);
(statearr_14176[10] = inst_14116);
(statearr_14176[11] = inst_14115);
return statearr_14176;
})();var statearr_14177_14216 = state_14169__$1;(statearr_14177_14216[2] = null);
(statearr_14177_14216[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 5))
{var inst_14118 = (state_14169[8]);var inst_14121 = cljs.core.seq_QMARK_.call(null,inst_14118);var state_14169__$1 = state_14169;if(inst_14121)
{var statearr_14178_14217 = state_14169__$1;(statearr_14178_14217[1] = 7);
} else
{var statearr_14179_14218 = state_14169__$1;(statearr_14179_14218[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 6))
{var inst_14167 = (state_14169[2]);var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14169__$1,inst_14167);
} else
{if((state_val_14170 === 7))
{var inst_14118 = (state_14169[8]);var inst_14123 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14118);var state_14169__$1 = state_14169;var statearr_14180_14219 = state_14169__$1;(statearr_14180_14219[2] = inst_14123);
(statearr_14180_14219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 8))
{var inst_14118 = (state_14169[8]);var state_14169__$1 = state_14169;var statearr_14181_14220 = state_14169__$1;(statearr_14181_14220[2] = inst_14118);
(statearr_14181_14220[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 9))
{var inst_14126 = (state_14169[12]);var inst_14126__$1 = (state_14169[2]);var inst_14127 = cljs.core.get.call(null,inst_14126__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14128 = cljs.core.get.call(null,inst_14126__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14129 = cljs.core.get.call(null,inst_14126__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14169__$1 = (function (){var statearr_14182 = state_14169;(statearr_14182[13] = inst_14129);
(statearr_14182[14] = inst_14128);
(statearr_14182[12] = inst_14126__$1);
return statearr_14182;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14169__$1,10,inst_14127);
} else
{if((state_val_14170 === 10))
{var inst_14134 = (state_14169[15]);var inst_14133 = (state_14169[16]);var inst_14132 = (state_14169[2]);var inst_14133__$1 = cljs.core.nth.call(null,inst_14132,0,null);var inst_14134__$1 = cljs.core.nth.call(null,inst_14132,1,null);var inst_14135 = (inst_14133__$1 == null);var inst_14136 = cljs.core._EQ_.call(null,inst_14134__$1,change);var inst_14137 = (inst_14135) || (inst_14136);var state_14169__$1 = (function (){var statearr_14183 = state_14169;(statearr_14183[15] = inst_14134__$1);
(statearr_14183[16] = inst_14133__$1);
return statearr_14183;
})();if(cljs.core.truth_(inst_14137))
{var statearr_14184_14221 = state_14169__$1;(statearr_14184_14221[1] = 11);
} else
{var statearr_14185_14222 = state_14169__$1;(statearr_14185_14222[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 11))
{var inst_14133 = (state_14169[16]);var inst_14139 = (inst_14133 == null);var state_14169__$1 = state_14169;if(cljs.core.truth_(inst_14139))
{var statearr_14186_14223 = state_14169__$1;(statearr_14186_14223[1] = 14);
} else
{var statearr_14187_14224 = state_14169__$1;(statearr_14187_14224[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 12))
{var inst_14129 = (state_14169[13]);var inst_14134 = (state_14169[15]);var inst_14148 = (state_14169[17]);var inst_14148__$1 = inst_14129.call(null,inst_14134);var state_14169__$1 = (function (){var statearr_14188 = state_14169;(statearr_14188[17] = inst_14148__$1);
return statearr_14188;
})();if(cljs.core.truth_(inst_14148__$1))
{var statearr_14189_14225 = state_14169__$1;(statearr_14189_14225[1] = 17);
} else
{var statearr_14190_14226 = state_14169__$1;(statearr_14190_14226[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 13))
{var inst_14165 = (state_14169[2]);var state_14169__$1 = state_14169;var statearr_14191_14227 = state_14169__$1;(statearr_14191_14227[2] = inst_14165);
(statearr_14191_14227[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 14))
{var inst_14134 = (state_14169[15]);var inst_14141 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14134);var state_14169__$1 = state_14169;var statearr_14192_14228 = state_14169__$1;(statearr_14192_14228[2] = inst_14141);
(statearr_14192_14228[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 15))
{var state_14169__$1 = state_14169;var statearr_14193_14229 = state_14169__$1;(statearr_14193_14229[2] = null);
(statearr_14193_14229[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 16))
{var inst_14144 = (state_14169[2]);var inst_14145 = calc_state.call(null);var inst_14118 = inst_14145;var state_14169__$1 = (function (){var statearr_14194 = state_14169;(statearr_14194[8] = inst_14118);
(statearr_14194[18] = inst_14144);
return statearr_14194;
})();var statearr_14195_14230 = state_14169__$1;(statearr_14195_14230[2] = null);
(statearr_14195_14230[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 17))
{var inst_14148 = (state_14169[17]);var state_14169__$1 = state_14169;var statearr_14196_14231 = state_14169__$1;(statearr_14196_14231[2] = inst_14148);
(statearr_14196_14231[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 18))
{var inst_14129 = (state_14169[13]);var inst_14134 = (state_14169[15]);var inst_14128 = (state_14169[14]);var inst_14151 = cljs.core.empty_QMARK_.call(null,inst_14129);var inst_14152 = inst_14128.call(null,inst_14134);var inst_14153 = cljs.core.not.call(null,inst_14152);var inst_14154 = (inst_14151) && (inst_14153);var state_14169__$1 = state_14169;var statearr_14197_14232 = state_14169__$1;(statearr_14197_14232[2] = inst_14154);
(statearr_14197_14232[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 19))
{var inst_14156 = (state_14169[2]);var state_14169__$1 = state_14169;if(cljs.core.truth_(inst_14156))
{var statearr_14198_14233 = state_14169__$1;(statearr_14198_14233[1] = 20);
} else
{var statearr_14199_14234 = state_14169__$1;(statearr_14199_14234[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 20))
{var inst_14133 = (state_14169[16]);var state_14169__$1 = state_14169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14169__$1,23,out,inst_14133);
} else
{if((state_val_14170 === 21))
{var state_14169__$1 = state_14169;var statearr_14200_14235 = state_14169__$1;(statearr_14200_14235[2] = null);
(statearr_14200_14235[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 22))
{var inst_14126 = (state_14169[12]);var inst_14162 = (state_14169[2]);var inst_14118 = inst_14126;var state_14169__$1 = (function (){var statearr_14201 = state_14169;(statearr_14201[19] = inst_14162);
(statearr_14201[8] = inst_14118);
return statearr_14201;
})();var statearr_14202_14236 = state_14169__$1;(statearr_14202_14236[2] = null);
(statearr_14202_14236[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14170 === 23))
{var inst_14159 = (state_14169[2]);var state_14169__$1 = state_14169;var statearr_14203_14237 = state_14169__$1;(statearr_14203_14237[2] = inst_14159);
(statearr_14203_14237[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14207[0] = state_machine__5507__auto__);
(statearr_14207[1] = 1);
return statearr_14207;
});
var state_machine__5507__auto____1 = (function (state_14169){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14169);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14208){if((e14208 instanceof Object))
{var ex__5510__auto__ = e14208;var statearr_14209_14238 = state_14169;(statearr_14209_14238[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14239 = state_14169;
state_14169 = G__14239;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14169){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14210 = f__5522__auto__.call(null);(statearr_14210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14211);
return statearr_14210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14241 = {};return obj14241;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__14242_SHARP_){if(cljs.core.truth_(p1__14242_SHARP_.call(null,topic)))
{return p1__14242_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14367 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14368){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14368 = meta14368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14367.cljs$lang$type = true;
cljs.core.async.t14367.cljs$lang$ctorStr = "cljs.core.async/t14367";
cljs.core.async.t14367.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14367");
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14367.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14369){var self__ = this;
var _14369__$1 = this;return self__.meta14368;
});})(mults,ensure_mult))
;
cljs.core.async.t14367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14369,meta14368__$1){var self__ = this;
var _14369__$1 = this;return (new cljs.core.async.t14367(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14368__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14367 = ((function (mults,ensure_mult){
return (function __GT_t14367(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14368){return (new cljs.core.async.t14367(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14368));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14367(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14443){var state_val_14444 = (state_14443[1]);if((state_val_14444 === 1))
{var state_14443__$1 = state_14443;var statearr_14445_14492 = state_14443__$1;(statearr_14445_14492[2] = null);
(statearr_14445_14492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 2))
{var state_14443__$1 = state_14443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14443__$1,4,ch);
} else
{if((state_val_14444 === 3))
{var inst_14441 = (state_14443[2]);var state_14443__$1 = state_14443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14443__$1,inst_14441);
} else
{if((state_val_14444 === 4))
{var inst_14372 = (state_14443[7]);var inst_14372__$1 = (state_14443[2]);var inst_14373 = (inst_14372__$1 == null);var state_14443__$1 = (function (){var statearr_14446 = state_14443;(statearr_14446[7] = inst_14372__$1);
return statearr_14446;
})();if(cljs.core.truth_(inst_14373))
{var statearr_14447_14493 = state_14443__$1;(statearr_14447_14493[1] = 5);
} else
{var statearr_14448_14494 = state_14443__$1;(statearr_14448_14494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 5))
{var inst_14379 = cljs.core.deref.call(null,mults);var inst_14380 = cljs.core.vals.call(null,inst_14379);var inst_14381 = cljs.core.seq.call(null,inst_14380);var inst_14382 = inst_14381;var inst_14383 = null;var inst_14384 = 0;var inst_14385 = 0;var state_14443__$1 = (function (){var statearr_14449 = state_14443;(statearr_14449[8] = inst_14385);
(statearr_14449[9] = inst_14382);
(statearr_14449[10] = inst_14384);
(statearr_14449[11] = inst_14383);
return statearr_14449;
})();var statearr_14450_14495 = state_14443__$1;(statearr_14450_14495[2] = null);
(statearr_14450_14495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 6))
{var inst_14372 = (state_14443[7]);var inst_14420 = (state_14443[12]);var inst_14422 = (state_14443[13]);var inst_14420__$1 = topic_fn.call(null,inst_14372);var inst_14421 = cljs.core.deref.call(null,mults);var inst_14422__$1 = cljs.core.get.call(null,inst_14421,inst_14420__$1);var state_14443__$1 = (function (){var statearr_14451 = state_14443;(statearr_14451[12] = inst_14420__$1);
(statearr_14451[13] = inst_14422__$1);
return statearr_14451;
})();if(cljs.core.truth_(inst_14422__$1))
{var statearr_14452_14496 = state_14443__$1;(statearr_14452_14496[1] = 19);
} else
{var statearr_14453_14497 = state_14443__$1;(statearr_14453_14497[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 7))
{var inst_14439 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14454_14498 = state_14443__$1;(statearr_14454_14498[2] = inst_14439);
(statearr_14454_14498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 8))
{var inst_14385 = (state_14443[8]);var inst_14384 = (state_14443[10]);var inst_14387 = (inst_14385 < inst_14384);var inst_14388 = inst_14387;var state_14443__$1 = state_14443;if(cljs.core.truth_(inst_14388))
{var statearr_14458_14499 = state_14443__$1;(statearr_14458_14499[1] = 10);
} else
{var statearr_14459_14500 = state_14443__$1;(statearr_14459_14500[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 9))
{var inst_14418 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14460_14501 = state_14443__$1;(statearr_14460_14501[2] = inst_14418);
(statearr_14460_14501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 10))
{var inst_14385 = (state_14443[8]);var inst_14382 = (state_14443[9]);var inst_14384 = (state_14443[10]);var inst_14383 = (state_14443[11]);var inst_14390 = cljs.core._nth.call(null,inst_14383,inst_14385);var inst_14391 = cljs.core.async.muxch_STAR_.call(null,inst_14390);var inst_14392 = cljs.core.async.close_BANG_.call(null,inst_14391);var inst_14393 = (inst_14385 + 1);var tmp14455 = inst_14382;var tmp14456 = inst_14384;var tmp14457 = inst_14383;var inst_14382__$1 = tmp14455;var inst_14383__$1 = tmp14457;var inst_14384__$1 = tmp14456;var inst_14385__$1 = inst_14393;var state_14443__$1 = (function (){var statearr_14461 = state_14443;(statearr_14461[8] = inst_14385__$1);
(statearr_14461[9] = inst_14382__$1);
(statearr_14461[10] = inst_14384__$1);
(statearr_14461[11] = inst_14383__$1);
(statearr_14461[14] = inst_14392);
return statearr_14461;
})();var statearr_14462_14502 = state_14443__$1;(statearr_14462_14502[2] = null);
(statearr_14462_14502[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 11))
{var inst_14382 = (state_14443[9]);var inst_14396 = (state_14443[15]);var inst_14396__$1 = cljs.core.seq.call(null,inst_14382);var state_14443__$1 = (function (){var statearr_14463 = state_14443;(statearr_14463[15] = inst_14396__$1);
return statearr_14463;
})();if(inst_14396__$1)
{var statearr_14464_14503 = state_14443__$1;(statearr_14464_14503[1] = 13);
} else
{var statearr_14465_14504 = state_14443__$1;(statearr_14465_14504[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 12))
{var inst_14416 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14466_14505 = state_14443__$1;(statearr_14466_14505[2] = inst_14416);
(statearr_14466_14505[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 13))
{var inst_14396 = (state_14443[15]);var inst_14398 = cljs.core.chunked_seq_QMARK_.call(null,inst_14396);var state_14443__$1 = state_14443;if(inst_14398)
{var statearr_14467_14506 = state_14443__$1;(statearr_14467_14506[1] = 16);
} else
{var statearr_14468_14507 = state_14443__$1;(statearr_14468_14507[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 14))
{var state_14443__$1 = state_14443;var statearr_14469_14508 = state_14443__$1;(statearr_14469_14508[2] = null);
(statearr_14469_14508[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 15))
{var inst_14414 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14470_14509 = state_14443__$1;(statearr_14470_14509[2] = inst_14414);
(statearr_14470_14509[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 16))
{var inst_14396 = (state_14443[15]);var inst_14400 = cljs.core.chunk_first.call(null,inst_14396);var inst_14401 = cljs.core.chunk_rest.call(null,inst_14396);var inst_14402 = cljs.core.count.call(null,inst_14400);var inst_14382 = inst_14401;var inst_14383 = inst_14400;var inst_14384 = inst_14402;var inst_14385 = 0;var state_14443__$1 = (function (){var statearr_14471 = state_14443;(statearr_14471[8] = inst_14385);
(statearr_14471[9] = inst_14382);
(statearr_14471[10] = inst_14384);
(statearr_14471[11] = inst_14383);
return statearr_14471;
})();var statearr_14472_14510 = state_14443__$1;(statearr_14472_14510[2] = null);
(statearr_14472_14510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 17))
{var inst_14396 = (state_14443[15]);var inst_14405 = cljs.core.first.call(null,inst_14396);var inst_14406 = cljs.core.async.muxch_STAR_.call(null,inst_14405);var inst_14407 = cljs.core.async.close_BANG_.call(null,inst_14406);var inst_14408 = cljs.core.next.call(null,inst_14396);var inst_14382 = inst_14408;var inst_14383 = null;var inst_14384 = 0;var inst_14385 = 0;var state_14443__$1 = (function (){var statearr_14473 = state_14443;(statearr_14473[16] = inst_14407);
(statearr_14473[8] = inst_14385);
(statearr_14473[9] = inst_14382);
(statearr_14473[10] = inst_14384);
(statearr_14473[11] = inst_14383);
return statearr_14473;
})();var statearr_14474_14511 = state_14443__$1;(statearr_14474_14511[2] = null);
(statearr_14474_14511[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 18))
{var inst_14411 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14475_14512 = state_14443__$1;(statearr_14475_14512[2] = inst_14411);
(statearr_14475_14512[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 19))
{var state_14443__$1 = state_14443;var statearr_14476_14513 = state_14443__$1;(statearr_14476_14513[2] = null);
(statearr_14476_14513[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 20))
{var state_14443__$1 = state_14443;var statearr_14477_14514 = state_14443__$1;(statearr_14477_14514[2] = null);
(statearr_14477_14514[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 21))
{var inst_14436 = (state_14443[2]);var state_14443__$1 = (function (){var statearr_14478 = state_14443;(statearr_14478[17] = inst_14436);
return statearr_14478;
})();var statearr_14479_14515 = state_14443__$1;(statearr_14479_14515[2] = null);
(statearr_14479_14515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 22))
{var inst_14433 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14480_14516 = state_14443__$1;(statearr_14480_14516[2] = inst_14433);
(statearr_14480_14516[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 23))
{var inst_14420 = (state_14443[12]);var inst_14424 = (state_14443[2]);var inst_14425 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14420);var state_14443__$1 = (function (){var statearr_14481 = state_14443;(statearr_14481[18] = inst_14424);
return statearr_14481;
})();var statearr_14482_14517 = state_14443__$1;(statearr_14482_14517[2] = inst_14425);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14443__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14444 === 24))
{var inst_14372 = (state_14443[7]);var inst_14422 = (state_14443[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14443,23,Object,null,22);var inst_14429 = cljs.core.async.muxch_STAR_.call(null,inst_14422);var state_14443__$1 = state_14443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14443__$1,25,inst_14429,inst_14372);
} else
{if((state_val_14444 === 25))
{var inst_14431 = (state_14443[2]);var state_14443__$1 = state_14443;var statearr_14483_14518 = state_14443__$1;(statearr_14483_14518[2] = inst_14431);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14443__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14487[0] = state_machine__5507__auto__);
(statearr_14487[1] = 1);
return statearr_14487;
});
var state_machine__5507__auto____1 = (function (state_14443){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14488){if((e14488 instanceof Object))
{var ex__5510__auto__ = e14488;var statearr_14489_14519 = state_14443;(statearr_14489_14519[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14520 = state_14443;
state_14443 = G__14520;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14443){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14490 = f__5522__auto__.call(null);(statearr_14490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14491);
return statearr_14490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___14657 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14627){var state_val_14628 = (state_14627[1]);if((state_val_14628 === 1))
{var state_14627__$1 = state_14627;var statearr_14629_14658 = state_14627__$1;(statearr_14629_14658[2] = null);
(statearr_14629_14658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 2))
{var inst_14590 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14591 = 0;var state_14627__$1 = (function (){var statearr_14630 = state_14627;(statearr_14630[7] = inst_14591);
(statearr_14630[8] = inst_14590);
return statearr_14630;
})();var statearr_14631_14659 = state_14627__$1;(statearr_14631_14659[2] = null);
(statearr_14631_14659[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 3))
{var inst_14625 = (state_14627[2]);var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14627__$1,inst_14625);
} else
{if((state_val_14628 === 4))
{var inst_14591 = (state_14627[7]);var inst_14593 = (inst_14591 < cnt);var state_14627__$1 = state_14627;if(cljs.core.truth_(inst_14593))
{var statearr_14632_14660 = state_14627__$1;(statearr_14632_14660[1] = 6);
} else
{var statearr_14633_14661 = state_14627__$1;(statearr_14633_14661[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 5))
{var inst_14611 = (state_14627[2]);var state_14627__$1 = (function (){var statearr_14634 = state_14627;(statearr_14634[9] = inst_14611);
return statearr_14634;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14627__$1,12,dchan);
} else
{if((state_val_14628 === 6))
{var state_14627__$1 = state_14627;var statearr_14635_14662 = state_14627__$1;(statearr_14635_14662[2] = null);
(statearr_14635_14662[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 7))
{var state_14627__$1 = state_14627;var statearr_14636_14663 = state_14627__$1;(statearr_14636_14663[2] = null);
(statearr_14636_14663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 8))
{var inst_14609 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14637_14664 = state_14627__$1;(statearr_14637_14664[2] = inst_14609);
(statearr_14637_14664[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 9))
{var inst_14591 = (state_14627[7]);var inst_14604 = (state_14627[2]);var inst_14605 = (inst_14591 + 1);var inst_14591__$1 = inst_14605;var state_14627__$1 = (function (){var statearr_14638 = state_14627;(statearr_14638[10] = inst_14604);
(statearr_14638[7] = inst_14591__$1);
return statearr_14638;
})();var statearr_14639_14665 = state_14627__$1;(statearr_14639_14665[2] = null);
(statearr_14639_14665[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 10))
{var inst_14595 = (state_14627[2]);var inst_14596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14627__$1 = (function (){var statearr_14640 = state_14627;(statearr_14640[11] = inst_14595);
return statearr_14640;
})();var statearr_14641_14666 = state_14627__$1;(statearr_14641_14666[2] = inst_14596);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 11))
{var inst_14591 = (state_14627[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14627,10,Object,null,9);var inst_14600 = chs__$1.call(null,inst_14591);var inst_14601 = done.call(null,inst_14591);var inst_14602 = cljs.core.async.take_BANG_.call(null,inst_14600,inst_14601);var state_14627__$1 = state_14627;var statearr_14642_14667 = state_14627__$1;(statearr_14642_14667[2] = inst_14602);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 12))
{var inst_14613 = (state_14627[12]);var inst_14613__$1 = (state_14627[2]);var inst_14614 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14613__$1);var state_14627__$1 = (function (){var statearr_14643 = state_14627;(statearr_14643[12] = inst_14613__$1);
return statearr_14643;
})();if(cljs.core.truth_(inst_14614))
{var statearr_14644_14668 = state_14627__$1;(statearr_14644_14668[1] = 13);
} else
{var statearr_14645_14669 = state_14627__$1;(statearr_14645_14669[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 13))
{var inst_14616 = cljs.core.async.close_BANG_.call(null,out);var state_14627__$1 = state_14627;var statearr_14646_14670 = state_14627__$1;(statearr_14646_14670[2] = inst_14616);
(statearr_14646_14670[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 14))
{var inst_14613 = (state_14627[12]);var inst_14618 = cljs.core.apply.call(null,f,inst_14613);var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14627__$1,16,out,inst_14618);
} else
{if((state_val_14628 === 15))
{var inst_14623 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14647_14671 = state_14627__$1;(statearr_14647_14671[2] = inst_14623);
(statearr_14647_14671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 16))
{var inst_14620 = (state_14627[2]);var state_14627__$1 = (function (){var statearr_14648 = state_14627;(statearr_14648[13] = inst_14620);
return statearr_14648;
})();var statearr_14649_14672 = state_14627__$1;(statearr_14649_14672[2] = null);
(statearr_14649_14672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14653[0] = state_machine__5507__auto__);
(statearr_14653[1] = 1);
return statearr_14653;
});
var state_machine__5507__auto____1 = (function (state_14627){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14627);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14654){if((e14654 instanceof Object))
{var ex__5510__auto__ = e14654;var statearr_14655_14673 = state_14627;(statearr_14655_14673[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14674 = state_14627;
state_14627 = G__14674;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14656 = f__5522__auto__.call(null);(statearr_14656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14657);
return statearr_14656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14782 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14758){var state_val_14759 = (state_14758[1]);if((state_val_14759 === 1))
{var inst_14729 = cljs.core.vec.call(null,chs);var inst_14730 = inst_14729;var state_14758__$1 = (function (){var statearr_14760 = state_14758;(statearr_14760[7] = inst_14730);
return statearr_14760;
})();var statearr_14761_14783 = state_14758__$1;(statearr_14761_14783[2] = null);
(statearr_14761_14783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 2))
{var inst_14730 = (state_14758[7]);var inst_14732 = cljs.core.count.call(null,inst_14730);var inst_14733 = (inst_14732 > 0);var state_14758__$1 = state_14758;if(cljs.core.truth_(inst_14733))
{var statearr_14762_14784 = state_14758__$1;(statearr_14762_14784[1] = 4);
} else
{var statearr_14763_14785 = state_14758__$1;(statearr_14763_14785[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 3))
{var inst_14756 = (state_14758[2]);var state_14758__$1 = state_14758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14758__$1,inst_14756);
} else
{if((state_val_14759 === 4))
{var inst_14730 = (state_14758[7]);var state_14758__$1 = state_14758;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14758__$1,7,inst_14730);
} else
{if((state_val_14759 === 5))
{var inst_14752 = cljs.core.async.close_BANG_.call(null,out);var state_14758__$1 = state_14758;var statearr_14764_14786 = state_14758__$1;(statearr_14764_14786[2] = inst_14752);
(statearr_14764_14786[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 6))
{var inst_14754 = (state_14758[2]);var state_14758__$1 = state_14758;var statearr_14765_14787 = state_14758__$1;(statearr_14765_14787[2] = inst_14754);
(statearr_14765_14787[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 7))
{var inst_14738 = (state_14758[8]);var inst_14737 = (state_14758[9]);var inst_14737__$1 = (state_14758[2]);var inst_14738__$1 = cljs.core.nth.call(null,inst_14737__$1,0,null);var inst_14739 = cljs.core.nth.call(null,inst_14737__$1,1,null);var inst_14740 = (inst_14738__$1 == null);var state_14758__$1 = (function (){var statearr_14766 = state_14758;(statearr_14766[10] = inst_14739);
(statearr_14766[8] = inst_14738__$1);
(statearr_14766[9] = inst_14737__$1);
return statearr_14766;
})();if(cljs.core.truth_(inst_14740))
{var statearr_14767_14788 = state_14758__$1;(statearr_14767_14788[1] = 8);
} else
{var statearr_14768_14789 = state_14758__$1;(statearr_14768_14789[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 8))
{var inst_14739 = (state_14758[10]);var inst_14738 = (state_14758[8]);var inst_14730 = (state_14758[7]);var inst_14737 = (state_14758[9]);var inst_14742 = (function (){var c = inst_14739;var v = inst_14738;var vec__14735 = inst_14737;var cs = inst_14730;return ((function (c,v,vec__14735,cs,inst_14739,inst_14738,inst_14730,inst_14737,state_val_14759){
return (function (p1__14675_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14675_SHARP_);
});
;})(c,v,vec__14735,cs,inst_14739,inst_14738,inst_14730,inst_14737,state_val_14759))
})();var inst_14743 = cljs.core.filterv.call(null,inst_14742,inst_14730);var inst_14730__$1 = inst_14743;var state_14758__$1 = (function (){var statearr_14769 = state_14758;(statearr_14769[7] = inst_14730__$1);
return statearr_14769;
})();var statearr_14770_14790 = state_14758__$1;(statearr_14770_14790[2] = null);
(statearr_14770_14790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 9))
{var inst_14738 = (state_14758[8]);var state_14758__$1 = state_14758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14758__$1,11,out,inst_14738);
} else
{if((state_val_14759 === 10))
{var inst_14750 = (state_14758[2]);var state_14758__$1 = state_14758;var statearr_14772_14791 = state_14758__$1;(statearr_14772_14791[2] = inst_14750);
(statearr_14772_14791[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14759 === 11))
{var inst_14730 = (state_14758[7]);var inst_14747 = (state_14758[2]);var tmp14771 = inst_14730;var inst_14730__$1 = tmp14771;var state_14758__$1 = (function (){var statearr_14773 = state_14758;(statearr_14773[7] = inst_14730__$1);
(statearr_14773[11] = inst_14747);
return statearr_14773;
})();var statearr_14774_14792 = state_14758__$1;(statearr_14774_14792[2] = null);
(statearr_14774_14792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14778 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14778[0] = state_machine__5507__auto__);
(statearr_14778[1] = 1);
return statearr_14778;
});
var state_machine__5507__auto____1 = (function (state_14758){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14779){if((e14779 instanceof Object))
{var ex__5510__auto__ = e14779;var statearr_14780_14793 = state_14758;(statearr_14780_14793[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14794 = state_14758;
state_14758 = G__14794;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14758){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14781 = f__5522__auto__.call(null);(statearr_14781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14782);
return statearr_14781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14864){var state_val_14865 = (state_14864[1]);if((state_val_14865 === 1))
{var inst_14841 = 0;var state_14864__$1 = (function (){var statearr_14866 = state_14864;(statearr_14866[7] = inst_14841);
return statearr_14866;
})();var statearr_14867_14888 = state_14864__$1;(statearr_14867_14888[2] = null);
(statearr_14867_14888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 2))
{var inst_14841 = (state_14864[7]);var inst_14843 = (inst_14841 < n);var state_14864__$1 = state_14864;if(cljs.core.truth_(inst_14843))
{var statearr_14868_14889 = state_14864__$1;(statearr_14868_14889[1] = 4);
} else
{var statearr_14869_14890 = state_14864__$1;(statearr_14869_14890[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 3))
{var inst_14861 = (state_14864[2]);var inst_14862 = cljs.core.async.close_BANG_.call(null,out);var state_14864__$1 = (function (){var statearr_14870 = state_14864;(statearr_14870[8] = inst_14861);
return statearr_14870;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14864__$1,inst_14862);
} else
{if((state_val_14865 === 4))
{var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14864__$1,7,ch);
} else
{if((state_val_14865 === 5))
{var state_14864__$1 = state_14864;var statearr_14871_14891 = state_14864__$1;(statearr_14871_14891[2] = null);
(statearr_14871_14891[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 6))
{var inst_14859 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14872_14892 = state_14864__$1;(statearr_14872_14892[2] = inst_14859);
(statearr_14872_14892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 7))
{var inst_14846 = (state_14864[9]);var inst_14846__$1 = (state_14864[2]);var inst_14847 = (inst_14846__$1 == null);var inst_14848 = cljs.core.not.call(null,inst_14847);var state_14864__$1 = (function (){var statearr_14873 = state_14864;(statearr_14873[9] = inst_14846__$1);
return statearr_14873;
})();if(inst_14848)
{var statearr_14874_14893 = state_14864__$1;(statearr_14874_14893[1] = 8);
} else
{var statearr_14875_14894 = state_14864__$1;(statearr_14875_14894[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 8))
{var inst_14846 = (state_14864[9]);var state_14864__$1 = state_14864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14864__$1,11,out,inst_14846);
} else
{if((state_val_14865 === 9))
{var state_14864__$1 = state_14864;var statearr_14876_14895 = state_14864__$1;(statearr_14876_14895[2] = null);
(statearr_14876_14895[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 10))
{var inst_14856 = (state_14864[2]);var state_14864__$1 = state_14864;var statearr_14877_14896 = state_14864__$1;(statearr_14877_14896[2] = inst_14856);
(statearr_14877_14896[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14865 === 11))
{var inst_14841 = (state_14864[7]);var inst_14851 = (state_14864[2]);var inst_14852 = (inst_14841 + 1);var inst_14841__$1 = inst_14852;var state_14864__$1 = (function (){var statearr_14878 = state_14864;(statearr_14878[10] = inst_14851);
(statearr_14878[7] = inst_14841__$1);
return statearr_14878;
})();var statearr_14879_14897 = state_14864__$1;(statearr_14879_14897[2] = null);
(statearr_14879_14897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14883 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14883[0] = state_machine__5507__auto__);
(statearr_14883[1] = 1);
return statearr_14883;
});
var state_machine__5507__auto____1 = (function (state_14864){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14884){if((e14884 instanceof Object))
{var ex__5510__auto__ = e14884;var statearr_14885_14898 = state_14864;(statearr_14885_14898[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14899 = state_14864;
state_14864 = G__14899;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14886 = f__5522__auto__.call(null);(statearr_14886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14887);
return statearr_14886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14971){var state_val_14972 = (state_14971[1]);if((state_val_14972 === 1))
{var inst_14948 = null;var state_14971__$1 = (function (){var statearr_14973 = state_14971;(statearr_14973[7] = inst_14948);
return statearr_14973;
})();var statearr_14974_14997 = state_14971__$1;(statearr_14974_14997[2] = null);
(statearr_14974_14997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 2))
{var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14971__$1,4,ch);
} else
{if((state_val_14972 === 3))
{var inst_14968 = (state_14971[2]);var inst_14969 = cljs.core.async.close_BANG_.call(null,out);var state_14971__$1 = (function (){var statearr_14975 = state_14971;(statearr_14975[8] = inst_14968);
return statearr_14975;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14971__$1,inst_14969);
} else
{if((state_val_14972 === 4))
{var inst_14951 = (state_14971[9]);var inst_14951__$1 = (state_14971[2]);var inst_14952 = (inst_14951__$1 == null);var inst_14953 = cljs.core.not.call(null,inst_14952);var state_14971__$1 = (function (){var statearr_14976 = state_14971;(statearr_14976[9] = inst_14951__$1);
return statearr_14976;
})();if(inst_14953)
{var statearr_14977_14998 = state_14971__$1;(statearr_14977_14998[1] = 5);
} else
{var statearr_14978_14999 = state_14971__$1;(statearr_14978_14999[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 5))
{var inst_14948 = (state_14971[7]);var inst_14951 = (state_14971[9]);var inst_14955 = cljs.core._EQ_.call(null,inst_14951,inst_14948);var state_14971__$1 = state_14971;if(inst_14955)
{var statearr_14979_15000 = state_14971__$1;(statearr_14979_15000[1] = 8);
} else
{var statearr_14980_15001 = state_14971__$1;(statearr_14980_15001[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 6))
{var state_14971__$1 = state_14971;var statearr_14982_15002 = state_14971__$1;(statearr_14982_15002[2] = null);
(statearr_14982_15002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 7))
{var inst_14966 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14983_15003 = state_14971__$1;(statearr_14983_15003[2] = inst_14966);
(statearr_14983_15003[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 8))
{var inst_14948 = (state_14971[7]);var tmp14981 = inst_14948;var inst_14948__$1 = tmp14981;var state_14971__$1 = (function (){var statearr_14984 = state_14971;(statearr_14984[7] = inst_14948__$1);
return statearr_14984;
})();var statearr_14985_15004 = state_14971__$1;(statearr_14985_15004[2] = null);
(statearr_14985_15004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 9))
{var inst_14951 = (state_14971[9]);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14971__$1,11,out,inst_14951);
} else
{if((state_val_14972 === 10))
{var inst_14963 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14986_15005 = state_14971__$1;(statearr_14986_15005[2] = inst_14963);
(statearr_14986_15005[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 11))
{var inst_14951 = (state_14971[9]);var inst_14960 = (state_14971[2]);var inst_14948 = inst_14951;var state_14971__$1 = (function (){var statearr_14987 = state_14971;(statearr_14987[10] = inst_14960);
(statearr_14987[7] = inst_14948);
return statearr_14987;
})();var statearr_14988_15006 = state_14971__$1;(statearr_14988_15006[2] = null);
(statearr_14988_15006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14992 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14992[0] = state_machine__5507__auto__);
(statearr_14992[1] = 1);
return statearr_14992;
});
var state_machine__5507__auto____1 = (function (state_14971){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14993){if((e14993 instanceof Object))
{var ex__5510__auto__ = e14993;var statearr_14994_15007 = state_14971;(statearr_14994_15007[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15008 = state_14971;
state_14971 = G__15008;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14995 = f__5522__auto__.call(null);(statearr_14995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14996);
return statearr_14995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15143 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15113){var state_val_15114 = (state_15113[1]);if((state_val_15114 === 1))
{var inst_15076 = (new Array(n));var inst_15077 = inst_15076;var inst_15078 = 0;var state_15113__$1 = (function (){var statearr_15115 = state_15113;(statearr_15115[7] = inst_15078);
(statearr_15115[8] = inst_15077);
return statearr_15115;
})();var statearr_15116_15144 = state_15113__$1;(statearr_15116_15144[2] = null);
(statearr_15116_15144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 2))
{var state_15113__$1 = state_15113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15113__$1,4,ch);
} else
{if((state_val_15114 === 3))
{var inst_15111 = (state_15113[2]);var state_15113__$1 = state_15113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15113__$1,inst_15111);
} else
{if((state_val_15114 === 4))
{var inst_15081 = (state_15113[9]);var inst_15081__$1 = (state_15113[2]);var inst_15082 = (inst_15081__$1 == null);var inst_15083 = cljs.core.not.call(null,inst_15082);var state_15113__$1 = (function (){var statearr_15117 = state_15113;(statearr_15117[9] = inst_15081__$1);
return statearr_15117;
})();if(inst_15083)
{var statearr_15118_15145 = state_15113__$1;(statearr_15118_15145[1] = 5);
} else
{var statearr_15119_15146 = state_15113__$1;(statearr_15119_15146[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 5))
{var inst_15081 = (state_15113[9]);var inst_15078 = (state_15113[7]);var inst_15077 = (state_15113[8]);var inst_15086 = (state_15113[10]);var inst_15085 = (inst_15077[inst_15078] = inst_15081);var inst_15086__$1 = (inst_15078 + 1);var inst_15087 = (inst_15086__$1 < n);var state_15113__$1 = (function (){var statearr_15120 = state_15113;(statearr_15120[10] = inst_15086__$1);
(statearr_15120[11] = inst_15085);
return statearr_15120;
})();if(cljs.core.truth_(inst_15087))
{var statearr_15121_15147 = state_15113__$1;(statearr_15121_15147[1] = 8);
} else
{var statearr_15122_15148 = state_15113__$1;(statearr_15122_15148[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 6))
{var inst_15078 = (state_15113[7]);var inst_15099 = (inst_15078 > 0);var state_15113__$1 = state_15113;if(cljs.core.truth_(inst_15099))
{var statearr_15124_15149 = state_15113__$1;(statearr_15124_15149[1] = 12);
} else
{var statearr_15125_15150 = state_15113__$1;(statearr_15125_15150[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 7))
{var inst_15109 = (state_15113[2]);var state_15113__$1 = state_15113;var statearr_15126_15151 = state_15113__$1;(statearr_15126_15151[2] = inst_15109);
(statearr_15126_15151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 8))
{var inst_15077 = (state_15113[8]);var inst_15086 = (state_15113[10]);var tmp15123 = inst_15077;var inst_15077__$1 = tmp15123;var inst_15078 = inst_15086;var state_15113__$1 = (function (){var statearr_15127 = state_15113;(statearr_15127[7] = inst_15078);
(statearr_15127[8] = inst_15077__$1);
return statearr_15127;
})();var statearr_15128_15152 = state_15113__$1;(statearr_15128_15152[2] = null);
(statearr_15128_15152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 9))
{var inst_15077 = (state_15113[8]);var inst_15091 = cljs.core.vec.call(null,inst_15077);var state_15113__$1 = state_15113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15113__$1,11,out,inst_15091);
} else
{if((state_val_15114 === 10))
{var inst_15097 = (state_15113[2]);var state_15113__$1 = state_15113;var statearr_15129_15153 = state_15113__$1;(statearr_15129_15153[2] = inst_15097);
(statearr_15129_15153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 11))
{var inst_15093 = (state_15113[2]);var inst_15094 = (new Array(n));var inst_15077 = inst_15094;var inst_15078 = 0;var state_15113__$1 = (function (){var statearr_15130 = state_15113;(statearr_15130[7] = inst_15078);
(statearr_15130[8] = inst_15077);
(statearr_15130[12] = inst_15093);
return statearr_15130;
})();var statearr_15131_15154 = state_15113__$1;(statearr_15131_15154[2] = null);
(statearr_15131_15154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 12))
{var inst_15077 = (state_15113[8]);var inst_15101 = cljs.core.vec.call(null,inst_15077);var state_15113__$1 = state_15113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15113__$1,15,out,inst_15101);
} else
{if((state_val_15114 === 13))
{var state_15113__$1 = state_15113;var statearr_15132_15155 = state_15113__$1;(statearr_15132_15155[2] = null);
(statearr_15132_15155[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 14))
{var inst_15106 = (state_15113[2]);var inst_15107 = cljs.core.async.close_BANG_.call(null,out);var state_15113__$1 = (function (){var statearr_15133 = state_15113;(statearr_15133[13] = inst_15106);
return statearr_15133;
})();var statearr_15134_15156 = state_15113__$1;(statearr_15134_15156[2] = inst_15107);
(statearr_15134_15156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15114 === 15))
{var inst_15103 = (state_15113[2]);var state_15113__$1 = state_15113;var statearr_15135_15157 = state_15113__$1;(statearr_15135_15157[2] = inst_15103);
(statearr_15135_15157[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15139[0] = state_machine__5507__auto__);
(statearr_15139[1] = 1);
return statearr_15139;
});
var state_machine__5507__auto____1 = (function (state_15113){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15140){if((e15140 instanceof Object))
{var ex__5510__auto__ = e15140;var statearr_15141_15158 = state_15113;(statearr_15141_15158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15159 = state_15113;
state_15113 = G__15159;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15113){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15142 = f__5522__auto__.call(null);(statearr_15142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15143);
return statearr_15142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15302 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15272){var state_val_15273 = (state_15272[1]);if((state_val_15273 === 1))
{var inst_15231 = [];var inst_15232 = inst_15231;var inst_15233 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15272__$1 = (function (){var statearr_15274 = state_15272;(statearr_15274[7] = inst_15232);
(statearr_15274[8] = inst_15233);
return statearr_15274;
})();var statearr_15275_15303 = state_15272__$1;(statearr_15275_15303[2] = null);
(statearr_15275_15303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 2))
{var state_15272__$1 = state_15272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15272__$1,4,ch);
} else
{if((state_val_15273 === 3))
{var inst_15270 = (state_15272[2]);var state_15272__$1 = state_15272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15272__$1,inst_15270);
} else
{if((state_val_15273 === 4))
{var inst_15236 = (state_15272[9]);var inst_15236__$1 = (state_15272[2]);var inst_15237 = (inst_15236__$1 == null);var inst_15238 = cljs.core.not.call(null,inst_15237);var state_15272__$1 = (function (){var statearr_15276 = state_15272;(statearr_15276[9] = inst_15236__$1);
return statearr_15276;
})();if(inst_15238)
{var statearr_15277_15304 = state_15272__$1;(statearr_15277_15304[1] = 5);
} else
{var statearr_15278_15305 = state_15272__$1;(statearr_15278_15305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 5))
{var inst_15233 = (state_15272[8]);var inst_15240 = (state_15272[10]);var inst_15236 = (state_15272[9]);var inst_15240__$1 = f.call(null,inst_15236);var inst_15241 = cljs.core._EQ_.call(null,inst_15240__$1,inst_15233);var inst_15242 = cljs.core.keyword_identical_QMARK_.call(null,inst_15233,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15243 = (inst_15241) || (inst_15242);var state_15272__$1 = (function (){var statearr_15279 = state_15272;(statearr_15279[10] = inst_15240__$1);
return statearr_15279;
})();if(cljs.core.truth_(inst_15243))
{var statearr_15280_15306 = state_15272__$1;(statearr_15280_15306[1] = 8);
} else
{var statearr_15281_15307 = state_15272__$1;(statearr_15281_15307[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 6))
{var inst_15232 = (state_15272[7]);var inst_15257 = inst_15232.length;var inst_15258 = (inst_15257 > 0);var state_15272__$1 = state_15272;if(cljs.core.truth_(inst_15258))
{var statearr_15283_15308 = state_15272__$1;(statearr_15283_15308[1] = 12);
} else
{var statearr_15284_15309 = state_15272__$1;(statearr_15284_15309[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 7))
{var inst_15268 = (state_15272[2]);var state_15272__$1 = state_15272;var statearr_15285_15310 = state_15272__$1;(statearr_15285_15310[2] = inst_15268);
(statearr_15285_15310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 8))
{var inst_15232 = (state_15272[7]);var inst_15240 = (state_15272[10]);var inst_15236 = (state_15272[9]);var inst_15245 = inst_15232.push(inst_15236);var tmp15282 = inst_15232;var inst_15232__$1 = tmp15282;var inst_15233 = inst_15240;var state_15272__$1 = (function (){var statearr_15286 = state_15272;(statearr_15286[7] = inst_15232__$1);
(statearr_15286[8] = inst_15233);
(statearr_15286[11] = inst_15245);
return statearr_15286;
})();var statearr_15287_15311 = state_15272__$1;(statearr_15287_15311[2] = null);
(statearr_15287_15311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 9))
{var inst_15232 = (state_15272[7]);var inst_15248 = cljs.core.vec.call(null,inst_15232);var state_15272__$1 = state_15272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15272__$1,11,out,inst_15248);
} else
{if((state_val_15273 === 10))
{var inst_15255 = (state_15272[2]);var state_15272__$1 = state_15272;var statearr_15288_15312 = state_15272__$1;(statearr_15288_15312[2] = inst_15255);
(statearr_15288_15312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 11))
{var inst_15240 = (state_15272[10]);var inst_15236 = (state_15272[9]);var inst_15250 = (state_15272[2]);var inst_15251 = [];var inst_15252 = inst_15251.push(inst_15236);var inst_15232 = inst_15251;var inst_15233 = inst_15240;var state_15272__$1 = (function (){var statearr_15289 = state_15272;(statearr_15289[12] = inst_15250);
(statearr_15289[13] = inst_15252);
(statearr_15289[7] = inst_15232);
(statearr_15289[8] = inst_15233);
return statearr_15289;
})();var statearr_15290_15313 = state_15272__$1;(statearr_15290_15313[2] = null);
(statearr_15290_15313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 12))
{var inst_15232 = (state_15272[7]);var inst_15260 = cljs.core.vec.call(null,inst_15232);var state_15272__$1 = state_15272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15272__$1,15,out,inst_15260);
} else
{if((state_val_15273 === 13))
{var state_15272__$1 = state_15272;var statearr_15291_15314 = state_15272__$1;(statearr_15291_15314[2] = null);
(statearr_15291_15314[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 14))
{var inst_15265 = (state_15272[2]);var inst_15266 = cljs.core.async.close_BANG_.call(null,out);var state_15272__$1 = (function (){var statearr_15292 = state_15272;(statearr_15292[14] = inst_15265);
return statearr_15292;
})();var statearr_15293_15315 = state_15272__$1;(statearr_15293_15315[2] = inst_15266);
(statearr_15293_15315[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15273 === 15))
{var inst_15262 = (state_15272[2]);var state_15272__$1 = state_15272;var statearr_15294_15316 = state_15272__$1;(statearr_15294_15316[2] = inst_15262);
(statearr_15294_15316[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15298[0] = state_machine__5507__auto__);
(statearr_15298[1] = 1);
return statearr_15298;
});
var state_machine__5507__auto____1 = (function (state_15272){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15272);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15299){if((e15299 instanceof Object))
{var ex__5510__auto__ = e15299;var statearr_15300_15317 = state_15272;(statearr_15300_15317[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15318 = state_15272;
state_15272 = G__15318;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15272){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15301 = f__5522__auto__.call(null);(statearr_15301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15302);
return statearr_15301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map