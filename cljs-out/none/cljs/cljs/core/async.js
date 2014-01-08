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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11805 = (function (f,fn_handler,meta11806){
this.f = f;
this.fn_handler = fn_handler;
this.meta11806 = meta11806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11805.cljs$lang$type = true;
cljs.core.async.t11805.cljs$lang$ctorStr = "cljs.core.async/t11805";
cljs.core.async.t11805.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11805");
});
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11807){var self__ = this;
var _11807__$1 = this;return self__.meta11806;
});
cljs.core.async.t11805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11807,meta11806__$1){var self__ = this;
var _11807__$1 = this;return (new cljs.core.async.t11805(self__.f,self__.fn_handler,meta11806__$1));
});
cljs.core.async.__GT_t11805 = (function __GT_t11805(f__$1,fn_handler__$1,meta11806){return (new cljs.core.async.t11805(f__$1,fn_handler__$1,meta11806));
});
}
return (new cljs.core.async.t11805(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11809 = buff;if(G__11809)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11809.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11809.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11809);
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
{var val_11810 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11810);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11810);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11811 = n;var x_11812 = 0;while(true){
if((x_11812 < n__4248__auto___11811))
{(a[x_11812] = 0);
{
var G__11813 = (x_11812 + 1);
x_11812 = G__11813;
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
var G__11814 = (i + 1);
i = G__11814;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11818 = (function (flag,alt_flag,meta11819){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11819 = meta11819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11818.cljs$lang$type = true;
cljs.core.async.t11818.cljs$lang$ctorStr = "cljs.core.async/t11818";
cljs.core.async.t11818.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11818");
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11820){var self__ = this;
var _11820__$1 = this;return self__.meta11819;
});
cljs.core.async.t11818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11820,meta11819__$1){var self__ = this;
var _11820__$1 = this;return (new cljs.core.async.t11818(self__.flag,self__.alt_flag,meta11819__$1));
});
cljs.core.async.__GT_t11818 = (function __GT_t11818(flag__$1,alt_flag__$1,meta11819){return (new cljs.core.async.t11818(flag__$1,alt_flag__$1,meta11819));
});
}
return (new cljs.core.async.t11818(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11824 = (function (cb,flag,alt_handler,meta11825){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11825 = meta11825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11824.cljs$lang$type = true;
cljs.core.async.t11824.cljs$lang$ctorStr = "cljs.core.async/t11824";
cljs.core.async.t11824.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11824");
});
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11826){var self__ = this;
var _11826__$1 = this;return self__.meta11825;
});
cljs.core.async.t11824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11826,meta11825__$1){var self__ = this;
var _11826__$1 = this;return (new cljs.core.async.t11824(self__.cb,self__.flag,self__.alt_handler,meta11825__$1));
});
cljs.core.async.__GT_t11824 = (function __GT_t11824(cb__$1,flag__$1,alt_handler__$1,meta11825){return (new cljs.core.async.t11824(cb__$1,flag__$1,alt_handler__$1,meta11825));
});
}
return (new cljs.core.async.t11824(cb,flag,alt_handler,null));
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
return (function (p1__11827_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11827_SHARP_,port], null));
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
var G__11828 = (i + 1);
i = G__11828;
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
var alts_BANG___delegate = function (ports,p__11829){var map__11831 = p__11829;var map__11831__$1 = ((cljs.core.seq_QMARK_.call(null,map__11831))?cljs.core.apply.call(null,cljs.core.hash_map,map__11831):map__11831);var opts = map__11831__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11829 = null;if (arguments.length > 1) {
  p__11829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11829);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11832){
var ports = cljs.core.first(arglist__11832);
var p__11829 = cljs.core.rest(arglist__11832);
return alts_BANG___delegate(ports,p__11829);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11840 = (function (ch,f,map_LT_,meta11841){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11841 = meta11841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11840.cljs$lang$type = true;
cljs.core.async.t11840.cljs$lang$ctorStr = "cljs.core.async/t11840";
cljs.core.async.t11840.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11840");
});
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11843 = (function (fn1,_,meta11841,ch,f,map_LT_,meta11844){
this.fn1 = fn1;
this._ = _;
this.meta11841 = meta11841;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11844 = meta11844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11843.cljs$lang$type = true;
cljs.core.async.t11843.cljs$lang$ctorStr = "cljs.core.async/t11843";
cljs.core.async.t11843.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11843");
});
cljs.core.async.t11843.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11843.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11833_SHARP_){return f1.call(null,(((p1__11833_SHARP_ == null))?null:self__.f.call(null,p1__11833_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11845){var self__ = this;
var _11845__$1 = this;return self__.meta11844;
});
cljs.core.async.t11843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11845,meta11844__$1){var self__ = this;
var _11845__$1 = this;return (new cljs.core.async.t11843(self__.fn1,self__._,self__.meta11841,self__.ch,self__.f,self__.map_LT_,meta11844__$1));
});
cljs.core.async.__GT_t11843 = (function __GT_t11843(fn1__$1,___$2,meta11841__$1,ch__$2,f__$2,map_LT___$2,meta11844){return (new cljs.core.async.t11843(fn1__$1,___$2,meta11841__$1,ch__$2,f__$2,map_LT___$2,meta11844));
});
}
return (new cljs.core.async.t11843(fn1,___$1,self__.meta11841,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11842){var self__ = this;
var _11842__$1 = this;return self__.meta11841;
});
cljs.core.async.t11840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11842,meta11841__$1){var self__ = this;
var _11842__$1 = this;return (new cljs.core.async.t11840(self__.ch,self__.f,self__.map_LT_,meta11841__$1));
});
cljs.core.async.__GT_t11840 = (function __GT_t11840(ch__$1,f__$1,map_LT___$1,meta11841){return (new cljs.core.async.t11840(ch__$1,f__$1,map_LT___$1,meta11841));
});
}
return (new cljs.core.async.t11840(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11849 = (function (ch,f,map_GT_,meta11850){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11850 = meta11850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11849.cljs$lang$type = true;
cljs.core.async.t11849.cljs$lang$ctorStr = "cljs.core.async/t11849";
cljs.core.async.t11849.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11849");
});
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11851){var self__ = this;
var _11851__$1 = this;return self__.meta11850;
});
cljs.core.async.t11849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11851,meta11850__$1){var self__ = this;
var _11851__$1 = this;return (new cljs.core.async.t11849(self__.ch,self__.f,self__.map_GT_,meta11850__$1));
});
cljs.core.async.__GT_t11849 = (function __GT_t11849(ch__$1,f__$1,map_GT___$1,meta11850){return (new cljs.core.async.t11849(ch__$1,f__$1,map_GT___$1,meta11850));
});
}
return (new cljs.core.async.t11849(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11855 = (function (ch,p,filter_GT_,meta11856){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11856 = meta11856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11855.cljs$lang$type = true;
cljs.core.async.t11855.cljs$lang$ctorStr = "cljs.core.async/t11855";
cljs.core.async.t11855.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11855");
});
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11857){var self__ = this;
var _11857__$1 = this;return self__.meta11856;
});
cljs.core.async.t11855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11857,meta11856__$1){var self__ = this;
var _11857__$1 = this;return (new cljs.core.async.t11855(self__.ch,self__.p,self__.filter_GT_,meta11856__$1));
});
cljs.core.async.__GT_t11855 = (function __GT_t11855(ch__$1,p__$1,filter_GT___$1,meta11856){return (new cljs.core.async.t11855(ch__$1,p__$1,filter_GT___$1,meta11856));
});
}
return (new cljs.core.async.t11855(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11919){var state_val_11920 = (state_11919[1]);if((state_val_11920 === 1))
{var state_11919__$1 = state_11919;var statearr_11921_11941 = state_11919__$1;(statearr_11921_11941[2] = null);
(statearr_11921_11941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 2))
{var state_11919__$1 = state_11919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11919__$1,4,ch);
} else
{if((state_val_11920 === 3))
{var inst_11917 = (state_11919[2]);var state_11919__$1 = state_11919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11919__$1,inst_11917);
} else
{if((state_val_11920 === 4))
{var inst_11901 = (state_11919[7]);var inst_11901__$1 = (state_11919[2]);var inst_11902 = (inst_11901__$1 == null);var state_11919__$1 = (function (){var statearr_11922 = state_11919;(statearr_11922[7] = inst_11901__$1);
return statearr_11922;
})();if(cljs.core.truth_(inst_11902))
{var statearr_11923_11942 = state_11919__$1;(statearr_11923_11942[1] = 5);
} else
{var statearr_11924_11943 = state_11919__$1;(statearr_11924_11943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 5))
{var inst_11904 = cljs.core.async.close_BANG_.call(null,out);var state_11919__$1 = state_11919;var statearr_11925_11944 = state_11919__$1;(statearr_11925_11944[2] = inst_11904);
(statearr_11925_11944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 6))
{var inst_11901 = (state_11919[7]);var inst_11906 = p.call(null,inst_11901);var state_11919__$1 = state_11919;if(cljs.core.truth_(inst_11906))
{var statearr_11926_11945 = state_11919__$1;(statearr_11926_11945[1] = 8);
} else
{var statearr_11927_11946 = state_11919__$1;(statearr_11927_11946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 7))
{var inst_11915 = (state_11919[2]);var state_11919__$1 = state_11919;var statearr_11928_11947 = state_11919__$1;(statearr_11928_11947[2] = inst_11915);
(statearr_11928_11947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 8))
{var inst_11901 = (state_11919[7]);var state_11919__$1 = state_11919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11919__$1,11,out,inst_11901);
} else
{if((state_val_11920 === 9))
{var state_11919__$1 = state_11919;var statearr_11929_11948 = state_11919__$1;(statearr_11929_11948[2] = null);
(statearr_11929_11948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 10))
{var inst_11912 = (state_11919[2]);var state_11919__$1 = (function (){var statearr_11930 = state_11919;(statearr_11930[8] = inst_11912);
return statearr_11930;
})();var statearr_11931_11949 = state_11919__$1;(statearr_11931_11949[2] = null);
(statearr_11931_11949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11920 === 11))
{var inst_11909 = (state_11919[2]);var state_11919__$1 = state_11919;var statearr_11932_11950 = state_11919__$1;(statearr_11932_11950[2] = inst_11909);
(statearr_11932_11950[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_11936 = [null,null,null,null,null,null,null,null,null];(statearr_11936[0] = state_machine__5507__auto__);
(statearr_11936[1] = 1);
return statearr_11936;
});
var state_machine__5507__auto____1 = (function (state_11919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11937){if((e11937 instanceof Object))
{var ex__5510__auto__ = e11937;var statearr_11938_11951 = state_11919;(statearr_11938_11951[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11952 = state_11919;
state_11919 = G__11952;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11939 = f__5522__auto__.call(null);(statearr_11939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11940);
return statearr_11939;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12104){var state_val_12105 = (state_12104[1]);if((state_val_12105 === 1))
{var state_12104__$1 = state_12104;var statearr_12106_12143 = state_12104__$1;(statearr_12106_12143[2] = null);
(statearr_12106_12143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 2))
{var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12104__$1,4,in$);
} else
{if((state_val_12105 === 3))
{var inst_12102 = (state_12104[2]);var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12104__$1,inst_12102);
} else
{if((state_val_12105 === 4))
{var inst_12050 = (state_12104[7]);var inst_12050__$1 = (state_12104[2]);var inst_12051 = (inst_12050__$1 == null);var state_12104__$1 = (function (){var statearr_12107 = state_12104;(statearr_12107[7] = inst_12050__$1);
return statearr_12107;
})();if(cljs.core.truth_(inst_12051))
{var statearr_12108_12144 = state_12104__$1;(statearr_12108_12144[1] = 5);
} else
{var statearr_12109_12145 = state_12104__$1;(statearr_12109_12145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 5))
{var inst_12053 = cljs.core.async.close_BANG_.call(null,out);var state_12104__$1 = state_12104;var statearr_12110_12146 = state_12104__$1;(statearr_12110_12146[2] = inst_12053);
(statearr_12110_12146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 6))
{var inst_12050 = (state_12104[7]);var inst_12055 = f.call(null,inst_12050);var inst_12060 = cljs.core.seq.call(null,inst_12055);var inst_12061 = inst_12060;var inst_12062 = null;var inst_12063 = 0;var inst_12064 = 0;var state_12104__$1 = (function (){var statearr_12111 = state_12104;(statearr_12111[8] = inst_12064);
(statearr_12111[9] = inst_12061);
(statearr_12111[10] = inst_12063);
(statearr_12111[11] = inst_12062);
return statearr_12111;
})();var statearr_12112_12147 = state_12104__$1;(statearr_12112_12147[2] = null);
(statearr_12112_12147[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 7))
{var inst_12100 = (state_12104[2]);var state_12104__$1 = state_12104;var statearr_12113_12148 = state_12104__$1;(statearr_12113_12148[2] = inst_12100);
(statearr_12113_12148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 8))
{var inst_12064 = (state_12104[8]);var inst_12063 = (state_12104[10]);var inst_12066 = (inst_12064 < inst_12063);var inst_12067 = inst_12066;var state_12104__$1 = state_12104;if(cljs.core.truth_(inst_12067))
{var statearr_12114_12149 = state_12104__$1;(statearr_12114_12149[1] = 10);
} else
{var statearr_12115_12150 = state_12104__$1;(statearr_12115_12150[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 9))
{var inst_12097 = (state_12104[2]);var state_12104__$1 = (function (){var statearr_12116 = state_12104;(statearr_12116[12] = inst_12097);
return statearr_12116;
})();var statearr_12117_12151 = state_12104__$1;(statearr_12117_12151[2] = null);
(statearr_12117_12151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 10))
{var inst_12064 = (state_12104[8]);var inst_12062 = (state_12104[11]);var inst_12069 = cljs.core._nth.call(null,inst_12062,inst_12064);var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12104__$1,13,out,inst_12069);
} else
{if((state_val_12105 === 11))
{var inst_12061 = (state_12104[9]);var inst_12075 = (state_12104[13]);var inst_12075__$1 = cljs.core.seq.call(null,inst_12061);var state_12104__$1 = (function (){var statearr_12121 = state_12104;(statearr_12121[13] = inst_12075__$1);
return statearr_12121;
})();if(inst_12075__$1)
{var statearr_12122_12152 = state_12104__$1;(statearr_12122_12152[1] = 14);
} else
{var statearr_12123_12153 = state_12104__$1;(statearr_12123_12153[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 12))
{var inst_12095 = (state_12104[2]);var state_12104__$1 = state_12104;var statearr_12124_12154 = state_12104__$1;(statearr_12124_12154[2] = inst_12095);
(statearr_12124_12154[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 13))
{var inst_12064 = (state_12104[8]);var inst_12061 = (state_12104[9]);var inst_12063 = (state_12104[10]);var inst_12062 = (state_12104[11]);var inst_12071 = (state_12104[2]);var inst_12072 = (inst_12064 + 1);var tmp12118 = inst_12061;var tmp12119 = inst_12063;var tmp12120 = inst_12062;var inst_12061__$1 = tmp12118;var inst_12062__$1 = tmp12120;var inst_12063__$1 = tmp12119;var inst_12064__$1 = inst_12072;var state_12104__$1 = (function (){var statearr_12125 = state_12104;(statearr_12125[8] = inst_12064__$1);
(statearr_12125[9] = inst_12061__$1);
(statearr_12125[10] = inst_12063__$1);
(statearr_12125[11] = inst_12062__$1);
(statearr_12125[14] = inst_12071);
return statearr_12125;
})();var statearr_12126_12155 = state_12104__$1;(statearr_12126_12155[2] = null);
(statearr_12126_12155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 14))
{var inst_12075 = (state_12104[13]);var inst_12077 = cljs.core.chunked_seq_QMARK_.call(null,inst_12075);var state_12104__$1 = state_12104;if(inst_12077)
{var statearr_12127_12156 = state_12104__$1;(statearr_12127_12156[1] = 17);
} else
{var statearr_12128_12157 = state_12104__$1;(statearr_12128_12157[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 15))
{var state_12104__$1 = state_12104;var statearr_12129_12158 = state_12104__$1;(statearr_12129_12158[2] = null);
(statearr_12129_12158[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 16))
{var inst_12093 = (state_12104[2]);var state_12104__$1 = state_12104;var statearr_12130_12159 = state_12104__$1;(statearr_12130_12159[2] = inst_12093);
(statearr_12130_12159[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 17))
{var inst_12075 = (state_12104[13]);var inst_12079 = cljs.core.chunk_first.call(null,inst_12075);var inst_12080 = cljs.core.chunk_rest.call(null,inst_12075);var inst_12081 = cljs.core.count.call(null,inst_12079);var inst_12061 = inst_12080;var inst_12062 = inst_12079;var inst_12063 = inst_12081;var inst_12064 = 0;var state_12104__$1 = (function (){var statearr_12131 = state_12104;(statearr_12131[8] = inst_12064);
(statearr_12131[9] = inst_12061);
(statearr_12131[10] = inst_12063);
(statearr_12131[11] = inst_12062);
return statearr_12131;
})();var statearr_12132_12160 = state_12104__$1;(statearr_12132_12160[2] = null);
(statearr_12132_12160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 18))
{var inst_12075 = (state_12104[13]);var inst_12084 = cljs.core.first.call(null,inst_12075);var state_12104__$1 = state_12104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12104__$1,20,out,inst_12084);
} else
{if((state_val_12105 === 19))
{var inst_12090 = (state_12104[2]);var state_12104__$1 = state_12104;var statearr_12133_12161 = state_12104__$1;(statearr_12133_12161[2] = inst_12090);
(statearr_12133_12161[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12105 === 20))
{var inst_12075 = (state_12104[13]);var inst_12086 = (state_12104[2]);var inst_12087 = cljs.core.next.call(null,inst_12075);var inst_12061 = inst_12087;var inst_12062 = null;var inst_12063 = 0;var inst_12064 = 0;var state_12104__$1 = (function (){var statearr_12134 = state_12104;(statearr_12134[8] = inst_12064);
(statearr_12134[9] = inst_12061);
(statearr_12134[10] = inst_12063);
(statearr_12134[11] = inst_12062);
(statearr_12134[15] = inst_12086);
return statearr_12134;
})();var statearr_12135_12162 = state_12104__$1;(statearr_12135_12162[2] = null);
(statearr_12135_12162[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12139[0] = state_machine__5507__auto__);
(statearr_12139[1] = 1);
return statearr_12139;
});
var state_machine__5507__auto____1 = (function (state_12104){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12140){if((e12140 instanceof Object))
{var ex__5510__auto__ = e12140;var statearr_12141_12163 = state_12104;(statearr_12141_12163[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12164 = state_12104;
state_12104 = G__12164;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12104){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12142 = f__5522__auto__.call(null);(statearr_12142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12142;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12224){var state_val_12225 = (state_12224[1]);if((state_val_12225 === 1))
{var state_12224__$1 = state_12224;var statearr_12226_12246 = state_12224__$1;(statearr_12226_12246[2] = null);
(statearr_12226_12246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 2))
{var state_12224__$1 = state_12224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12224__$1,4,from);
} else
{if((state_val_12225 === 3))
{var inst_12222 = (state_12224[2]);var state_12224__$1 = state_12224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12224__$1,inst_12222);
} else
{if((state_val_12225 === 4))
{var inst_12207 = (state_12224[7]);var inst_12207__$1 = (state_12224[2]);var inst_12208 = (inst_12207__$1 == null);var state_12224__$1 = (function (){var statearr_12227 = state_12224;(statearr_12227[7] = inst_12207__$1);
return statearr_12227;
})();if(cljs.core.truth_(inst_12208))
{var statearr_12228_12247 = state_12224__$1;(statearr_12228_12247[1] = 5);
} else
{var statearr_12229_12248 = state_12224__$1;(statearr_12229_12248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 5))
{var state_12224__$1 = state_12224;if(cljs.core.truth_(close_QMARK_))
{var statearr_12230_12249 = state_12224__$1;(statearr_12230_12249[1] = 8);
} else
{var statearr_12231_12250 = state_12224__$1;(statearr_12231_12250[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 6))
{var inst_12207 = (state_12224[7]);var state_12224__$1 = state_12224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12224__$1,11,to,inst_12207);
} else
{if((state_val_12225 === 7))
{var inst_12220 = (state_12224[2]);var state_12224__$1 = state_12224;var statearr_12232_12251 = state_12224__$1;(statearr_12232_12251[2] = inst_12220);
(statearr_12232_12251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 8))
{var inst_12211 = cljs.core.async.close_BANG_.call(null,to);var state_12224__$1 = state_12224;var statearr_12233_12252 = state_12224__$1;(statearr_12233_12252[2] = inst_12211);
(statearr_12233_12252[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 9))
{var state_12224__$1 = state_12224;var statearr_12234_12253 = state_12224__$1;(statearr_12234_12253[2] = null);
(statearr_12234_12253[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 10))
{var inst_12214 = (state_12224[2]);var state_12224__$1 = state_12224;var statearr_12235_12254 = state_12224__$1;(statearr_12235_12254[2] = inst_12214);
(statearr_12235_12254[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12225 === 11))
{var inst_12217 = (state_12224[2]);var state_12224__$1 = (function (){var statearr_12236 = state_12224;(statearr_12236[8] = inst_12217);
return statearr_12236;
})();var statearr_12237_12255 = state_12224__$1;(statearr_12237_12255[2] = null);
(statearr_12237_12255[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12241 = [null,null,null,null,null,null,null,null,null];(statearr_12241[0] = state_machine__5507__auto__);
(statearr_12241[1] = 1);
return statearr_12241;
});
var state_machine__5507__auto____1 = (function (state_12224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12242){if((e12242 instanceof Object))
{var ex__5510__auto__ = e12242;var statearr_12243_12256 = state_12224;(statearr_12243_12256[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12257 = state_12224;
state_12224 = G__12257;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12244 = f__5522__auto__.call(null);(statearr_12244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12245);
return statearr_12244;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12322){var state_val_12323 = (state_12322[1]);if((state_val_12323 === 1))
{var state_12322__$1 = state_12322;var statearr_12324_12345 = state_12322__$1;(statearr_12324_12345[2] = null);
(statearr_12324_12345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 2))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,4,ch);
} else
{if((state_val_12323 === 3))
{var inst_12320 = (state_12322[2]);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === 4))
{var inst_12303 = (state_12322[7]);var inst_12303__$1 = (state_12322[2]);var inst_12304 = (inst_12303__$1 == null);var state_12322__$1 = (function (){var statearr_12325 = state_12322;(statearr_12325[7] = inst_12303__$1);
return statearr_12325;
})();if(cljs.core.truth_(inst_12304))
{var statearr_12326_12346 = state_12322__$1;(statearr_12326_12346[1] = 5);
} else
{var statearr_12327_12347 = state_12322__$1;(statearr_12327_12347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 5))
{var inst_12306 = cljs.core.async.close_BANG_.call(null,tc);var inst_12307 = cljs.core.async.close_BANG_.call(null,fc);var state_12322__$1 = (function (){var statearr_12328 = state_12322;(statearr_12328[8] = inst_12306);
return statearr_12328;
})();var statearr_12329_12348 = state_12322__$1;(statearr_12329_12348[2] = inst_12307);
(statearr_12329_12348[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 6))
{var inst_12303 = (state_12322[7]);var inst_12309 = p.call(null,inst_12303);var state_12322__$1 = state_12322;if(cljs.core.truth_(inst_12309))
{var statearr_12330_12349 = state_12322__$1;(statearr_12330_12349[1] = 9);
} else
{var statearr_12331_12350 = state_12322__$1;(statearr_12331_12350[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 7))
{var inst_12318 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12332_12351 = state_12322__$1;(statearr_12332_12351[2] = inst_12318);
(statearr_12332_12351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 8))
{var inst_12315 = (state_12322[2]);var state_12322__$1 = (function (){var statearr_12333 = state_12322;(statearr_12333[9] = inst_12315);
return statearr_12333;
})();var statearr_12334_12352 = state_12322__$1;(statearr_12334_12352[2] = null);
(statearr_12334_12352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 9))
{var state_12322__$1 = state_12322;var statearr_12335_12353 = state_12322__$1;(statearr_12335_12353[2] = tc);
(statearr_12335_12353[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 10))
{var state_12322__$1 = state_12322;var statearr_12336_12354 = state_12322__$1;(statearr_12336_12354[2] = fc);
(statearr_12336_12354[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 11))
{var inst_12303 = (state_12322[7]);var inst_12313 = (state_12322[2]);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12322__$1,8,inst_12313,inst_12303);
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
var state_machine__5507__auto____0 = (function (){var statearr_12340 = [null,null,null,null,null,null,null,null,null,null];(statearr_12340[0] = state_machine__5507__auto__);
(statearr_12340[1] = 1);
return statearr_12340;
});
var state_machine__5507__auto____1 = (function (state_12322){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12341){if((e12341 instanceof Object))
{var ex__5510__auto__ = e12341;var statearr_12342_12355 = state_12322;(statearr_12342_12355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12356 = state_12322;
state_12322 = G__12356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12343 = f__5522__auto__.call(null);(statearr_12343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12344);
return statearr_12343;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12403){var state_val_12404 = (state_12403[1]);if((state_val_12404 === 7))
{var inst_12399 = (state_12403[2]);var state_12403__$1 = state_12403;var statearr_12405_12421 = state_12403__$1;(statearr_12405_12421[2] = inst_12399);
(statearr_12405_12421[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 6))
{var inst_12389 = (state_12403[7]);var inst_12392 = (state_12403[8]);var inst_12396 = f.call(null,inst_12389,inst_12392);var inst_12389__$1 = inst_12396;var state_12403__$1 = (function (){var statearr_12406 = state_12403;(statearr_12406[7] = inst_12389__$1);
return statearr_12406;
})();var statearr_12407_12422 = state_12403__$1;(statearr_12407_12422[2] = null);
(statearr_12407_12422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 5))
{var inst_12389 = (state_12403[7]);var state_12403__$1 = state_12403;var statearr_12408_12423 = state_12403__$1;(statearr_12408_12423[2] = inst_12389);
(statearr_12408_12423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 4))
{var inst_12392 = (state_12403[8]);var inst_12392__$1 = (state_12403[2]);var inst_12393 = (inst_12392__$1 == null);var state_12403__$1 = (function (){var statearr_12409 = state_12403;(statearr_12409[8] = inst_12392__$1);
return statearr_12409;
})();if(cljs.core.truth_(inst_12393))
{var statearr_12410_12424 = state_12403__$1;(statearr_12410_12424[1] = 5);
} else
{var statearr_12411_12425 = state_12403__$1;(statearr_12411_12425[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12404 === 3))
{var inst_12401 = (state_12403[2]);var state_12403__$1 = state_12403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12403__$1,inst_12401);
} else
{if((state_val_12404 === 2))
{var state_12403__$1 = state_12403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12403__$1,4,ch);
} else
{if((state_val_12404 === 1))
{var inst_12389 = init;var state_12403__$1 = (function (){var statearr_12412 = state_12403;(statearr_12412[7] = inst_12389);
return statearr_12412;
})();var statearr_12413_12426 = state_12403__$1;(statearr_12413_12426[2] = null);
(statearr_12413_12426[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12417 = [null,null,null,null,null,null,null,null,null];(statearr_12417[0] = state_machine__5507__auto__);
(statearr_12417[1] = 1);
return statearr_12417;
});
var state_machine__5507__auto____1 = (function (state_12403){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12418){if((e12418 instanceof Object))
{var ex__5510__auto__ = e12418;var statearr_12419_12427 = state_12403;(statearr_12419_12427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12428 = state_12403;
state_12403 = G__12428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12403){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12420 = f__5522__auto__.call(null);(statearr_12420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12420;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12490){var state_val_12491 = (state_12490[1]);if((state_val_12491 === 1))
{var inst_12470 = cljs.core.seq.call(null,coll);var inst_12471 = inst_12470;var state_12490__$1 = (function (){var statearr_12492 = state_12490;(statearr_12492[7] = inst_12471);
return statearr_12492;
})();var statearr_12493_12511 = state_12490__$1;(statearr_12493_12511[2] = null);
(statearr_12493_12511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 2))
{var inst_12471 = (state_12490[7]);var state_12490__$1 = state_12490;if(cljs.core.truth_(inst_12471))
{var statearr_12494_12512 = state_12490__$1;(statearr_12494_12512[1] = 4);
} else
{var statearr_12495_12513 = state_12490__$1;(statearr_12495_12513[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 3))
{var inst_12488 = (state_12490[2]);var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12490__$1,inst_12488);
} else
{if((state_val_12491 === 4))
{var inst_12471 = (state_12490[7]);var inst_12474 = cljs.core.first.call(null,inst_12471);var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12490__$1,7,ch,inst_12474);
} else
{if((state_val_12491 === 5))
{var state_12490__$1 = state_12490;if(cljs.core.truth_(close_QMARK_))
{var statearr_12496_12514 = state_12490__$1;(statearr_12496_12514[1] = 8);
} else
{var statearr_12497_12515 = state_12490__$1;(statearr_12497_12515[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 6))
{var inst_12486 = (state_12490[2]);var state_12490__$1 = state_12490;var statearr_12498_12516 = state_12490__$1;(statearr_12498_12516[2] = inst_12486);
(statearr_12498_12516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 7))
{var inst_12471 = (state_12490[7]);var inst_12476 = (state_12490[2]);var inst_12477 = cljs.core.next.call(null,inst_12471);var inst_12471__$1 = inst_12477;var state_12490__$1 = (function (){var statearr_12499 = state_12490;(statearr_12499[8] = inst_12476);
(statearr_12499[7] = inst_12471__$1);
return statearr_12499;
})();var statearr_12500_12517 = state_12490__$1;(statearr_12500_12517[2] = null);
(statearr_12500_12517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 8))
{var inst_12481 = cljs.core.async.close_BANG_.call(null,ch);var state_12490__$1 = state_12490;var statearr_12501_12518 = state_12490__$1;(statearr_12501_12518[2] = inst_12481);
(statearr_12501_12518[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 9))
{var state_12490__$1 = state_12490;var statearr_12502_12519 = state_12490__$1;(statearr_12502_12519[2] = null);
(statearr_12502_12519[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12491 === 10))
{var inst_12484 = (state_12490[2]);var state_12490__$1 = state_12490;var statearr_12503_12520 = state_12490__$1;(statearr_12503_12520[2] = inst_12484);
(statearr_12503_12520[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12507 = [null,null,null,null,null,null,null,null,null];(statearr_12507[0] = state_machine__5507__auto__);
(statearr_12507[1] = 1);
return statearr_12507;
});
var state_machine__5507__auto____1 = (function (state_12490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12508){if((e12508 instanceof Object))
{var ex__5510__auto__ = e12508;var statearr_12509_12521 = state_12490;(statearr_12509_12521[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12522 = state_12490;
state_12490 = G__12522;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12510 = f__5522__auto__.call(null);(statearr_12510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12510;
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
cljs.core.async.Mux = (function (){var obj12524 = {};return obj12524;
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
cljs.core.async.Mult = (function (){var obj12526 = {};return obj12526;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12750 = (function (cs,ch,mult,meta12751){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12751 = meta12751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12750.cljs$lang$type = true;
cljs.core.async.t12750.cljs$lang$ctorStr = "cljs.core.async/t12750";
cljs.core.async.t12750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12750");
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12752){var self__ = this;
var _12752__$1 = this;return self__.meta12751;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12752,meta12751__$1){var self__ = this;
var _12752__$1 = this;return (new cljs.core.async.t12750(self__.cs,self__.ch,self__.mult,meta12751__$1));
});})(cs))
;
cljs.core.async.__GT_t12750 = ((function (cs){
return (function __GT_t12750(cs__$1,ch__$1,mult__$1,meta12751){return (new cljs.core.async.t12750(cs__$1,ch__$1,mult__$1,meta12751));
});})(cs))
;
}
return (new cljs.core.async.t12750(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___12973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12887){var state_val_12888 = (state_12887[1]);if((state_val_12888 === 32))
{var inst_12831 = (state_12887[7]);var inst_12755 = (state_12887[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12887,31,Object,null,30);var inst_12838 = cljs.core.async.put_BANG_.call(null,inst_12831,inst_12755,done);var state_12887__$1 = state_12887;var statearr_12889_12974 = state_12887__$1;(statearr_12889_12974[2] = inst_12838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 1))
{var state_12887__$1 = state_12887;var statearr_12890_12975 = state_12887__$1;(statearr_12890_12975[2] = null);
(statearr_12890_12975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 33))
{var inst_12844 = (state_12887[9]);var inst_12846 = cljs.core.chunked_seq_QMARK_.call(null,inst_12844);var state_12887__$1 = state_12887;if(inst_12846)
{var statearr_12891_12976 = state_12887__$1;(statearr_12891_12976[1] = 36);
} else
{var statearr_12892_12977 = state_12887__$1;(statearr_12892_12977[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 2))
{var state_12887__$1 = state_12887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12887__$1,4,ch);
} else
{if((state_val_12888 === 34))
{var state_12887__$1 = state_12887;var statearr_12893_12978 = state_12887__$1;(statearr_12893_12978[2] = null);
(statearr_12893_12978[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 3))
{var inst_12885 = (state_12887[2]);var state_12887__$1 = state_12887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12887__$1,inst_12885);
} else
{if((state_val_12888 === 35))
{var inst_12869 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12894_12979 = state_12887__$1;(statearr_12894_12979[2] = inst_12869);
(statearr_12894_12979[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 4))
{var inst_12755 = (state_12887[8]);var inst_12755__$1 = (state_12887[2]);var inst_12756 = (inst_12755__$1 == null);var state_12887__$1 = (function (){var statearr_12895 = state_12887;(statearr_12895[8] = inst_12755__$1);
return statearr_12895;
})();if(cljs.core.truth_(inst_12756))
{var statearr_12896_12980 = state_12887__$1;(statearr_12896_12980[1] = 5);
} else
{var statearr_12897_12981 = state_12887__$1;(statearr_12897_12981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 36))
{var inst_12844 = (state_12887[9]);var inst_12848 = cljs.core.chunk_first.call(null,inst_12844);var inst_12849 = cljs.core.chunk_rest.call(null,inst_12844);var inst_12850 = cljs.core.count.call(null,inst_12848);var inst_12823 = inst_12849;var inst_12824 = inst_12848;var inst_12825 = inst_12850;var inst_12826 = 0;var state_12887__$1 = (function (){var statearr_12898 = state_12887;(statearr_12898[10] = inst_12823);
(statearr_12898[11] = inst_12825);
(statearr_12898[12] = inst_12824);
(statearr_12898[13] = inst_12826);
return statearr_12898;
})();var statearr_12899_12982 = state_12887__$1;(statearr_12899_12982[2] = null);
(statearr_12899_12982[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 5))
{var inst_12762 = cljs.core.deref.call(null,cs);var inst_12763 = cljs.core.seq.call(null,inst_12762);var inst_12764 = inst_12763;var inst_12765 = null;var inst_12766 = 0;var inst_12767 = 0;var state_12887__$1 = (function (){var statearr_12900 = state_12887;(statearr_12900[14] = inst_12765);
(statearr_12900[15] = inst_12766);
(statearr_12900[16] = inst_12767);
(statearr_12900[17] = inst_12764);
return statearr_12900;
})();var statearr_12901_12983 = state_12887__$1;(statearr_12901_12983[2] = null);
(statearr_12901_12983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 37))
{var inst_12844 = (state_12887[9]);var inst_12853 = cljs.core.first.call(null,inst_12844);var state_12887__$1 = (function (){var statearr_12902 = state_12887;(statearr_12902[18] = inst_12853);
return statearr_12902;
})();var statearr_12903_12984 = state_12887__$1;(statearr_12903_12984[2] = null);
(statearr_12903_12984[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 6))
{var inst_12815 = (state_12887[19]);var inst_12814 = cljs.core.deref.call(null,cs);var inst_12815__$1 = cljs.core.keys.call(null,inst_12814);var inst_12816 = cljs.core.count.call(null,inst_12815__$1);var inst_12817 = cljs.core.reset_BANG_.call(null,dctr,inst_12816);var inst_12822 = cljs.core.seq.call(null,inst_12815__$1);var inst_12823 = inst_12822;var inst_12824 = null;var inst_12825 = 0;var inst_12826 = 0;var state_12887__$1 = (function (){var statearr_12904 = state_12887;(statearr_12904[10] = inst_12823);
(statearr_12904[19] = inst_12815__$1);
(statearr_12904[20] = inst_12817);
(statearr_12904[11] = inst_12825);
(statearr_12904[12] = inst_12824);
(statearr_12904[13] = inst_12826);
return statearr_12904;
})();var statearr_12905_12985 = state_12887__$1;(statearr_12905_12985[2] = null);
(statearr_12905_12985[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 38))
{var inst_12866 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12906_12986 = state_12887__$1;(statearr_12906_12986[2] = inst_12866);
(statearr_12906_12986[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 7))
{var inst_12883 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12907_12987 = state_12887__$1;(statearr_12907_12987[2] = inst_12883);
(statearr_12907_12987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 39))
{var inst_12844 = (state_12887[9]);var inst_12862 = (state_12887[2]);var inst_12863 = cljs.core.next.call(null,inst_12844);var inst_12823 = inst_12863;var inst_12824 = null;var inst_12825 = 0;var inst_12826 = 0;var state_12887__$1 = (function (){var statearr_12908 = state_12887;(statearr_12908[10] = inst_12823);
(statearr_12908[21] = inst_12862);
(statearr_12908[11] = inst_12825);
(statearr_12908[12] = inst_12824);
(statearr_12908[13] = inst_12826);
return statearr_12908;
})();var statearr_12909_12988 = state_12887__$1;(statearr_12909_12988[2] = null);
(statearr_12909_12988[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 8))
{var inst_12766 = (state_12887[15]);var inst_12767 = (state_12887[16]);var inst_12769 = (inst_12767 < inst_12766);var inst_12770 = inst_12769;var state_12887__$1 = state_12887;if(cljs.core.truth_(inst_12770))
{var statearr_12910_12989 = state_12887__$1;(statearr_12910_12989[1] = 10);
} else
{var statearr_12911_12990 = state_12887__$1;(statearr_12911_12990[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 40))
{var inst_12853 = (state_12887[18]);var inst_12854 = (state_12887[2]);var inst_12855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12856 = cljs.core.async.untap_STAR_.call(null,m,inst_12853);var state_12887__$1 = (function (){var statearr_12912 = state_12887;(statearr_12912[22] = inst_12854);
(statearr_12912[23] = inst_12855);
return statearr_12912;
})();var statearr_12913_12991 = state_12887__$1;(statearr_12913_12991[2] = inst_12856);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 9))
{var inst_12812 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12914_12992 = state_12887__$1;(statearr_12914_12992[2] = inst_12812);
(statearr_12914_12992[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 41))
{var inst_12853 = (state_12887[18]);var inst_12755 = (state_12887[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12887,40,Object,null,39);var inst_12860 = cljs.core.async.put_BANG_.call(null,inst_12853,inst_12755,done);var state_12887__$1 = state_12887;var statearr_12915_12993 = state_12887__$1;(statearr_12915_12993[2] = inst_12860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 10))
{var inst_12765 = (state_12887[14]);var inst_12767 = (state_12887[16]);var inst_12773 = cljs.core._nth.call(null,inst_12765,inst_12767);var inst_12774 = cljs.core.nth.call(null,inst_12773,0,null);var inst_12775 = cljs.core.nth.call(null,inst_12773,1,null);var state_12887__$1 = (function (){var statearr_12916 = state_12887;(statearr_12916[24] = inst_12774);
return statearr_12916;
})();if(cljs.core.truth_(inst_12775))
{var statearr_12917_12994 = state_12887__$1;(statearr_12917_12994[1] = 13);
} else
{var statearr_12918_12995 = state_12887__$1;(statearr_12918_12995[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 42))
{var state_12887__$1 = state_12887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12887__$1,45,dchan);
} else
{if((state_val_12888 === 11))
{var inst_12784 = (state_12887[25]);var inst_12764 = (state_12887[17]);var inst_12784__$1 = cljs.core.seq.call(null,inst_12764);var state_12887__$1 = (function (){var statearr_12919 = state_12887;(statearr_12919[25] = inst_12784__$1);
return statearr_12919;
})();if(inst_12784__$1)
{var statearr_12920_12996 = state_12887__$1;(statearr_12920_12996[1] = 16);
} else
{var statearr_12921_12997 = state_12887__$1;(statearr_12921_12997[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 43))
{var state_12887__$1 = state_12887;var statearr_12922_12998 = state_12887__$1;(statearr_12922_12998[2] = null);
(statearr_12922_12998[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 12))
{var inst_12810 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12923_12999 = state_12887__$1;(statearr_12923_12999[2] = inst_12810);
(statearr_12923_12999[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 44))
{var inst_12880 = (state_12887[2]);var state_12887__$1 = (function (){var statearr_12924 = state_12887;(statearr_12924[26] = inst_12880);
return statearr_12924;
})();var statearr_12925_13000 = state_12887__$1;(statearr_12925_13000[2] = null);
(statearr_12925_13000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 13))
{var inst_12774 = (state_12887[24]);var inst_12777 = cljs.core.async.close_BANG_.call(null,inst_12774);var state_12887__$1 = state_12887;var statearr_12926_13001 = state_12887__$1;(statearr_12926_13001[2] = inst_12777);
(statearr_12926_13001[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 45))
{var inst_12877 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12930_13002 = state_12887__$1;(statearr_12930_13002[2] = inst_12877);
(statearr_12930_13002[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 14))
{var state_12887__$1 = state_12887;var statearr_12931_13003 = state_12887__$1;(statearr_12931_13003[2] = null);
(statearr_12931_13003[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 15))
{var inst_12765 = (state_12887[14]);var inst_12766 = (state_12887[15]);var inst_12767 = (state_12887[16]);var inst_12764 = (state_12887[17]);var inst_12780 = (state_12887[2]);var inst_12781 = (inst_12767 + 1);var tmp12927 = inst_12765;var tmp12928 = inst_12766;var tmp12929 = inst_12764;var inst_12764__$1 = tmp12929;var inst_12765__$1 = tmp12927;var inst_12766__$1 = tmp12928;var inst_12767__$1 = inst_12781;var state_12887__$1 = (function (){var statearr_12932 = state_12887;(statearr_12932[27] = inst_12780);
(statearr_12932[14] = inst_12765__$1);
(statearr_12932[15] = inst_12766__$1);
(statearr_12932[16] = inst_12767__$1);
(statearr_12932[17] = inst_12764__$1);
return statearr_12932;
})();var statearr_12933_13004 = state_12887__$1;(statearr_12933_13004[2] = null);
(statearr_12933_13004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 16))
{var inst_12784 = (state_12887[25]);var inst_12786 = cljs.core.chunked_seq_QMARK_.call(null,inst_12784);var state_12887__$1 = state_12887;if(inst_12786)
{var statearr_12934_13005 = state_12887__$1;(statearr_12934_13005[1] = 19);
} else
{var statearr_12935_13006 = state_12887__$1;(statearr_12935_13006[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 17))
{var state_12887__$1 = state_12887;var statearr_12936_13007 = state_12887__$1;(statearr_12936_13007[2] = null);
(statearr_12936_13007[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 18))
{var inst_12808 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12937_13008 = state_12887__$1;(statearr_12937_13008[2] = inst_12808);
(statearr_12937_13008[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 19))
{var inst_12784 = (state_12887[25]);var inst_12788 = cljs.core.chunk_first.call(null,inst_12784);var inst_12789 = cljs.core.chunk_rest.call(null,inst_12784);var inst_12790 = cljs.core.count.call(null,inst_12788);var inst_12764 = inst_12789;var inst_12765 = inst_12788;var inst_12766 = inst_12790;var inst_12767 = 0;var state_12887__$1 = (function (){var statearr_12938 = state_12887;(statearr_12938[14] = inst_12765);
(statearr_12938[15] = inst_12766);
(statearr_12938[16] = inst_12767);
(statearr_12938[17] = inst_12764);
return statearr_12938;
})();var statearr_12939_13009 = state_12887__$1;(statearr_12939_13009[2] = null);
(statearr_12939_13009[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 20))
{var inst_12784 = (state_12887[25]);var inst_12794 = cljs.core.first.call(null,inst_12784);var inst_12795 = cljs.core.nth.call(null,inst_12794,0,null);var inst_12796 = cljs.core.nth.call(null,inst_12794,1,null);var state_12887__$1 = (function (){var statearr_12940 = state_12887;(statearr_12940[28] = inst_12795);
return statearr_12940;
})();if(cljs.core.truth_(inst_12796))
{var statearr_12941_13010 = state_12887__$1;(statearr_12941_13010[1] = 22);
} else
{var statearr_12942_13011 = state_12887__$1;(statearr_12942_13011[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 21))
{var inst_12805 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12943_13012 = state_12887__$1;(statearr_12943_13012[2] = inst_12805);
(statearr_12943_13012[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 22))
{var inst_12795 = (state_12887[28]);var inst_12798 = cljs.core.async.close_BANG_.call(null,inst_12795);var state_12887__$1 = state_12887;var statearr_12944_13013 = state_12887__$1;(statearr_12944_13013[2] = inst_12798);
(statearr_12944_13013[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 23))
{var state_12887__$1 = state_12887;var statearr_12945_13014 = state_12887__$1;(statearr_12945_13014[2] = null);
(statearr_12945_13014[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 24))
{var inst_12784 = (state_12887[25]);var inst_12801 = (state_12887[2]);var inst_12802 = cljs.core.next.call(null,inst_12784);var inst_12764 = inst_12802;var inst_12765 = null;var inst_12766 = 0;var inst_12767 = 0;var state_12887__$1 = (function (){var statearr_12946 = state_12887;(statearr_12946[14] = inst_12765);
(statearr_12946[15] = inst_12766);
(statearr_12946[16] = inst_12767);
(statearr_12946[29] = inst_12801);
(statearr_12946[17] = inst_12764);
return statearr_12946;
})();var statearr_12947_13015 = state_12887__$1;(statearr_12947_13015[2] = null);
(statearr_12947_13015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 25))
{var inst_12825 = (state_12887[11]);var inst_12826 = (state_12887[13]);var inst_12828 = (inst_12826 < inst_12825);var inst_12829 = inst_12828;var state_12887__$1 = state_12887;if(cljs.core.truth_(inst_12829))
{var statearr_12948_13016 = state_12887__$1;(statearr_12948_13016[1] = 27);
} else
{var statearr_12949_13017 = state_12887__$1;(statearr_12949_13017[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 26))
{var inst_12815 = (state_12887[19]);var inst_12873 = (state_12887[2]);var inst_12874 = cljs.core.seq.call(null,inst_12815);var state_12887__$1 = (function (){var statearr_12950 = state_12887;(statearr_12950[30] = inst_12873);
return statearr_12950;
})();if(inst_12874)
{var statearr_12951_13018 = state_12887__$1;(statearr_12951_13018[1] = 42);
} else
{var statearr_12952_13019 = state_12887__$1;(statearr_12952_13019[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 27))
{var inst_12824 = (state_12887[12]);var inst_12826 = (state_12887[13]);var inst_12831 = cljs.core._nth.call(null,inst_12824,inst_12826);var state_12887__$1 = (function (){var statearr_12953 = state_12887;(statearr_12953[7] = inst_12831);
return statearr_12953;
})();var statearr_12954_13020 = state_12887__$1;(statearr_12954_13020[2] = null);
(statearr_12954_13020[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 28))
{var inst_12823 = (state_12887[10]);var inst_12844 = (state_12887[9]);var inst_12844__$1 = cljs.core.seq.call(null,inst_12823);var state_12887__$1 = (function (){var statearr_12958 = state_12887;(statearr_12958[9] = inst_12844__$1);
return statearr_12958;
})();if(inst_12844__$1)
{var statearr_12959_13021 = state_12887__$1;(statearr_12959_13021[1] = 33);
} else
{var statearr_12960_13022 = state_12887__$1;(statearr_12960_13022[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 29))
{var inst_12871 = (state_12887[2]);var state_12887__$1 = state_12887;var statearr_12961_13023 = state_12887__$1;(statearr_12961_13023[2] = inst_12871);
(statearr_12961_13023[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 30))
{var inst_12823 = (state_12887[10]);var inst_12825 = (state_12887[11]);var inst_12824 = (state_12887[12]);var inst_12826 = (state_12887[13]);var inst_12840 = (state_12887[2]);var inst_12841 = (inst_12826 + 1);var tmp12955 = inst_12823;var tmp12956 = inst_12825;var tmp12957 = inst_12824;var inst_12823__$1 = tmp12955;var inst_12824__$1 = tmp12957;var inst_12825__$1 = tmp12956;var inst_12826__$1 = inst_12841;var state_12887__$1 = (function (){var statearr_12962 = state_12887;(statearr_12962[10] = inst_12823__$1);
(statearr_12962[11] = inst_12825__$1);
(statearr_12962[12] = inst_12824__$1);
(statearr_12962[13] = inst_12826__$1);
(statearr_12962[31] = inst_12840);
return statearr_12962;
})();var statearr_12963_13024 = state_12887__$1;(statearr_12963_13024[2] = null);
(statearr_12963_13024[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12888 === 31))
{var inst_12831 = (state_12887[7]);var inst_12832 = (state_12887[2]);var inst_12833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12834 = cljs.core.async.untap_STAR_.call(null,m,inst_12831);var state_12887__$1 = (function (){var statearr_12964 = state_12887;(statearr_12964[32] = inst_12832);
(statearr_12964[33] = inst_12833);
return statearr_12964;
})();var statearr_12965_13025 = state_12887__$1;(statearr_12965_13025[2] = inst_12834);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_12969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12969[0] = state_machine__5507__auto__);
(statearr_12969[1] = 1);
return statearr_12969;
});
var state_machine__5507__auto____1 = (function (state_12887){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12970){if((e12970 instanceof Object))
{var ex__5510__auto__ = e12970;var statearr_12971_13026 = state_12887;(statearr_12971_13026[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13027 = state_12887;
state_12887 = G__13027;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12887){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12972 = f__5522__auto__.call(null);(statearr_12972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12973);
return statearr_12972;
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
cljs.core.async.Mix = (function (){var obj13029 = {};return obj13029;
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
;var m = (function (){if(typeof cljs.core.async.t13139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13139 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13140){
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
this.meta13140 = meta13140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13139.cljs$lang$type = true;
cljs.core.async.t13139.cljs$lang$ctorStr = "cljs.core.async/t13139";
cljs.core.async.t13139.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13139");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13141){var self__ = this;
var _13141__$1 = this;return self__.meta13140;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13141,meta13140__$1){var self__ = this;
var _13141__$1 = this;return (new cljs.core.async.t13139(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13140__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13139 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13140){return (new cljs.core.async.t13139(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13140));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13139(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13248 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13206){var state_val_13207 = (state_13206[1]);if((state_val_13207 === 1))
{var inst_13145 = (state_13206[7]);var inst_13145__$1 = calc_state.call(null);var inst_13146 = cljs.core.seq_QMARK_.call(null,inst_13145__$1);var state_13206__$1 = (function (){var statearr_13208 = state_13206;(statearr_13208[7] = inst_13145__$1);
return statearr_13208;
})();if(inst_13146)
{var statearr_13209_13249 = state_13206__$1;(statearr_13209_13249[1] = 2);
} else
{var statearr_13210_13250 = state_13206__$1;(statearr_13210_13250[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 2))
{var inst_13145 = (state_13206[7]);var inst_13148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13145);var state_13206__$1 = state_13206;var statearr_13211_13251 = state_13206__$1;(statearr_13211_13251[2] = inst_13148);
(statearr_13211_13251[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 3))
{var inst_13145 = (state_13206[7]);var state_13206__$1 = state_13206;var statearr_13212_13252 = state_13206__$1;(statearr_13212_13252[2] = inst_13145);
(statearr_13212_13252[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 4))
{var inst_13145 = (state_13206[7]);var inst_13151 = (state_13206[2]);var inst_13152 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13153 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13154 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13155 = inst_13145;var state_13206__$1 = (function (){var statearr_13213 = state_13206;(statearr_13213[8] = inst_13155);
(statearr_13213[9] = inst_13153);
(statearr_13213[10] = inst_13154);
(statearr_13213[11] = inst_13152);
return statearr_13213;
})();var statearr_13214_13253 = state_13206__$1;(statearr_13214_13253[2] = null);
(statearr_13214_13253[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 5))
{var inst_13155 = (state_13206[8]);var inst_13158 = cljs.core.seq_QMARK_.call(null,inst_13155);var state_13206__$1 = state_13206;if(inst_13158)
{var statearr_13215_13254 = state_13206__$1;(statearr_13215_13254[1] = 7);
} else
{var statearr_13216_13255 = state_13206__$1;(statearr_13216_13255[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 6))
{var inst_13204 = (state_13206[2]);var state_13206__$1 = state_13206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13206__$1,inst_13204);
} else
{if((state_val_13207 === 7))
{var inst_13155 = (state_13206[8]);var inst_13160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13155);var state_13206__$1 = state_13206;var statearr_13217_13256 = state_13206__$1;(statearr_13217_13256[2] = inst_13160);
(statearr_13217_13256[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 8))
{var inst_13155 = (state_13206[8]);var state_13206__$1 = state_13206;var statearr_13218_13257 = state_13206__$1;(statearr_13218_13257[2] = inst_13155);
(statearr_13218_13257[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 9))
{var inst_13163 = (state_13206[12]);var inst_13163__$1 = (state_13206[2]);var inst_13164 = cljs.core.get.call(null,inst_13163__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13165 = cljs.core.get.call(null,inst_13163__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13166 = cljs.core.get.call(null,inst_13163__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13206__$1 = (function (){var statearr_13219 = state_13206;(statearr_13219[13] = inst_13166);
(statearr_13219[14] = inst_13165);
(statearr_13219[12] = inst_13163__$1);
return statearr_13219;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13206__$1,10,inst_13164);
} else
{if((state_val_13207 === 10))
{var inst_13170 = (state_13206[15]);var inst_13171 = (state_13206[16]);var inst_13169 = (state_13206[2]);var inst_13170__$1 = cljs.core.nth.call(null,inst_13169,0,null);var inst_13171__$1 = cljs.core.nth.call(null,inst_13169,1,null);var inst_13172 = (inst_13170__$1 == null);var inst_13173 = cljs.core._EQ_.call(null,inst_13171__$1,change);var inst_13174 = (inst_13172) || (inst_13173);var state_13206__$1 = (function (){var statearr_13220 = state_13206;(statearr_13220[15] = inst_13170__$1);
(statearr_13220[16] = inst_13171__$1);
return statearr_13220;
})();if(cljs.core.truth_(inst_13174))
{var statearr_13221_13258 = state_13206__$1;(statearr_13221_13258[1] = 11);
} else
{var statearr_13222_13259 = state_13206__$1;(statearr_13222_13259[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 11))
{var inst_13170 = (state_13206[15]);var inst_13176 = (inst_13170 == null);var state_13206__$1 = state_13206;if(cljs.core.truth_(inst_13176))
{var statearr_13223_13260 = state_13206__$1;(statearr_13223_13260[1] = 14);
} else
{var statearr_13224_13261 = state_13206__$1;(statearr_13224_13261[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 12))
{var inst_13166 = (state_13206[13]);var inst_13171 = (state_13206[16]);var inst_13185 = (state_13206[17]);var inst_13185__$1 = inst_13166.call(null,inst_13171);var state_13206__$1 = (function (){var statearr_13225 = state_13206;(statearr_13225[17] = inst_13185__$1);
return statearr_13225;
})();if(cljs.core.truth_(inst_13185__$1))
{var statearr_13226_13262 = state_13206__$1;(statearr_13226_13262[1] = 17);
} else
{var statearr_13227_13263 = state_13206__$1;(statearr_13227_13263[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 13))
{var inst_13202 = (state_13206[2]);var state_13206__$1 = state_13206;var statearr_13228_13264 = state_13206__$1;(statearr_13228_13264[2] = inst_13202);
(statearr_13228_13264[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 14))
{var inst_13171 = (state_13206[16]);var inst_13178 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13171);var state_13206__$1 = state_13206;var statearr_13229_13265 = state_13206__$1;(statearr_13229_13265[2] = inst_13178);
(statearr_13229_13265[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 15))
{var state_13206__$1 = state_13206;var statearr_13230_13266 = state_13206__$1;(statearr_13230_13266[2] = null);
(statearr_13230_13266[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 16))
{var inst_13181 = (state_13206[2]);var inst_13182 = calc_state.call(null);var inst_13155 = inst_13182;var state_13206__$1 = (function (){var statearr_13231 = state_13206;(statearr_13231[8] = inst_13155);
(statearr_13231[18] = inst_13181);
return statearr_13231;
})();var statearr_13232_13267 = state_13206__$1;(statearr_13232_13267[2] = null);
(statearr_13232_13267[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 17))
{var inst_13185 = (state_13206[17]);var state_13206__$1 = state_13206;var statearr_13233_13268 = state_13206__$1;(statearr_13233_13268[2] = inst_13185);
(statearr_13233_13268[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 18))
{var inst_13166 = (state_13206[13]);var inst_13165 = (state_13206[14]);var inst_13171 = (state_13206[16]);var inst_13188 = cljs.core.empty_QMARK_.call(null,inst_13166);var inst_13189 = inst_13165.call(null,inst_13171);var inst_13190 = cljs.core.not.call(null,inst_13189);var inst_13191 = (inst_13188) && (inst_13190);var state_13206__$1 = state_13206;var statearr_13234_13269 = state_13206__$1;(statearr_13234_13269[2] = inst_13191);
(statearr_13234_13269[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 19))
{var inst_13193 = (state_13206[2]);var state_13206__$1 = state_13206;if(cljs.core.truth_(inst_13193))
{var statearr_13235_13270 = state_13206__$1;(statearr_13235_13270[1] = 20);
} else
{var statearr_13236_13271 = state_13206__$1;(statearr_13236_13271[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 20))
{var inst_13170 = (state_13206[15]);var state_13206__$1 = state_13206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13206__$1,23,out,inst_13170);
} else
{if((state_val_13207 === 21))
{var state_13206__$1 = state_13206;var statearr_13237_13272 = state_13206__$1;(statearr_13237_13272[2] = null);
(statearr_13237_13272[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 22))
{var inst_13163 = (state_13206[12]);var inst_13199 = (state_13206[2]);var inst_13155 = inst_13163;var state_13206__$1 = (function (){var statearr_13238 = state_13206;(statearr_13238[8] = inst_13155);
(statearr_13238[19] = inst_13199);
return statearr_13238;
})();var statearr_13239_13273 = state_13206__$1;(statearr_13239_13273[2] = null);
(statearr_13239_13273[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13207 === 23))
{var inst_13196 = (state_13206[2]);var state_13206__$1 = state_13206;var statearr_13240_13274 = state_13206__$1;(statearr_13240_13274[2] = inst_13196);
(statearr_13240_13274[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13244[0] = state_machine__5507__auto__);
(statearr_13244[1] = 1);
return statearr_13244;
});
var state_machine__5507__auto____1 = (function (state_13206){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13206);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13245){if((e13245 instanceof Object))
{var ex__5510__auto__ = e13245;var statearr_13246_13275 = state_13206;(statearr_13246_13275[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13276 = state_13206;
state_13206 = G__13276;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13206){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13247 = f__5522__auto__.call(null);(statearr_13247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13248);
return statearr_13247;
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
cljs.core.async.Pub = (function (){var obj13278 = {};return obj13278;
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
return (function (p1__13279_SHARP_){if(cljs.core.truth_(p1__13279_SHARP_.call(null,topic)))
{return p1__13279_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13279_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13404 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13405){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13405 = meta13405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13404.cljs$lang$type = true;
cljs.core.async.t13404.cljs$lang$ctorStr = "cljs.core.async/t13404";
cljs.core.async.t13404.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13404");
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13404.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13406){var self__ = this;
var _13406__$1 = this;return self__.meta13405;
});})(mults,ensure_mult))
;
cljs.core.async.t13404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13406,meta13405__$1){var self__ = this;
var _13406__$1 = this;return (new cljs.core.async.t13404(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13405__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13404 = ((function (mults,ensure_mult){
return (function __GT_t13404(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13405){return (new cljs.core.async.t13404(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13405));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13404(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13480){var state_val_13481 = (state_13480[1]);if((state_val_13481 === 1))
{var state_13480__$1 = state_13480;var statearr_13482_13529 = state_13480__$1;(statearr_13482_13529[2] = null);
(statearr_13482_13529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 2))
{var state_13480__$1 = state_13480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13480__$1,4,ch);
} else
{if((state_val_13481 === 3))
{var inst_13478 = (state_13480[2]);var state_13480__$1 = state_13480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13480__$1,inst_13478);
} else
{if((state_val_13481 === 4))
{var inst_13409 = (state_13480[7]);var inst_13409__$1 = (state_13480[2]);var inst_13410 = (inst_13409__$1 == null);var state_13480__$1 = (function (){var statearr_13483 = state_13480;(statearr_13483[7] = inst_13409__$1);
return statearr_13483;
})();if(cljs.core.truth_(inst_13410))
{var statearr_13484_13530 = state_13480__$1;(statearr_13484_13530[1] = 5);
} else
{var statearr_13485_13531 = state_13480__$1;(statearr_13485_13531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 5))
{var inst_13416 = cljs.core.deref.call(null,mults);var inst_13417 = cljs.core.vals.call(null,inst_13416);var inst_13418 = cljs.core.seq.call(null,inst_13417);var inst_13419 = inst_13418;var inst_13420 = null;var inst_13421 = 0;var inst_13422 = 0;var state_13480__$1 = (function (){var statearr_13486 = state_13480;(statearr_13486[8] = inst_13419);
(statearr_13486[9] = inst_13422);
(statearr_13486[10] = inst_13421);
(statearr_13486[11] = inst_13420);
return statearr_13486;
})();var statearr_13487_13532 = state_13480__$1;(statearr_13487_13532[2] = null);
(statearr_13487_13532[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 6))
{var inst_13409 = (state_13480[7]);var inst_13459 = (state_13480[12]);var inst_13457 = (state_13480[13]);var inst_13457__$1 = topic_fn.call(null,inst_13409);var inst_13458 = cljs.core.deref.call(null,mults);var inst_13459__$1 = cljs.core.get.call(null,inst_13458,inst_13457__$1);var state_13480__$1 = (function (){var statearr_13488 = state_13480;(statearr_13488[12] = inst_13459__$1);
(statearr_13488[13] = inst_13457__$1);
return statearr_13488;
})();if(cljs.core.truth_(inst_13459__$1))
{var statearr_13489_13533 = state_13480__$1;(statearr_13489_13533[1] = 19);
} else
{var statearr_13490_13534 = state_13480__$1;(statearr_13490_13534[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 7))
{var inst_13476 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13491_13535 = state_13480__$1;(statearr_13491_13535[2] = inst_13476);
(statearr_13491_13535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 8))
{var inst_13422 = (state_13480[9]);var inst_13421 = (state_13480[10]);var inst_13424 = (inst_13422 < inst_13421);var inst_13425 = inst_13424;var state_13480__$1 = state_13480;if(cljs.core.truth_(inst_13425))
{var statearr_13495_13536 = state_13480__$1;(statearr_13495_13536[1] = 10);
} else
{var statearr_13496_13537 = state_13480__$1;(statearr_13496_13537[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 9))
{var inst_13455 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13497_13538 = state_13480__$1;(statearr_13497_13538[2] = inst_13455);
(statearr_13497_13538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 10))
{var inst_13419 = (state_13480[8]);var inst_13422 = (state_13480[9]);var inst_13421 = (state_13480[10]);var inst_13420 = (state_13480[11]);var inst_13427 = cljs.core._nth.call(null,inst_13420,inst_13422);var inst_13428 = cljs.core.async.muxch_STAR_.call(null,inst_13427);var inst_13429 = cljs.core.async.close_BANG_.call(null,inst_13428);var inst_13430 = (inst_13422 + 1);var tmp13492 = inst_13419;var tmp13493 = inst_13421;var tmp13494 = inst_13420;var inst_13419__$1 = tmp13492;var inst_13420__$1 = tmp13494;var inst_13421__$1 = tmp13493;var inst_13422__$1 = inst_13430;var state_13480__$1 = (function (){var statearr_13498 = state_13480;(statearr_13498[8] = inst_13419__$1);
(statearr_13498[14] = inst_13429);
(statearr_13498[9] = inst_13422__$1);
(statearr_13498[10] = inst_13421__$1);
(statearr_13498[11] = inst_13420__$1);
return statearr_13498;
})();var statearr_13499_13539 = state_13480__$1;(statearr_13499_13539[2] = null);
(statearr_13499_13539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 11))
{var inst_13419 = (state_13480[8]);var inst_13433 = (state_13480[15]);var inst_13433__$1 = cljs.core.seq.call(null,inst_13419);var state_13480__$1 = (function (){var statearr_13500 = state_13480;(statearr_13500[15] = inst_13433__$1);
return statearr_13500;
})();if(inst_13433__$1)
{var statearr_13501_13540 = state_13480__$1;(statearr_13501_13540[1] = 13);
} else
{var statearr_13502_13541 = state_13480__$1;(statearr_13502_13541[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 12))
{var inst_13453 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13503_13542 = state_13480__$1;(statearr_13503_13542[2] = inst_13453);
(statearr_13503_13542[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 13))
{var inst_13433 = (state_13480[15]);var inst_13435 = cljs.core.chunked_seq_QMARK_.call(null,inst_13433);var state_13480__$1 = state_13480;if(inst_13435)
{var statearr_13504_13543 = state_13480__$1;(statearr_13504_13543[1] = 16);
} else
{var statearr_13505_13544 = state_13480__$1;(statearr_13505_13544[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 14))
{var state_13480__$1 = state_13480;var statearr_13506_13545 = state_13480__$1;(statearr_13506_13545[2] = null);
(statearr_13506_13545[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 15))
{var inst_13451 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13507_13546 = state_13480__$1;(statearr_13507_13546[2] = inst_13451);
(statearr_13507_13546[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 16))
{var inst_13433 = (state_13480[15]);var inst_13437 = cljs.core.chunk_first.call(null,inst_13433);var inst_13438 = cljs.core.chunk_rest.call(null,inst_13433);var inst_13439 = cljs.core.count.call(null,inst_13437);var inst_13419 = inst_13438;var inst_13420 = inst_13437;var inst_13421 = inst_13439;var inst_13422 = 0;var state_13480__$1 = (function (){var statearr_13508 = state_13480;(statearr_13508[8] = inst_13419);
(statearr_13508[9] = inst_13422);
(statearr_13508[10] = inst_13421);
(statearr_13508[11] = inst_13420);
return statearr_13508;
})();var statearr_13509_13547 = state_13480__$1;(statearr_13509_13547[2] = null);
(statearr_13509_13547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 17))
{var inst_13433 = (state_13480[15]);var inst_13442 = cljs.core.first.call(null,inst_13433);var inst_13443 = cljs.core.async.muxch_STAR_.call(null,inst_13442);var inst_13444 = cljs.core.async.close_BANG_.call(null,inst_13443);var inst_13445 = cljs.core.next.call(null,inst_13433);var inst_13419 = inst_13445;var inst_13420 = null;var inst_13421 = 0;var inst_13422 = 0;var state_13480__$1 = (function (){var statearr_13510 = state_13480;(statearr_13510[16] = inst_13444);
(statearr_13510[8] = inst_13419);
(statearr_13510[9] = inst_13422);
(statearr_13510[10] = inst_13421);
(statearr_13510[11] = inst_13420);
return statearr_13510;
})();var statearr_13511_13548 = state_13480__$1;(statearr_13511_13548[2] = null);
(statearr_13511_13548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 18))
{var inst_13448 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13512_13549 = state_13480__$1;(statearr_13512_13549[2] = inst_13448);
(statearr_13512_13549[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 19))
{var state_13480__$1 = state_13480;var statearr_13513_13550 = state_13480__$1;(statearr_13513_13550[2] = null);
(statearr_13513_13550[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 20))
{var state_13480__$1 = state_13480;var statearr_13514_13551 = state_13480__$1;(statearr_13514_13551[2] = null);
(statearr_13514_13551[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 21))
{var inst_13473 = (state_13480[2]);var state_13480__$1 = (function (){var statearr_13515 = state_13480;(statearr_13515[17] = inst_13473);
return statearr_13515;
})();var statearr_13516_13552 = state_13480__$1;(statearr_13516_13552[2] = null);
(statearr_13516_13552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 22))
{var inst_13470 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13517_13553 = state_13480__$1;(statearr_13517_13553[2] = inst_13470);
(statearr_13517_13553[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 23))
{var inst_13457 = (state_13480[13]);var inst_13461 = (state_13480[2]);var inst_13462 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13457);var state_13480__$1 = (function (){var statearr_13518 = state_13480;(statearr_13518[18] = inst_13461);
return statearr_13518;
})();var statearr_13519_13554 = state_13480__$1;(statearr_13519_13554[2] = inst_13462);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13480__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13481 === 24))
{var inst_13409 = (state_13480[7]);var inst_13459 = (state_13480[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13480,23,Object,null,22);var inst_13466 = cljs.core.async.muxch_STAR_.call(null,inst_13459);var state_13480__$1 = state_13480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13480__$1,25,inst_13466,inst_13409);
} else
{if((state_val_13481 === 25))
{var inst_13468 = (state_13480[2]);var state_13480__$1 = state_13480;var statearr_13520_13555 = state_13480__$1;(statearr_13520_13555[2] = inst_13468);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13480__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13524[0] = state_machine__5507__auto__);
(statearr_13524[1] = 1);
return statearr_13524;
});
var state_machine__5507__auto____1 = (function (state_13480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13525){if((e13525 instanceof Object))
{var ex__5510__auto__ = e13525;var statearr_13526_13556 = state_13480;(statearr_13526_13556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13557 = state_13480;
state_13480 = G__13557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13527 = f__5522__auto__.call(null);(statearr_13527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13528);
return statearr_13527;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13694 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13664){var state_val_13665 = (state_13664[1]);if((state_val_13665 === 1))
{var state_13664__$1 = state_13664;var statearr_13666_13695 = state_13664__$1;(statearr_13666_13695[2] = null);
(statearr_13666_13695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 2))
{var inst_13627 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13628 = 0;var state_13664__$1 = (function (){var statearr_13667 = state_13664;(statearr_13667[7] = inst_13628);
(statearr_13667[8] = inst_13627);
return statearr_13667;
})();var statearr_13668_13696 = state_13664__$1;(statearr_13668_13696[2] = null);
(statearr_13668_13696[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 3))
{var inst_13662 = (state_13664[2]);var state_13664__$1 = state_13664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13664__$1,inst_13662);
} else
{if((state_val_13665 === 4))
{var inst_13628 = (state_13664[7]);var inst_13630 = (inst_13628 < cnt);var state_13664__$1 = state_13664;if(cljs.core.truth_(inst_13630))
{var statearr_13669_13697 = state_13664__$1;(statearr_13669_13697[1] = 6);
} else
{var statearr_13670_13698 = state_13664__$1;(statearr_13670_13698[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 5))
{var inst_13648 = (state_13664[2]);var state_13664__$1 = (function (){var statearr_13671 = state_13664;(statearr_13671[9] = inst_13648);
return statearr_13671;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13664__$1,12,dchan);
} else
{if((state_val_13665 === 6))
{var state_13664__$1 = state_13664;var statearr_13672_13699 = state_13664__$1;(statearr_13672_13699[2] = null);
(statearr_13672_13699[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 7))
{var state_13664__$1 = state_13664;var statearr_13673_13700 = state_13664__$1;(statearr_13673_13700[2] = null);
(statearr_13673_13700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 8))
{var inst_13646 = (state_13664[2]);var state_13664__$1 = state_13664;var statearr_13674_13701 = state_13664__$1;(statearr_13674_13701[2] = inst_13646);
(statearr_13674_13701[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 9))
{var inst_13628 = (state_13664[7]);var inst_13641 = (state_13664[2]);var inst_13642 = (inst_13628 + 1);var inst_13628__$1 = inst_13642;var state_13664__$1 = (function (){var statearr_13675 = state_13664;(statearr_13675[10] = inst_13641);
(statearr_13675[7] = inst_13628__$1);
return statearr_13675;
})();var statearr_13676_13702 = state_13664__$1;(statearr_13676_13702[2] = null);
(statearr_13676_13702[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 10))
{var inst_13632 = (state_13664[2]);var inst_13633 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13664__$1 = (function (){var statearr_13677 = state_13664;(statearr_13677[11] = inst_13632);
return statearr_13677;
})();var statearr_13678_13703 = state_13664__$1;(statearr_13678_13703[2] = inst_13633);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13664__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 11))
{var inst_13628 = (state_13664[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13664,10,Object,null,9);var inst_13637 = chs__$1.call(null,inst_13628);var inst_13638 = done.call(null,inst_13628);var inst_13639 = cljs.core.async.take_BANG_.call(null,inst_13637,inst_13638);var state_13664__$1 = state_13664;var statearr_13679_13704 = state_13664__$1;(statearr_13679_13704[2] = inst_13639);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13664__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 12))
{var inst_13650 = (state_13664[12]);var inst_13650__$1 = (state_13664[2]);var inst_13651 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13650__$1);var state_13664__$1 = (function (){var statearr_13680 = state_13664;(statearr_13680[12] = inst_13650__$1);
return statearr_13680;
})();if(cljs.core.truth_(inst_13651))
{var statearr_13681_13705 = state_13664__$1;(statearr_13681_13705[1] = 13);
} else
{var statearr_13682_13706 = state_13664__$1;(statearr_13682_13706[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 13))
{var inst_13653 = cljs.core.async.close_BANG_.call(null,out);var state_13664__$1 = state_13664;var statearr_13683_13707 = state_13664__$1;(statearr_13683_13707[2] = inst_13653);
(statearr_13683_13707[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 14))
{var inst_13650 = (state_13664[12]);var inst_13655 = cljs.core.apply.call(null,f,inst_13650);var state_13664__$1 = state_13664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13664__$1,16,out,inst_13655);
} else
{if((state_val_13665 === 15))
{var inst_13660 = (state_13664[2]);var state_13664__$1 = state_13664;var statearr_13684_13708 = state_13664__$1;(statearr_13684_13708[2] = inst_13660);
(statearr_13684_13708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 16))
{var inst_13657 = (state_13664[2]);var state_13664__$1 = (function (){var statearr_13685 = state_13664;(statearr_13685[13] = inst_13657);
return statearr_13685;
})();var statearr_13686_13709 = state_13664__$1;(statearr_13686_13709[2] = null);
(statearr_13686_13709[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13690[0] = state_machine__5507__auto__);
(statearr_13690[1] = 1);
return statearr_13690;
});
var state_machine__5507__auto____1 = (function (state_13664){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13664);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13691){if((e13691 instanceof Object))
{var ex__5510__auto__ = e13691;var statearr_13692_13710 = state_13664;(statearr_13692_13710[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13711 = state_13664;
state_13664 = G__13711;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13664){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13693 = f__5522__auto__.call(null);(statearr_13693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13694);
return statearr_13693;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13795){var state_val_13796 = (state_13795[1]);if((state_val_13796 === 1))
{var inst_13766 = cljs.core.vec.call(null,chs);var inst_13767 = inst_13766;var state_13795__$1 = (function (){var statearr_13797 = state_13795;(statearr_13797[7] = inst_13767);
return statearr_13797;
})();var statearr_13798_13820 = state_13795__$1;(statearr_13798_13820[2] = null);
(statearr_13798_13820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 2))
{var inst_13767 = (state_13795[7]);var inst_13769 = cljs.core.count.call(null,inst_13767);var inst_13770 = (inst_13769 > 0);var state_13795__$1 = state_13795;if(cljs.core.truth_(inst_13770))
{var statearr_13799_13821 = state_13795__$1;(statearr_13799_13821[1] = 4);
} else
{var statearr_13800_13822 = state_13795__$1;(statearr_13800_13822[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 3))
{var inst_13793 = (state_13795[2]);var state_13795__$1 = state_13795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13795__$1,inst_13793);
} else
{if((state_val_13796 === 4))
{var inst_13767 = (state_13795[7]);var state_13795__$1 = state_13795;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13795__$1,7,inst_13767);
} else
{if((state_val_13796 === 5))
{var inst_13789 = cljs.core.async.close_BANG_.call(null,out);var state_13795__$1 = state_13795;var statearr_13801_13823 = state_13795__$1;(statearr_13801_13823[2] = inst_13789);
(statearr_13801_13823[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 6))
{var inst_13791 = (state_13795[2]);var state_13795__$1 = state_13795;var statearr_13802_13824 = state_13795__$1;(statearr_13802_13824[2] = inst_13791);
(statearr_13802_13824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 7))
{var inst_13775 = (state_13795[8]);var inst_13774 = (state_13795[9]);var inst_13774__$1 = (state_13795[2]);var inst_13775__$1 = cljs.core.nth.call(null,inst_13774__$1,0,null);var inst_13776 = cljs.core.nth.call(null,inst_13774__$1,1,null);var inst_13777 = (inst_13775__$1 == null);var state_13795__$1 = (function (){var statearr_13803 = state_13795;(statearr_13803[10] = inst_13776);
(statearr_13803[8] = inst_13775__$1);
(statearr_13803[9] = inst_13774__$1);
return statearr_13803;
})();if(cljs.core.truth_(inst_13777))
{var statearr_13804_13825 = state_13795__$1;(statearr_13804_13825[1] = 8);
} else
{var statearr_13805_13826 = state_13795__$1;(statearr_13805_13826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 8))
{var inst_13776 = (state_13795[10]);var inst_13775 = (state_13795[8]);var inst_13767 = (state_13795[7]);var inst_13774 = (state_13795[9]);var inst_13779 = (function (){var c = inst_13776;var v = inst_13775;var vec__13772 = inst_13774;var cs = inst_13767;return ((function (c,v,vec__13772,cs,inst_13776,inst_13775,inst_13767,inst_13774,state_val_13796){
return (function (p1__13712_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13712_SHARP_);
});
;})(c,v,vec__13772,cs,inst_13776,inst_13775,inst_13767,inst_13774,state_val_13796))
})();var inst_13780 = cljs.core.filterv.call(null,inst_13779,inst_13767);var inst_13767__$1 = inst_13780;var state_13795__$1 = (function (){var statearr_13806 = state_13795;(statearr_13806[7] = inst_13767__$1);
return statearr_13806;
})();var statearr_13807_13827 = state_13795__$1;(statearr_13807_13827[2] = null);
(statearr_13807_13827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 9))
{var inst_13775 = (state_13795[8]);var state_13795__$1 = state_13795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13795__$1,11,out,inst_13775);
} else
{if((state_val_13796 === 10))
{var inst_13787 = (state_13795[2]);var state_13795__$1 = state_13795;var statearr_13809_13828 = state_13795__$1;(statearr_13809_13828[2] = inst_13787);
(statearr_13809_13828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13796 === 11))
{var inst_13767 = (state_13795[7]);var inst_13784 = (state_13795[2]);var tmp13808 = inst_13767;var inst_13767__$1 = tmp13808;var state_13795__$1 = (function (){var statearr_13810 = state_13795;(statearr_13810[11] = inst_13784);
(statearr_13810[7] = inst_13767__$1);
return statearr_13810;
})();var statearr_13811_13829 = state_13795__$1;(statearr_13811_13829[2] = null);
(statearr_13811_13829[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13815 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13815[0] = state_machine__5507__auto__);
(statearr_13815[1] = 1);
return statearr_13815;
});
var state_machine__5507__auto____1 = (function (state_13795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13816){if((e13816 instanceof Object))
{var ex__5510__auto__ = e13816;var statearr_13817_13830 = state_13795;(statearr_13817_13830[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13831 = state_13795;
state_13795 = G__13831;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13818 = f__5522__auto__.call(null);(statearr_13818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13819);
return statearr_13818;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13901){var state_val_13902 = (state_13901[1]);if((state_val_13902 === 1))
{var inst_13878 = 0;var state_13901__$1 = (function (){var statearr_13903 = state_13901;(statearr_13903[7] = inst_13878);
return statearr_13903;
})();var statearr_13904_13925 = state_13901__$1;(statearr_13904_13925[2] = null);
(statearr_13904_13925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 2))
{var inst_13878 = (state_13901[7]);var inst_13880 = (inst_13878 < n);var state_13901__$1 = state_13901;if(cljs.core.truth_(inst_13880))
{var statearr_13905_13926 = state_13901__$1;(statearr_13905_13926[1] = 4);
} else
{var statearr_13906_13927 = state_13901__$1;(statearr_13906_13927[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 3))
{var inst_13898 = (state_13901[2]);var inst_13899 = cljs.core.async.close_BANG_.call(null,out);var state_13901__$1 = (function (){var statearr_13907 = state_13901;(statearr_13907[8] = inst_13898);
return statearr_13907;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13901__$1,inst_13899);
} else
{if((state_val_13902 === 4))
{var state_13901__$1 = state_13901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13901__$1,7,ch);
} else
{if((state_val_13902 === 5))
{var state_13901__$1 = state_13901;var statearr_13908_13928 = state_13901__$1;(statearr_13908_13928[2] = null);
(statearr_13908_13928[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 6))
{var inst_13896 = (state_13901[2]);var state_13901__$1 = state_13901;var statearr_13909_13929 = state_13901__$1;(statearr_13909_13929[2] = inst_13896);
(statearr_13909_13929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 7))
{var inst_13883 = (state_13901[9]);var inst_13883__$1 = (state_13901[2]);var inst_13884 = (inst_13883__$1 == null);var inst_13885 = cljs.core.not.call(null,inst_13884);var state_13901__$1 = (function (){var statearr_13910 = state_13901;(statearr_13910[9] = inst_13883__$1);
return statearr_13910;
})();if(inst_13885)
{var statearr_13911_13930 = state_13901__$1;(statearr_13911_13930[1] = 8);
} else
{var statearr_13912_13931 = state_13901__$1;(statearr_13912_13931[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 8))
{var inst_13883 = (state_13901[9]);var state_13901__$1 = state_13901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13901__$1,11,out,inst_13883);
} else
{if((state_val_13902 === 9))
{var state_13901__$1 = state_13901;var statearr_13913_13932 = state_13901__$1;(statearr_13913_13932[2] = null);
(statearr_13913_13932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 10))
{var inst_13893 = (state_13901[2]);var state_13901__$1 = state_13901;var statearr_13914_13933 = state_13901__$1;(statearr_13914_13933[2] = inst_13893);
(statearr_13914_13933[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 11))
{var inst_13878 = (state_13901[7]);var inst_13888 = (state_13901[2]);var inst_13889 = (inst_13878 + 1);var inst_13878__$1 = inst_13889;var state_13901__$1 = (function (){var statearr_13915 = state_13901;(statearr_13915[7] = inst_13878__$1);
(statearr_13915[10] = inst_13888);
return statearr_13915;
})();var statearr_13916_13934 = state_13901__$1;(statearr_13916_13934[2] = null);
(statearr_13916_13934[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13920 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13920[0] = state_machine__5507__auto__);
(statearr_13920[1] = 1);
return statearr_13920;
});
var state_machine__5507__auto____1 = (function (state_13901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13921){if((e13921 instanceof Object))
{var ex__5510__auto__ = e13921;var statearr_13922_13935 = state_13901;(statearr_13922_13935[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13936 = state_13901;
state_13901 = G__13936;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13923 = f__5522__auto__.call(null);(statearr_13923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13924);
return statearr_13923;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14008){var state_val_14009 = (state_14008[1]);if((state_val_14009 === 1))
{var inst_13985 = null;var state_14008__$1 = (function (){var statearr_14010 = state_14008;(statearr_14010[7] = inst_13985);
return statearr_14010;
})();var statearr_14011_14034 = state_14008__$1;(statearr_14011_14034[2] = null);
(statearr_14011_14034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 2))
{var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14008__$1,4,ch);
} else
{if((state_val_14009 === 3))
{var inst_14005 = (state_14008[2]);var inst_14006 = cljs.core.async.close_BANG_.call(null,out);var state_14008__$1 = (function (){var statearr_14012 = state_14008;(statearr_14012[8] = inst_14005);
return statearr_14012;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14008__$1,inst_14006);
} else
{if((state_val_14009 === 4))
{var inst_13988 = (state_14008[9]);var inst_13988__$1 = (state_14008[2]);var inst_13989 = (inst_13988__$1 == null);var inst_13990 = cljs.core.not.call(null,inst_13989);var state_14008__$1 = (function (){var statearr_14013 = state_14008;(statearr_14013[9] = inst_13988__$1);
return statearr_14013;
})();if(inst_13990)
{var statearr_14014_14035 = state_14008__$1;(statearr_14014_14035[1] = 5);
} else
{var statearr_14015_14036 = state_14008__$1;(statearr_14015_14036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 5))
{var inst_13988 = (state_14008[9]);var inst_13985 = (state_14008[7]);var inst_13992 = cljs.core._EQ_.call(null,inst_13988,inst_13985);var state_14008__$1 = state_14008;if(inst_13992)
{var statearr_14016_14037 = state_14008__$1;(statearr_14016_14037[1] = 8);
} else
{var statearr_14017_14038 = state_14008__$1;(statearr_14017_14038[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 6))
{var state_14008__$1 = state_14008;var statearr_14019_14039 = state_14008__$1;(statearr_14019_14039[2] = null);
(statearr_14019_14039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 7))
{var inst_14003 = (state_14008[2]);var state_14008__$1 = state_14008;var statearr_14020_14040 = state_14008__$1;(statearr_14020_14040[2] = inst_14003);
(statearr_14020_14040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 8))
{var inst_13985 = (state_14008[7]);var tmp14018 = inst_13985;var inst_13985__$1 = tmp14018;var state_14008__$1 = (function (){var statearr_14021 = state_14008;(statearr_14021[7] = inst_13985__$1);
return statearr_14021;
})();var statearr_14022_14041 = state_14008__$1;(statearr_14022_14041[2] = null);
(statearr_14022_14041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 9))
{var inst_13988 = (state_14008[9]);var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14008__$1,11,out,inst_13988);
} else
{if((state_val_14009 === 10))
{var inst_14000 = (state_14008[2]);var state_14008__$1 = state_14008;var statearr_14023_14042 = state_14008__$1;(statearr_14023_14042[2] = inst_14000);
(statearr_14023_14042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 11))
{var inst_13988 = (state_14008[9]);var inst_13997 = (state_14008[2]);var inst_13985 = inst_13988;var state_14008__$1 = (function (){var statearr_14024 = state_14008;(statearr_14024[10] = inst_13997);
(statearr_14024[7] = inst_13985);
return statearr_14024;
})();var statearr_14025_14043 = state_14008__$1;(statearr_14025_14043[2] = null);
(statearr_14025_14043[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14029 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14029[0] = state_machine__5507__auto__);
(statearr_14029[1] = 1);
return statearr_14029;
});
var state_machine__5507__auto____1 = (function (state_14008){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14030){if((e14030 instanceof Object))
{var ex__5510__auto__ = e14030;var statearr_14031_14044 = state_14008;(statearr_14031_14044[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14045 = state_14008;
state_14008 = G__14045;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14008){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14032 = f__5522__auto__.call(null);(statearr_14032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14033);
return statearr_14032;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14150){var state_val_14151 = (state_14150[1]);if((state_val_14151 === 1))
{var inst_14113 = (new Array(n));var inst_14114 = inst_14113;var inst_14115 = 0;var state_14150__$1 = (function (){var statearr_14152 = state_14150;(statearr_14152[7] = inst_14115);
(statearr_14152[8] = inst_14114);
return statearr_14152;
})();var statearr_14153_14181 = state_14150__$1;(statearr_14153_14181[2] = null);
(statearr_14153_14181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 2))
{var state_14150__$1 = state_14150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14150__$1,4,ch);
} else
{if((state_val_14151 === 3))
{var inst_14148 = (state_14150[2]);var state_14150__$1 = state_14150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14150__$1,inst_14148);
} else
{if((state_val_14151 === 4))
{var inst_14118 = (state_14150[9]);var inst_14118__$1 = (state_14150[2]);var inst_14119 = (inst_14118__$1 == null);var inst_14120 = cljs.core.not.call(null,inst_14119);var state_14150__$1 = (function (){var statearr_14154 = state_14150;(statearr_14154[9] = inst_14118__$1);
return statearr_14154;
})();if(inst_14120)
{var statearr_14155_14182 = state_14150__$1;(statearr_14155_14182[1] = 5);
} else
{var statearr_14156_14183 = state_14150__$1;(statearr_14156_14183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 5))
{var inst_14123 = (state_14150[10]);var inst_14118 = (state_14150[9]);var inst_14115 = (state_14150[7]);var inst_14114 = (state_14150[8]);var inst_14122 = (inst_14114[inst_14115] = inst_14118);var inst_14123__$1 = (inst_14115 + 1);var inst_14124 = (inst_14123__$1 < n);var state_14150__$1 = (function (){var statearr_14157 = state_14150;(statearr_14157[10] = inst_14123__$1);
(statearr_14157[11] = inst_14122);
return statearr_14157;
})();if(cljs.core.truth_(inst_14124))
{var statearr_14158_14184 = state_14150__$1;(statearr_14158_14184[1] = 8);
} else
{var statearr_14159_14185 = state_14150__$1;(statearr_14159_14185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 6))
{var inst_14115 = (state_14150[7]);var inst_14136 = (inst_14115 > 0);var state_14150__$1 = state_14150;if(cljs.core.truth_(inst_14136))
{var statearr_14161_14186 = state_14150__$1;(statearr_14161_14186[1] = 12);
} else
{var statearr_14162_14187 = state_14150__$1;(statearr_14162_14187[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 7))
{var inst_14146 = (state_14150[2]);var state_14150__$1 = state_14150;var statearr_14163_14188 = state_14150__$1;(statearr_14163_14188[2] = inst_14146);
(statearr_14163_14188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 8))
{var inst_14123 = (state_14150[10]);var inst_14114 = (state_14150[8]);var tmp14160 = inst_14114;var inst_14114__$1 = tmp14160;var inst_14115 = inst_14123;var state_14150__$1 = (function (){var statearr_14164 = state_14150;(statearr_14164[7] = inst_14115);
(statearr_14164[8] = inst_14114__$1);
return statearr_14164;
})();var statearr_14165_14189 = state_14150__$1;(statearr_14165_14189[2] = null);
(statearr_14165_14189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 9))
{var inst_14114 = (state_14150[8]);var inst_14128 = cljs.core.vec.call(null,inst_14114);var state_14150__$1 = state_14150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14150__$1,11,out,inst_14128);
} else
{if((state_val_14151 === 10))
{var inst_14134 = (state_14150[2]);var state_14150__$1 = state_14150;var statearr_14166_14190 = state_14150__$1;(statearr_14166_14190[2] = inst_14134);
(statearr_14166_14190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 11))
{var inst_14130 = (state_14150[2]);var inst_14131 = (new Array(n));var inst_14114 = inst_14131;var inst_14115 = 0;var state_14150__$1 = (function (){var statearr_14167 = state_14150;(statearr_14167[12] = inst_14130);
(statearr_14167[7] = inst_14115);
(statearr_14167[8] = inst_14114);
return statearr_14167;
})();var statearr_14168_14191 = state_14150__$1;(statearr_14168_14191[2] = null);
(statearr_14168_14191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 12))
{var inst_14114 = (state_14150[8]);var inst_14138 = cljs.core.vec.call(null,inst_14114);var state_14150__$1 = state_14150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14150__$1,15,out,inst_14138);
} else
{if((state_val_14151 === 13))
{var state_14150__$1 = state_14150;var statearr_14169_14192 = state_14150__$1;(statearr_14169_14192[2] = null);
(statearr_14169_14192[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 14))
{var inst_14143 = (state_14150[2]);var inst_14144 = cljs.core.async.close_BANG_.call(null,out);var state_14150__$1 = (function (){var statearr_14170 = state_14150;(statearr_14170[13] = inst_14143);
return statearr_14170;
})();var statearr_14171_14193 = state_14150__$1;(statearr_14171_14193[2] = inst_14144);
(statearr_14171_14193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14151 === 15))
{var inst_14140 = (state_14150[2]);var state_14150__$1 = state_14150;var statearr_14172_14194 = state_14150__$1;(statearr_14172_14194[2] = inst_14140);
(statearr_14172_14194[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14176[0] = state_machine__5507__auto__);
(statearr_14176[1] = 1);
return statearr_14176;
});
var state_machine__5507__auto____1 = (function (state_14150){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14177){if((e14177 instanceof Object))
{var ex__5510__auto__ = e14177;var statearr_14178_14195 = state_14150;(statearr_14178_14195[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14196 = state_14150;
state_14150 = G__14196;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14150){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14179 = f__5522__auto__.call(null);(statearr_14179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14180);
return statearr_14179;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14339 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14309){var state_val_14310 = (state_14309[1]);if((state_val_14310 === 1))
{var inst_14268 = [];var inst_14269 = inst_14268;var inst_14270 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14309__$1 = (function (){var statearr_14311 = state_14309;(statearr_14311[7] = inst_14270);
(statearr_14311[8] = inst_14269);
return statearr_14311;
})();var statearr_14312_14340 = state_14309__$1;(statearr_14312_14340[2] = null);
(statearr_14312_14340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 2))
{var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14309__$1,4,ch);
} else
{if((state_val_14310 === 3))
{var inst_14307 = (state_14309[2]);var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14309__$1,inst_14307);
} else
{if((state_val_14310 === 4))
{var inst_14273 = (state_14309[9]);var inst_14273__$1 = (state_14309[2]);var inst_14274 = (inst_14273__$1 == null);var inst_14275 = cljs.core.not.call(null,inst_14274);var state_14309__$1 = (function (){var statearr_14313 = state_14309;(statearr_14313[9] = inst_14273__$1);
return statearr_14313;
})();if(inst_14275)
{var statearr_14314_14341 = state_14309__$1;(statearr_14314_14341[1] = 5);
} else
{var statearr_14315_14342 = state_14309__$1;(statearr_14315_14342[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 5))
{var inst_14270 = (state_14309[7]);var inst_14277 = (state_14309[10]);var inst_14273 = (state_14309[9]);var inst_14277__$1 = f.call(null,inst_14273);var inst_14278 = cljs.core._EQ_.call(null,inst_14277__$1,inst_14270);var inst_14279 = cljs.core.keyword_identical_QMARK_.call(null,inst_14270,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14280 = (inst_14278) || (inst_14279);var state_14309__$1 = (function (){var statearr_14316 = state_14309;(statearr_14316[10] = inst_14277__$1);
return statearr_14316;
})();if(cljs.core.truth_(inst_14280))
{var statearr_14317_14343 = state_14309__$1;(statearr_14317_14343[1] = 8);
} else
{var statearr_14318_14344 = state_14309__$1;(statearr_14318_14344[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 6))
{var inst_14269 = (state_14309[8]);var inst_14294 = inst_14269.length;var inst_14295 = (inst_14294 > 0);var state_14309__$1 = state_14309;if(cljs.core.truth_(inst_14295))
{var statearr_14320_14345 = state_14309__$1;(statearr_14320_14345[1] = 12);
} else
{var statearr_14321_14346 = state_14309__$1;(statearr_14321_14346[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 7))
{var inst_14305 = (state_14309[2]);var state_14309__$1 = state_14309;var statearr_14322_14347 = state_14309__$1;(statearr_14322_14347[2] = inst_14305);
(statearr_14322_14347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 8))
{var inst_14277 = (state_14309[10]);var inst_14269 = (state_14309[8]);var inst_14273 = (state_14309[9]);var inst_14282 = inst_14269.push(inst_14273);var tmp14319 = inst_14269;var inst_14269__$1 = tmp14319;var inst_14270 = inst_14277;var state_14309__$1 = (function (){var statearr_14323 = state_14309;(statearr_14323[7] = inst_14270);
(statearr_14323[11] = inst_14282);
(statearr_14323[8] = inst_14269__$1);
return statearr_14323;
})();var statearr_14324_14348 = state_14309__$1;(statearr_14324_14348[2] = null);
(statearr_14324_14348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 9))
{var inst_14269 = (state_14309[8]);var inst_14285 = cljs.core.vec.call(null,inst_14269);var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14309__$1,11,out,inst_14285);
} else
{if((state_val_14310 === 10))
{var inst_14292 = (state_14309[2]);var state_14309__$1 = state_14309;var statearr_14325_14349 = state_14309__$1;(statearr_14325_14349[2] = inst_14292);
(statearr_14325_14349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 11))
{var inst_14277 = (state_14309[10]);var inst_14273 = (state_14309[9]);var inst_14287 = (state_14309[2]);var inst_14288 = [];var inst_14289 = inst_14288.push(inst_14273);var inst_14269 = inst_14288;var inst_14270 = inst_14277;var state_14309__$1 = (function (){var statearr_14326 = state_14309;(statearr_14326[12] = inst_14289);
(statearr_14326[7] = inst_14270);
(statearr_14326[13] = inst_14287);
(statearr_14326[8] = inst_14269);
return statearr_14326;
})();var statearr_14327_14350 = state_14309__$1;(statearr_14327_14350[2] = null);
(statearr_14327_14350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 12))
{var inst_14269 = (state_14309[8]);var inst_14297 = cljs.core.vec.call(null,inst_14269);var state_14309__$1 = state_14309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14309__$1,15,out,inst_14297);
} else
{if((state_val_14310 === 13))
{var state_14309__$1 = state_14309;var statearr_14328_14351 = state_14309__$1;(statearr_14328_14351[2] = null);
(statearr_14328_14351[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 14))
{var inst_14302 = (state_14309[2]);var inst_14303 = cljs.core.async.close_BANG_.call(null,out);var state_14309__$1 = (function (){var statearr_14329 = state_14309;(statearr_14329[14] = inst_14302);
return statearr_14329;
})();var statearr_14330_14352 = state_14309__$1;(statearr_14330_14352[2] = inst_14303);
(statearr_14330_14352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14310 === 15))
{var inst_14299 = (state_14309[2]);var state_14309__$1 = state_14309;var statearr_14331_14353 = state_14309__$1;(statearr_14331_14353[2] = inst_14299);
(statearr_14331_14353[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14335[0] = state_machine__5507__auto__);
(statearr_14335[1] = 1);
return statearr_14335;
});
var state_machine__5507__auto____1 = (function (state_14309){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14336){if((e14336 instanceof Object))
{var ex__5510__auto__ = e14336;var statearr_14337_14354 = state_14309;(statearr_14337_14354[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14355 = state_14309;
state_14309 = G__14355;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14309){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14338 = f__5522__auto__.call(null);(statearr_14338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14339);
return statearr_14338;
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