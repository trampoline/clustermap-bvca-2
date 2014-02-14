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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13524 = (function (f,fn_handler,meta13525){
this.f = f;
this.fn_handler = fn_handler;
this.meta13525 = meta13525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13524.cljs$lang$type = true;
cljs.core.async.t13524.cljs$lang$ctorStr = "cljs.core.async/t13524";
cljs.core.async.t13524.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13524");
});
cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13526){var self__ = this;
var _13526__$1 = this;return self__.meta13525;
});
cljs.core.async.t13524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13526,meta13525__$1){var self__ = this;
var _13526__$1 = this;return (new cljs.core.async.t13524(self__.f,self__.fn_handler,meta13525__$1));
});
cljs.core.async.__GT_t13524 = (function __GT_t13524(f__$1,fn_handler__$1,meta13525){return (new cljs.core.async.t13524(f__$1,fn_handler__$1,meta13525));
});
}
return (new cljs.core.async.t13524(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13528 = buff;if(G__13528)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13528.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13528.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13528);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13528);
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
{var val_13529 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13529);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13529);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13530 = n;var x_13531 = 0;while(true){
if((x_13531 < n__4248__auto___13530))
{(a[x_13531] = 0);
{
var G__13532 = (x_13531 + 1);
x_13531 = G__13532;
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
var G__13533 = (i + 1);
i = G__13533;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13537 = (function (flag,alt_flag,meta13538){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13538 = meta13538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13537.cljs$lang$type = true;
cljs.core.async.t13537.cljs$lang$ctorStr = "cljs.core.async/t13537";
cljs.core.async.t13537.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13537");
});
cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13539){var self__ = this;
var _13539__$1 = this;return self__.meta13538;
});
cljs.core.async.t13537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13539,meta13538__$1){var self__ = this;
var _13539__$1 = this;return (new cljs.core.async.t13537(self__.flag,self__.alt_flag,meta13538__$1));
});
cljs.core.async.__GT_t13537 = (function __GT_t13537(flag__$1,alt_flag__$1,meta13538){return (new cljs.core.async.t13537(flag__$1,alt_flag__$1,meta13538));
});
}
return (new cljs.core.async.t13537(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13543 = (function (cb,flag,alt_handler,meta13544){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13544 = meta13544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13543.cljs$lang$type = true;
cljs.core.async.t13543.cljs$lang$ctorStr = "cljs.core.async/t13543";
cljs.core.async.t13543.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13543");
});
cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13545){var self__ = this;
var _13545__$1 = this;return self__.meta13544;
});
cljs.core.async.t13543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13545,meta13544__$1){var self__ = this;
var _13545__$1 = this;return (new cljs.core.async.t13543(self__.cb,self__.flag,self__.alt_handler,meta13544__$1));
});
cljs.core.async.__GT_t13543 = (function __GT_t13543(cb__$1,flag__$1,alt_handler__$1,meta13544){return (new cljs.core.async.t13543(cb__$1,flag__$1,alt_handler__$1,meta13544));
});
}
return (new cljs.core.async.t13543(cb,flag,alt_handler,null));
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
return (function (p1__13546_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13546_SHARP_,port], null));
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
var G__13547 = (i + 1);
i = G__13547;
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
var alts_BANG___delegate = function (ports,p__13548){var map__13550 = p__13548;var map__13550__$1 = ((cljs.core.seq_QMARK_.call(null,map__13550))?cljs.core.apply.call(null,cljs.core.hash_map,map__13550):map__13550);var opts = map__13550__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13548 = null;if (arguments.length > 1) {
  p__13548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13548);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13551){
var ports = cljs.core.first(arglist__13551);
var p__13548 = cljs.core.rest(arglist__13551);
return alts_BANG___delegate(ports,p__13548);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13559 = (function (ch,f,map_LT_,meta13560){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13560 = meta13560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13559.cljs$lang$type = true;
cljs.core.async.t13559.cljs$lang$ctorStr = "cljs.core.async/t13559";
cljs.core.async.t13559.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13559");
});
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13562 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13562 = (function (fn1,_,meta13560,ch,f,map_LT_,meta13563){
this.fn1 = fn1;
this._ = _;
this.meta13560 = meta13560;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13563 = meta13563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13562.cljs$lang$type = true;
cljs.core.async.t13562.cljs$lang$ctorStr = "cljs.core.async/t13562";
cljs.core.async.t13562.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13562");
});
cljs.core.async.t13562.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13562.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13552_SHARP_){return f1.call(null,(((p1__13552_SHARP_ == null))?null:self__.f.call(null,p1__13552_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13564){var self__ = this;
var _13564__$1 = this;return self__.meta13563;
});
cljs.core.async.t13562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13564,meta13563__$1){var self__ = this;
var _13564__$1 = this;return (new cljs.core.async.t13562(self__.fn1,self__._,self__.meta13560,self__.ch,self__.f,self__.map_LT_,meta13563__$1));
});
cljs.core.async.__GT_t13562 = (function __GT_t13562(fn1__$1,___$2,meta13560__$1,ch__$2,f__$2,map_LT___$2,meta13563){return (new cljs.core.async.t13562(fn1__$1,___$2,meta13560__$1,ch__$2,f__$2,map_LT___$2,meta13563));
});
}
return (new cljs.core.async.t13562(fn1,___$1,self__.meta13560,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13561){var self__ = this;
var _13561__$1 = this;return self__.meta13560;
});
cljs.core.async.t13559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13561,meta13560__$1){var self__ = this;
var _13561__$1 = this;return (new cljs.core.async.t13559(self__.ch,self__.f,self__.map_LT_,meta13560__$1));
});
cljs.core.async.__GT_t13559 = (function __GT_t13559(ch__$1,f__$1,map_LT___$1,meta13560){return (new cljs.core.async.t13559(ch__$1,f__$1,map_LT___$1,meta13560));
});
}
return (new cljs.core.async.t13559(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13568 = (function (ch,f,map_GT_,meta13569){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13569 = meta13569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13568.cljs$lang$type = true;
cljs.core.async.t13568.cljs$lang$ctorStr = "cljs.core.async/t13568";
cljs.core.async.t13568.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13568");
});
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13570){var self__ = this;
var _13570__$1 = this;return self__.meta13569;
});
cljs.core.async.t13568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13570,meta13569__$1){var self__ = this;
var _13570__$1 = this;return (new cljs.core.async.t13568(self__.ch,self__.f,self__.map_GT_,meta13569__$1));
});
cljs.core.async.__GT_t13568 = (function __GT_t13568(ch__$1,f__$1,map_GT___$1,meta13569){return (new cljs.core.async.t13568(ch__$1,f__$1,map_GT___$1,meta13569));
});
}
return (new cljs.core.async.t13568(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13574 = (function (ch,p,filter_GT_,meta13575){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13575 = meta13575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13574.cljs$lang$type = true;
cljs.core.async.t13574.cljs$lang$ctorStr = "cljs.core.async/t13574";
cljs.core.async.t13574.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13574");
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13576){var self__ = this;
var _13576__$1 = this;return self__.meta13575;
});
cljs.core.async.t13574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13576,meta13575__$1){var self__ = this;
var _13576__$1 = this;return (new cljs.core.async.t13574(self__.ch,self__.p,self__.filter_GT_,meta13575__$1));
});
cljs.core.async.__GT_t13574 = (function __GT_t13574(ch__$1,p__$1,filter_GT___$1,meta13575){return (new cljs.core.async.t13574(ch__$1,p__$1,filter_GT___$1,meta13575));
});
}
return (new cljs.core.async.t13574(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13659 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13638){var state_val_13639 = (state_13638[1]);if((state_val_13639 === 1))
{var state_13638__$1 = state_13638;var statearr_13640_13660 = state_13638__$1;(statearr_13640_13660[2] = null);
(statearr_13640_13660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 2))
{var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13638__$1,4,ch);
} else
{if((state_val_13639 === 3))
{var inst_13636 = (state_13638[2]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13638__$1,inst_13636);
} else
{if((state_val_13639 === 4))
{var inst_13620 = (state_13638[7]);var inst_13620__$1 = (state_13638[2]);var inst_13621 = (inst_13620__$1 == null);var state_13638__$1 = (function (){var statearr_13641 = state_13638;(statearr_13641[7] = inst_13620__$1);
return statearr_13641;
})();if(cljs.core.truth_(inst_13621))
{var statearr_13642_13661 = state_13638__$1;(statearr_13642_13661[1] = 5);
} else
{var statearr_13643_13662 = state_13638__$1;(statearr_13643_13662[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 5))
{var inst_13623 = cljs.core.async.close_BANG_.call(null,out);var state_13638__$1 = state_13638;var statearr_13644_13663 = state_13638__$1;(statearr_13644_13663[2] = inst_13623);
(statearr_13644_13663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 6))
{var inst_13620 = (state_13638[7]);var inst_13625 = p.call(null,inst_13620);var state_13638__$1 = state_13638;if(cljs.core.truth_(inst_13625))
{var statearr_13645_13664 = state_13638__$1;(statearr_13645_13664[1] = 8);
} else
{var statearr_13646_13665 = state_13638__$1;(statearr_13646_13665[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 7))
{var inst_13634 = (state_13638[2]);var state_13638__$1 = state_13638;var statearr_13647_13666 = state_13638__$1;(statearr_13647_13666[2] = inst_13634);
(statearr_13647_13666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 8))
{var inst_13620 = (state_13638[7]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13638__$1,11,out,inst_13620);
} else
{if((state_val_13639 === 9))
{var state_13638__$1 = state_13638;var statearr_13648_13667 = state_13638__$1;(statearr_13648_13667[2] = null);
(statearr_13648_13667[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 10))
{var inst_13631 = (state_13638[2]);var state_13638__$1 = (function (){var statearr_13649 = state_13638;(statearr_13649[8] = inst_13631);
return statearr_13649;
})();var statearr_13650_13668 = state_13638__$1;(statearr_13650_13668[2] = null);
(statearr_13650_13668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 11))
{var inst_13628 = (state_13638[2]);var state_13638__$1 = state_13638;var statearr_13651_13669 = state_13638__$1;(statearr_13651_13669[2] = inst_13628);
(statearr_13651_13669[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13655 = [null,null,null,null,null,null,null,null,null];(statearr_13655[0] = state_machine__5507__auto__);
(statearr_13655[1] = 1);
return statearr_13655;
});
var state_machine__5507__auto____1 = (function (state_13638){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13656){if((e13656 instanceof Object))
{var ex__5510__auto__ = e13656;var statearr_13657_13670 = state_13638;(statearr_13657_13670[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13671 = state_13638;
state_13638 = G__13671;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13638){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13658 = f__5522__auto__.call(null);(statearr_13658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13659);
return statearr_13658;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13823){var state_val_13824 = (state_13823[1]);if((state_val_13824 === 1))
{var state_13823__$1 = state_13823;var statearr_13825_13862 = state_13823__$1;(statearr_13825_13862[2] = null);
(statearr_13825_13862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 2))
{var state_13823__$1 = state_13823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13823__$1,4,in$);
} else
{if((state_val_13824 === 3))
{var inst_13821 = (state_13823[2]);var state_13823__$1 = state_13823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13823__$1,inst_13821);
} else
{if((state_val_13824 === 4))
{var inst_13769 = (state_13823[7]);var inst_13769__$1 = (state_13823[2]);var inst_13770 = (inst_13769__$1 == null);var state_13823__$1 = (function (){var statearr_13826 = state_13823;(statearr_13826[7] = inst_13769__$1);
return statearr_13826;
})();if(cljs.core.truth_(inst_13770))
{var statearr_13827_13863 = state_13823__$1;(statearr_13827_13863[1] = 5);
} else
{var statearr_13828_13864 = state_13823__$1;(statearr_13828_13864[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 5))
{var inst_13772 = cljs.core.async.close_BANG_.call(null,out);var state_13823__$1 = state_13823;var statearr_13829_13865 = state_13823__$1;(statearr_13829_13865[2] = inst_13772);
(statearr_13829_13865[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 6))
{var inst_13769 = (state_13823[7]);var inst_13774 = f.call(null,inst_13769);var inst_13779 = cljs.core.seq.call(null,inst_13774);var inst_13780 = inst_13779;var inst_13781 = null;var inst_13782 = 0;var inst_13783 = 0;var state_13823__$1 = (function (){var statearr_13830 = state_13823;(statearr_13830[8] = inst_13782);
(statearr_13830[9] = inst_13783);
(statearr_13830[10] = inst_13780);
(statearr_13830[11] = inst_13781);
return statearr_13830;
})();var statearr_13831_13866 = state_13823__$1;(statearr_13831_13866[2] = null);
(statearr_13831_13866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 7))
{var inst_13819 = (state_13823[2]);var state_13823__$1 = state_13823;var statearr_13832_13867 = state_13823__$1;(statearr_13832_13867[2] = inst_13819);
(statearr_13832_13867[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 8))
{var inst_13782 = (state_13823[8]);var inst_13783 = (state_13823[9]);var inst_13785 = (inst_13783 < inst_13782);var inst_13786 = inst_13785;var state_13823__$1 = state_13823;if(cljs.core.truth_(inst_13786))
{var statearr_13833_13868 = state_13823__$1;(statearr_13833_13868[1] = 10);
} else
{var statearr_13834_13869 = state_13823__$1;(statearr_13834_13869[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 9))
{var inst_13816 = (state_13823[2]);var state_13823__$1 = (function (){var statearr_13835 = state_13823;(statearr_13835[12] = inst_13816);
return statearr_13835;
})();var statearr_13836_13870 = state_13823__$1;(statearr_13836_13870[2] = null);
(statearr_13836_13870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 10))
{var inst_13783 = (state_13823[9]);var inst_13781 = (state_13823[11]);var inst_13788 = cljs.core._nth.call(null,inst_13781,inst_13783);var state_13823__$1 = state_13823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13823__$1,13,out,inst_13788);
} else
{if((state_val_13824 === 11))
{var inst_13794 = (state_13823[13]);var inst_13780 = (state_13823[10]);var inst_13794__$1 = cljs.core.seq.call(null,inst_13780);var state_13823__$1 = (function (){var statearr_13840 = state_13823;(statearr_13840[13] = inst_13794__$1);
return statearr_13840;
})();if(inst_13794__$1)
{var statearr_13841_13871 = state_13823__$1;(statearr_13841_13871[1] = 14);
} else
{var statearr_13842_13872 = state_13823__$1;(statearr_13842_13872[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 12))
{var inst_13814 = (state_13823[2]);var state_13823__$1 = state_13823;var statearr_13843_13873 = state_13823__$1;(statearr_13843_13873[2] = inst_13814);
(statearr_13843_13873[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 13))
{var inst_13782 = (state_13823[8]);var inst_13783 = (state_13823[9]);var inst_13780 = (state_13823[10]);var inst_13781 = (state_13823[11]);var inst_13790 = (state_13823[2]);var inst_13791 = (inst_13783 + 1);var tmp13837 = inst_13782;var tmp13838 = inst_13780;var tmp13839 = inst_13781;var inst_13780__$1 = tmp13838;var inst_13781__$1 = tmp13839;var inst_13782__$1 = tmp13837;var inst_13783__$1 = inst_13791;var state_13823__$1 = (function (){var statearr_13844 = state_13823;(statearr_13844[14] = inst_13790);
(statearr_13844[8] = inst_13782__$1);
(statearr_13844[9] = inst_13783__$1);
(statearr_13844[10] = inst_13780__$1);
(statearr_13844[11] = inst_13781__$1);
return statearr_13844;
})();var statearr_13845_13874 = state_13823__$1;(statearr_13845_13874[2] = null);
(statearr_13845_13874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 14))
{var inst_13794 = (state_13823[13]);var inst_13796 = cljs.core.chunked_seq_QMARK_.call(null,inst_13794);var state_13823__$1 = state_13823;if(inst_13796)
{var statearr_13846_13875 = state_13823__$1;(statearr_13846_13875[1] = 17);
} else
{var statearr_13847_13876 = state_13823__$1;(statearr_13847_13876[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 15))
{var state_13823__$1 = state_13823;var statearr_13848_13877 = state_13823__$1;(statearr_13848_13877[2] = null);
(statearr_13848_13877[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 16))
{var inst_13812 = (state_13823[2]);var state_13823__$1 = state_13823;var statearr_13849_13878 = state_13823__$1;(statearr_13849_13878[2] = inst_13812);
(statearr_13849_13878[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 17))
{var inst_13794 = (state_13823[13]);var inst_13798 = cljs.core.chunk_first.call(null,inst_13794);var inst_13799 = cljs.core.chunk_rest.call(null,inst_13794);var inst_13800 = cljs.core.count.call(null,inst_13798);var inst_13780 = inst_13799;var inst_13781 = inst_13798;var inst_13782 = inst_13800;var inst_13783 = 0;var state_13823__$1 = (function (){var statearr_13850 = state_13823;(statearr_13850[8] = inst_13782);
(statearr_13850[9] = inst_13783);
(statearr_13850[10] = inst_13780);
(statearr_13850[11] = inst_13781);
return statearr_13850;
})();var statearr_13851_13879 = state_13823__$1;(statearr_13851_13879[2] = null);
(statearr_13851_13879[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 18))
{var inst_13794 = (state_13823[13]);var inst_13803 = cljs.core.first.call(null,inst_13794);var state_13823__$1 = state_13823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13823__$1,20,out,inst_13803);
} else
{if((state_val_13824 === 19))
{var inst_13809 = (state_13823[2]);var state_13823__$1 = state_13823;var statearr_13852_13880 = state_13823__$1;(statearr_13852_13880[2] = inst_13809);
(statearr_13852_13880[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13824 === 20))
{var inst_13794 = (state_13823[13]);var inst_13805 = (state_13823[2]);var inst_13806 = cljs.core.next.call(null,inst_13794);var inst_13780 = inst_13806;var inst_13781 = null;var inst_13782 = 0;var inst_13783 = 0;var state_13823__$1 = (function (){var statearr_13853 = state_13823;(statearr_13853[15] = inst_13805);
(statearr_13853[8] = inst_13782);
(statearr_13853[9] = inst_13783);
(statearr_13853[10] = inst_13780);
(statearr_13853[11] = inst_13781);
return statearr_13853;
})();var statearr_13854_13881 = state_13823__$1;(statearr_13854_13881[2] = null);
(statearr_13854_13881[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13858[0] = state_machine__5507__auto__);
(statearr_13858[1] = 1);
return statearr_13858;
});
var state_machine__5507__auto____1 = (function (state_13823){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13823);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13859){if((e13859 instanceof Object))
{var ex__5510__auto__ = e13859;var statearr_13860_13882 = state_13823;(statearr_13860_13882[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13883 = state_13823;
state_13823 = G__13883;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13823){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13861 = f__5522__auto__.call(null);(statearr_13861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13861;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13943){var state_val_13944 = (state_13943[1]);if((state_val_13944 === 1))
{var state_13943__$1 = state_13943;var statearr_13945_13965 = state_13943__$1;(statearr_13945_13965[2] = null);
(statearr_13945_13965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 2))
{var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13943__$1,4,from);
} else
{if((state_val_13944 === 3))
{var inst_13941 = (state_13943[2]);var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13943__$1,inst_13941);
} else
{if((state_val_13944 === 4))
{var inst_13926 = (state_13943[7]);var inst_13926__$1 = (state_13943[2]);var inst_13927 = (inst_13926__$1 == null);var state_13943__$1 = (function (){var statearr_13946 = state_13943;(statearr_13946[7] = inst_13926__$1);
return statearr_13946;
})();if(cljs.core.truth_(inst_13927))
{var statearr_13947_13966 = state_13943__$1;(statearr_13947_13966[1] = 5);
} else
{var statearr_13948_13967 = state_13943__$1;(statearr_13948_13967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 5))
{var state_13943__$1 = state_13943;if(cljs.core.truth_(close_QMARK_))
{var statearr_13949_13968 = state_13943__$1;(statearr_13949_13968[1] = 8);
} else
{var statearr_13950_13969 = state_13943__$1;(statearr_13950_13969[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 6))
{var inst_13926 = (state_13943[7]);var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13943__$1,11,to,inst_13926);
} else
{if((state_val_13944 === 7))
{var inst_13939 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13951_13970 = state_13943__$1;(statearr_13951_13970[2] = inst_13939);
(statearr_13951_13970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 8))
{var inst_13930 = cljs.core.async.close_BANG_.call(null,to);var state_13943__$1 = state_13943;var statearr_13952_13971 = state_13943__$1;(statearr_13952_13971[2] = inst_13930);
(statearr_13952_13971[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 9))
{var state_13943__$1 = state_13943;var statearr_13953_13972 = state_13943__$1;(statearr_13953_13972[2] = null);
(statearr_13953_13972[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 10))
{var inst_13933 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13954_13973 = state_13943__$1;(statearr_13954_13973[2] = inst_13933);
(statearr_13954_13973[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 11))
{var inst_13936 = (state_13943[2]);var state_13943__$1 = (function (){var statearr_13955 = state_13943;(statearr_13955[8] = inst_13936);
return statearr_13955;
})();var statearr_13956_13974 = state_13943__$1;(statearr_13956_13974[2] = null);
(statearr_13956_13974[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13960 = [null,null,null,null,null,null,null,null,null];(statearr_13960[0] = state_machine__5507__auto__);
(statearr_13960[1] = 1);
return statearr_13960;
});
var state_machine__5507__auto____1 = (function (state_13943){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13961){if((e13961 instanceof Object))
{var ex__5510__auto__ = e13961;var statearr_13962_13975 = state_13943;(statearr_13962_13975[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13943);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13976 = state_13943;
state_13943 = G__13976;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13943){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13963 = f__5522__auto__.call(null);(statearr_13963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13964);
return statearr_13963;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14041){var state_val_14042 = (state_14041[1]);if((state_val_14042 === 1))
{var state_14041__$1 = state_14041;var statearr_14043_14064 = state_14041__$1;(statearr_14043_14064[2] = null);
(statearr_14043_14064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 2))
{var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14041__$1,4,ch);
} else
{if((state_val_14042 === 3))
{var inst_14039 = (state_14041[2]);var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14041__$1,inst_14039);
} else
{if((state_val_14042 === 4))
{var inst_14022 = (state_14041[7]);var inst_14022__$1 = (state_14041[2]);var inst_14023 = (inst_14022__$1 == null);var state_14041__$1 = (function (){var statearr_14044 = state_14041;(statearr_14044[7] = inst_14022__$1);
return statearr_14044;
})();if(cljs.core.truth_(inst_14023))
{var statearr_14045_14065 = state_14041__$1;(statearr_14045_14065[1] = 5);
} else
{var statearr_14046_14066 = state_14041__$1;(statearr_14046_14066[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 5))
{var inst_14025 = cljs.core.async.close_BANG_.call(null,tc);var inst_14026 = cljs.core.async.close_BANG_.call(null,fc);var state_14041__$1 = (function (){var statearr_14047 = state_14041;(statearr_14047[8] = inst_14025);
return statearr_14047;
})();var statearr_14048_14067 = state_14041__$1;(statearr_14048_14067[2] = inst_14026);
(statearr_14048_14067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 6))
{var inst_14022 = (state_14041[7]);var inst_14028 = p.call(null,inst_14022);var state_14041__$1 = state_14041;if(cljs.core.truth_(inst_14028))
{var statearr_14049_14068 = state_14041__$1;(statearr_14049_14068[1] = 9);
} else
{var statearr_14050_14069 = state_14041__$1;(statearr_14050_14069[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 7))
{var inst_14037 = (state_14041[2]);var state_14041__$1 = state_14041;var statearr_14051_14070 = state_14041__$1;(statearr_14051_14070[2] = inst_14037);
(statearr_14051_14070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 8))
{var inst_14034 = (state_14041[2]);var state_14041__$1 = (function (){var statearr_14052 = state_14041;(statearr_14052[9] = inst_14034);
return statearr_14052;
})();var statearr_14053_14071 = state_14041__$1;(statearr_14053_14071[2] = null);
(statearr_14053_14071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 9))
{var state_14041__$1 = state_14041;var statearr_14054_14072 = state_14041__$1;(statearr_14054_14072[2] = tc);
(statearr_14054_14072[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 10))
{var state_14041__$1 = state_14041;var statearr_14055_14073 = state_14041__$1;(statearr_14055_14073[2] = fc);
(statearr_14055_14073[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14042 === 11))
{var inst_14022 = (state_14041[7]);var inst_14032 = (state_14041[2]);var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14041__$1,8,inst_14032,inst_14022);
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
var state_machine__5507__auto____0 = (function (){var statearr_14059 = [null,null,null,null,null,null,null,null,null,null];(statearr_14059[0] = state_machine__5507__auto__);
(statearr_14059[1] = 1);
return statearr_14059;
});
var state_machine__5507__auto____1 = (function (state_14041){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14060){if((e14060 instanceof Object))
{var ex__5510__auto__ = e14060;var statearr_14061_14074 = state_14041;(statearr_14061_14074[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14075 = state_14041;
state_14041 = G__14075;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14041){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14062 = f__5522__auto__.call(null);(statearr_14062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14063);
return statearr_14062;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14122){var state_val_14123 = (state_14122[1]);if((state_val_14123 === 7))
{var inst_14118 = (state_14122[2]);var state_14122__$1 = state_14122;var statearr_14124_14140 = state_14122__$1;(statearr_14124_14140[2] = inst_14118);
(statearr_14124_14140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 6))
{var inst_14108 = (state_14122[7]);var inst_14111 = (state_14122[8]);var inst_14115 = f.call(null,inst_14108,inst_14111);var inst_14108__$1 = inst_14115;var state_14122__$1 = (function (){var statearr_14125 = state_14122;(statearr_14125[7] = inst_14108__$1);
return statearr_14125;
})();var statearr_14126_14141 = state_14122__$1;(statearr_14126_14141[2] = null);
(statearr_14126_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 5))
{var inst_14108 = (state_14122[7]);var state_14122__$1 = state_14122;var statearr_14127_14142 = state_14122__$1;(statearr_14127_14142[2] = inst_14108);
(statearr_14127_14142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 4))
{var inst_14111 = (state_14122[8]);var inst_14111__$1 = (state_14122[2]);var inst_14112 = (inst_14111__$1 == null);var state_14122__$1 = (function (){var statearr_14128 = state_14122;(statearr_14128[8] = inst_14111__$1);
return statearr_14128;
})();if(cljs.core.truth_(inst_14112))
{var statearr_14129_14143 = state_14122__$1;(statearr_14129_14143[1] = 5);
} else
{var statearr_14130_14144 = state_14122__$1;(statearr_14130_14144[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 3))
{var inst_14120 = (state_14122[2]);var state_14122__$1 = state_14122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14122__$1,inst_14120);
} else
{if((state_val_14123 === 2))
{var state_14122__$1 = state_14122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14122__$1,4,ch);
} else
{if((state_val_14123 === 1))
{var inst_14108 = init;var state_14122__$1 = (function (){var statearr_14131 = state_14122;(statearr_14131[7] = inst_14108);
return statearr_14131;
})();var statearr_14132_14145 = state_14122__$1;(statearr_14132_14145[2] = null);
(statearr_14132_14145[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14136 = [null,null,null,null,null,null,null,null,null];(statearr_14136[0] = state_machine__5507__auto__);
(statearr_14136[1] = 1);
return statearr_14136;
});
var state_machine__5507__auto____1 = (function (state_14122){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14122);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14137){if((e14137 instanceof Object))
{var ex__5510__auto__ = e14137;var statearr_14138_14146 = state_14122;(statearr_14138_14146[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14147 = state_14122;
state_14122 = G__14147;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14122){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14139 = f__5522__auto__.call(null);(statearr_14139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14139;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14209){var state_val_14210 = (state_14209[1]);if((state_val_14210 === 1))
{var inst_14189 = cljs.core.seq.call(null,coll);var inst_14190 = inst_14189;var state_14209__$1 = (function (){var statearr_14211 = state_14209;(statearr_14211[7] = inst_14190);
return statearr_14211;
})();var statearr_14212_14230 = state_14209__$1;(statearr_14212_14230[2] = null);
(statearr_14212_14230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 2))
{var inst_14190 = (state_14209[7]);var state_14209__$1 = state_14209;if(cljs.core.truth_(inst_14190))
{var statearr_14213_14231 = state_14209__$1;(statearr_14213_14231[1] = 4);
} else
{var statearr_14214_14232 = state_14209__$1;(statearr_14214_14232[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 3))
{var inst_14207 = (state_14209[2]);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14209__$1,inst_14207);
} else
{if((state_val_14210 === 4))
{var inst_14190 = (state_14209[7]);var inst_14193 = cljs.core.first.call(null,inst_14190);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14209__$1,7,ch,inst_14193);
} else
{if((state_val_14210 === 5))
{var state_14209__$1 = state_14209;if(cljs.core.truth_(close_QMARK_))
{var statearr_14215_14233 = state_14209__$1;(statearr_14215_14233[1] = 8);
} else
{var statearr_14216_14234 = state_14209__$1;(statearr_14216_14234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 6))
{var inst_14205 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14217_14235 = state_14209__$1;(statearr_14217_14235[2] = inst_14205);
(statearr_14217_14235[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 7))
{var inst_14190 = (state_14209[7]);var inst_14195 = (state_14209[2]);var inst_14196 = cljs.core.next.call(null,inst_14190);var inst_14190__$1 = inst_14196;var state_14209__$1 = (function (){var statearr_14218 = state_14209;(statearr_14218[7] = inst_14190__$1);
(statearr_14218[8] = inst_14195);
return statearr_14218;
})();var statearr_14219_14236 = state_14209__$1;(statearr_14219_14236[2] = null);
(statearr_14219_14236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 8))
{var inst_14200 = cljs.core.async.close_BANG_.call(null,ch);var state_14209__$1 = state_14209;var statearr_14220_14237 = state_14209__$1;(statearr_14220_14237[2] = inst_14200);
(statearr_14220_14237[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 9))
{var state_14209__$1 = state_14209;var statearr_14221_14238 = state_14209__$1;(statearr_14221_14238[2] = null);
(statearr_14221_14238[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 10))
{var inst_14203 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14222_14239 = state_14209__$1;(statearr_14222_14239[2] = inst_14203);
(statearr_14222_14239[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14226 = [null,null,null,null,null,null,null,null,null];(statearr_14226[0] = state_machine__5507__auto__);
(statearr_14226[1] = 1);
return statearr_14226;
});
var state_machine__5507__auto____1 = (function (state_14209){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14227){if((e14227 instanceof Object))
{var ex__5510__auto__ = e14227;var statearr_14228_14240 = state_14209;(statearr_14228_14240[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14241 = state_14209;
state_14209 = G__14241;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14209){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14229 = f__5522__auto__.call(null);(statearr_14229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14229;
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
cljs.core.async.Mux = (function (){var obj14243 = {};return obj14243;
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
cljs.core.async.Mult = (function (){var obj14245 = {};return obj14245;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14469 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14469 = (function (cs,ch,mult,meta14470){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14470 = meta14470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14469.cljs$lang$type = true;
cljs.core.async.t14469.cljs$lang$ctorStr = "cljs.core.async/t14469";
cljs.core.async.t14469.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14469");
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14469.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14471){var self__ = this;
var _14471__$1 = this;return self__.meta14470;
});})(cs))
;
cljs.core.async.t14469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14471,meta14470__$1){var self__ = this;
var _14471__$1 = this;return (new cljs.core.async.t14469(self__.cs,self__.ch,self__.mult,meta14470__$1));
});})(cs))
;
cljs.core.async.__GT_t14469 = ((function (cs){
return (function __GT_t14469(cs__$1,ch__$1,mult__$1,meta14470){return (new cljs.core.async.t14469(cs__$1,ch__$1,mult__$1,meta14470));
});})(cs))
;
}
return (new cljs.core.async.t14469(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14606){var state_val_14607 = (state_14606[1]);if((state_val_14607 === 32))
{var inst_14550 = (state_14606[7]);var inst_14474 = (state_14606[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14606,31,Object,null,30);var inst_14557 = cljs.core.async.put_BANG_.call(null,inst_14550,inst_14474,done);var state_14606__$1 = state_14606;var statearr_14608_14693 = state_14606__$1;(statearr_14608_14693[2] = inst_14557);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 1))
{var state_14606__$1 = state_14606;var statearr_14609_14694 = state_14606__$1;(statearr_14609_14694[2] = null);
(statearr_14609_14694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 33))
{var inst_14563 = (state_14606[9]);var inst_14565 = cljs.core.chunked_seq_QMARK_.call(null,inst_14563);var state_14606__$1 = state_14606;if(inst_14565)
{var statearr_14610_14695 = state_14606__$1;(statearr_14610_14695[1] = 36);
} else
{var statearr_14611_14696 = state_14606__$1;(statearr_14611_14696[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 2))
{var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,4,ch);
} else
{if((state_val_14607 === 34))
{var state_14606__$1 = state_14606;var statearr_14612_14697 = state_14606__$1;(statearr_14612_14697[2] = null);
(statearr_14612_14697[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 3))
{var inst_14604 = (state_14606[2]);var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14606__$1,inst_14604);
} else
{if((state_val_14607 === 35))
{var inst_14588 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14613_14698 = state_14606__$1;(statearr_14613_14698[2] = inst_14588);
(statearr_14613_14698[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 4))
{var inst_14474 = (state_14606[8]);var inst_14474__$1 = (state_14606[2]);var inst_14475 = (inst_14474__$1 == null);var state_14606__$1 = (function (){var statearr_14614 = state_14606;(statearr_14614[8] = inst_14474__$1);
return statearr_14614;
})();if(cljs.core.truth_(inst_14475))
{var statearr_14615_14699 = state_14606__$1;(statearr_14615_14699[1] = 5);
} else
{var statearr_14616_14700 = state_14606__$1;(statearr_14616_14700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 36))
{var inst_14563 = (state_14606[9]);var inst_14567 = cljs.core.chunk_first.call(null,inst_14563);var inst_14568 = cljs.core.chunk_rest.call(null,inst_14563);var inst_14569 = cljs.core.count.call(null,inst_14567);var inst_14542 = inst_14568;var inst_14543 = inst_14567;var inst_14544 = inst_14569;var inst_14545 = 0;var state_14606__$1 = (function (){var statearr_14617 = state_14606;(statearr_14617[10] = inst_14542);
(statearr_14617[11] = inst_14545);
(statearr_14617[12] = inst_14544);
(statearr_14617[13] = inst_14543);
return statearr_14617;
})();var statearr_14618_14701 = state_14606__$1;(statearr_14618_14701[2] = null);
(statearr_14618_14701[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 5))
{var inst_14481 = cljs.core.deref.call(null,cs);var inst_14482 = cljs.core.seq.call(null,inst_14481);var inst_14483 = inst_14482;var inst_14484 = null;var inst_14485 = 0;var inst_14486 = 0;var state_14606__$1 = (function (){var statearr_14619 = state_14606;(statearr_14619[14] = inst_14486);
(statearr_14619[15] = inst_14484);
(statearr_14619[16] = inst_14485);
(statearr_14619[17] = inst_14483);
return statearr_14619;
})();var statearr_14620_14702 = state_14606__$1;(statearr_14620_14702[2] = null);
(statearr_14620_14702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 37))
{var inst_14563 = (state_14606[9]);var inst_14572 = cljs.core.first.call(null,inst_14563);var state_14606__$1 = (function (){var statearr_14621 = state_14606;(statearr_14621[18] = inst_14572);
return statearr_14621;
})();var statearr_14622_14703 = state_14606__$1;(statearr_14622_14703[2] = null);
(statearr_14622_14703[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 6))
{var inst_14534 = (state_14606[19]);var inst_14533 = cljs.core.deref.call(null,cs);var inst_14534__$1 = cljs.core.keys.call(null,inst_14533);var inst_14535 = cljs.core.count.call(null,inst_14534__$1);var inst_14536 = cljs.core.reset_BANG_.call(null,dctr,inst_14535);var inst_14541 = cljs.core.seq.call(null,inst_14534__$1);var inst_14542 = inst_14541;var inst_14543 = null;var inst_14544 = 0;var inst_14545 = 0;var state_14606__$1 = (function (){var statearr_14623 = state_14606;(statearr_14623[19] = inst_14534__$1);
(statearr_14623[10] = inst_14542);
(statearr_14623[20] = inst_14536);
(statearr_14623[11] = inst_14545);
(statearr_14623[12] = inst_14544);
(statearr_14623[13] = inst_14543);
return statearr_14623;
})();var statearr_14624_14704 = state_14606__$1;(statearr_14624_14704[2] = null);
(statearr_14624_14704[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 38))
{var inst_14585 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14625_14705 = state_14606__$1;(statearr_14625_14705[2] = inst_14585);
(statearr_14625_14705[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 7))
{var inst_14602 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14626_14706 = state_14606__$1;(statearr_14626_14706[2] = inst_14602);
(statearr_14626_14706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 39))
{var inst_14563 = (state_14606[9]);var inst_14581 = (state_14606[2]);var inst_14582 = cljs.core.next.call(null,inst_14563);var inst_14542 = inst_14582;var inst_14543 = null;var inst_14544 = 0;var inst_14545 = 0;var state_14606__$1 = (function (){var statearr_14627 = state_14606;(statearr_14627[10] = inst_14542);
(statearr_14627[21] = inst_14581);
(statearr_14627[11] = inst_14545);
(statearr_14627[12] = inst_14544);
(statearr_14627[13] = inst_14543);
return statearr_14627;
})();var statearr_14628_14707 = state_14606__$1;(statearr_14628_14707[2] = null);
(statearr_14628_14707[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 8))
{var inst_14486 = (state_14606[14]);var inst_14485 = (state_14606[16]);var inst_14488 = (inst_14486 < inst_14485);var inst_14489 = inst_14488;var state_14606__$1 = state_14606;if(cljs.core.truth_(inst_14489))
{var statearr_14629_14708 = state_14606__$1;(statearr_14629_14708[1] = 10);
} else
{var statearr_14630_14709 = state_14606__$1;(statearr_14630_14709[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 40))
{var inst_14572 = (state_14606[18]);var inst_14573 = (state_14606[2]);var inst_14574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14575 = cljs.core.async.untap_STAR_.call(null,m,inst_14572);var state_14606__$1 = (function (){var statearr_14631 = state_14606;(statearr_14631[22] = inst_14574);
(statearr_14631[23] = inst_14573);
return statearr_14631;
})();var statearr_14632_14710 = state_14606__$1;(statearr_14632_14710[2] = inst_14575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 9))
{var inst_14531 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14633_14711 = state_14606__$1;(statearr_14633_14711[2] = inst_14531);
(statearr_14633_14711[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 41))
{var inst_14572 = (state_14606[18]);var inst_14474 = (state_14606[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14606,40,Object,null,39);var inst_14579 = cljs.core.async.put_BANG_.call(null,inst_14572,inst_14474,done);var state_14606__$1 = state_14606;var statearr_14634_14712 = state_14606__$1;(statearr_14634_14712[2] = inst_14579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 10))
{var inst_14486 = (state_14606[14]);var inst_14484 = (state_14606[15]);var inst_14492 = cljs.core._nth.call(null,inst_14484,inst_14486);var inst_14493 = cljs.core.nth.call(null,inst_14492,0,null);var inst_14494 = cljs.core.nth.call(null,inst_14492,1,null);var state_14606__$1 = (function (){var statearr_14635 = state_14606;(statearr_14635[24] = inst_14493);
return statearr_14635;
})();if(cljs.core.truth_(inst_14494))
{var statearr_14636_14713 = state_14606__$1;(statearr_14636_14713[1] = 13);
} else
{var statearr_14637_14714 = state_14606__$1;(statearr_14637_14714[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 42))
{var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,45,dchan);
} else
{if((state_val_14607 === 11))
{var inst_14483 = (state_14606[17]);var inst_14503 = (state_14606[25]);var inst_14503__$1 = cljs.core.seq.call(null,inst_14483);var state_14606__$1 = (function (){var statearr_14638 = state_14606;(statearr_14638[25] = inst_14503__$1);
return statearr_14638;
})();if(inst_14503__$1)
{var statearr_14639_14715 = state_14606__$1;(statearr_14639_14715[1] = 16);
} else
{var statearr_14640_14716 = state_14606__$1;(statearr_14640_14716[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 43))
{var state_14606__$1 = state_14606;var statearr_14641_14717 = state_14606__$1;(statearr_14641_14717[2] = null);
(statearr_14641_14717[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 12))
{var inst_14529 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14642_14718 = state_14606__$1;(statearr_14642_14718[2] = inst_14529);
(statearr_14642_14718[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 44))
{var inst_14599 = (state_14606[2]);var state_14606__$1 = (function (){var statearr_14643 = state_14606;(statearr_14643[26] = inst_14599);
return statearr_14643;
})();var statearr_14644_14719 = state_14606__$1;(statearr_14644_14719[2] = null);
(statearr_14644_14719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 13))
{var inst_14493 = (state_14606[24]);var inst_14496 = cljs.core.async.close_BANG_.call(null,inst_14493);var state_14606__$1 = state_14606;var statearr_14645_14720 = state_14606__$1;(statearr_14645_14720[2] = inst_14496);
(statearr_14645_14720[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 45))
{var inst_14596 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14649_14721 = state_14606__$1;(statearr_14649_14721[2] = inst_14596);
(statearr_14649_14721[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 14))
{var state_14606__$1 = state_14606;var statearr_14650_14722 = state_14606__$1;(statearr_14650_14722[2] = null);
(statearr_14650_14722[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 15))
{var inst_14486 = (state_14606[14]);var inst_14484 = (state_14606[15]);var inst_14485 = (state_14606[16]);var inst_14483 = (state_14606[17]);var inst_14499 = (state_14606[2]);var inst_14500 = (inst_14486 + 1);var tmp14646 = inst_14484;var tmp14647 = inst_14485;var tmp14648 = inst_14483;var inst_14483__$1 = tmp14648;var inst_14484__$1 = tmp14646;var inst_14485__$1 = tmp14647;var inst_14486__$1 = inst_14500;var state_14606__$1 = (function (){var statearr_14651 = state_14606;(statearr_14651[14] = inst_14486__$1);
(statearr_14651[15] = inst_14484__$1);
(statearr_14651[16] = inst_14485__$1);
(statearr_14651[17] = inst_14483__$1);
(statearr_14651[27] = inst_14499);
return statearr_14651;
})();var statearr_14652_14723 = state_14606__$1;(statearr_14652_14723[2] = null);
(statearr_14652_14723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 16))
{var inst_14503 = (state_14606[25]);var inst_14505 = cljs.core.chunked_seq_QMARK_.call(null,inst_14503);var state_14606__$1 = state_14606;if(inst_14505)
{var statearr_14653_14724 = state_14606__$1;(statearr_14653_14724[1] = 19);
} else
{var statearr_14654_14725 = state_14606__$1;(statearr_14654_14725[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 17))
{var state_14606__$1 = state_14606;var statearr_14655_14726 = state_14606__$1;(statearr_14655_14726[2] = null);
(statearr_14655_14726[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 18))
{var inst_14527 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14656_14727 = state_14606__$1;(statearr_14656_14727[2] = inst_14527);
(statearr_14656_14727[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 19))
{var inst_14503 = (state_14606[25]);var inst_14507 = cljs.core.chunk_first.call(null,inst_14503);var inst_14508 = cljs.core.chunk_rest.call(null,inst_14503);var inst_14509 = cljs.core.count.call(null,inst_14507);var inst_14483 = inst_14508;var inst_14484 = inst_14507;var inst_14485 = inst_14509;var inst_14486 = 0;var state_14606__$1 = (function (){var statearr_14657 = state_14606;(statearr_14657[14] = inst_14486);
(statearr_14657[15] = inst_14484);
(statearr_14657[16] = inst_14485);
(statearr_14657[17] = inst_14483);
return statearr_14657;
})();var statearr_14658_14728 = state_14606__$1;(statearr_14658_14728[2] = null);
(statearr_14658_14728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 20))
{var inst_14503 = (state_14606[25]);var inst_14513 = cljs.core.first.call(null,inst_14503);var inst_14514 = cljs.core.nth.call(null,inst_14513,0,null);var inst_14515 = cljs.core.nth.call(null,inst_14513,1,null);var state_14606__$1 = (function (){var statearr_14659 = state_14606;(statearr_14659[28] = inst_14514);
return statearr_14659;
})();if(cljs.core.truth_(inst_14515))
{var statearr_14660_14729 = state_14606__$1;(statearr_14660_14729[1] = 22);
} else
{var statearr_14661_14730 = state_14606__$1;(statearr_14661_14730[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 21))
{var inst_14524 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14662_14731 = state_14606__$1;(statearr_14662_14731[2] = inst_14524);
(statearr_14662_14731[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 22))
{var inst_14514 = (state_14606[28]);var inst_14517 = cljs.core.async.close_BANG_.call(null,inst_14514);var state_14606__$1 = state_14606;var statearr_14663_14732 = state_14606__$1;(statearr_14663_14732[2] = inst_14517);
(statearr_14663_14732[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 23))
{var state_14606__$1 = state_14606;var statearr_14664_14733 = state_14606__$1;(statearr_14664_14733[2] = null);
(statearr_14664_14733[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 24))
{var inst_14503 = (state_14606[25]);var inst_14520 = (state_14606[2]);var inst_14521 = cljs.core.next.call(null,inst_14503);var inst_14483 = inst_14521;var inst_14484 = null;var inst_14485 = 0;var inst_14486 = 0;var state_14606__$1 = (function (){var statearr_14665 = state_14606;(statearr_14665[14] = inst_14486);
(statearr_14665[29] = inst_14520);
(statearr_14665[15] = inst_14484);
(statearr_14665[16] = inst_14485);
(statearr_14665[17] = inst_14483);
return statearr_14665;
})();var statearr_14666_14734 = state_14606__$1;(statearr_14666_14734[2] = null);
(statearr_14666_14734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 25))
{var inst_14545 = (state_14606[11]);var inst_14544 = (state_14606[12]);var inst_14547 = (inst_14545 < inst_14544);var inst_14548 = inst_14547;var state_14606__$1 = state_14606;if(cljs.core.truth_(inst_14548))
{var statearr_14667_14735 = state_14606__$1;(statearr_14667_14735[1] = 27);
} else
{var statearr_14668_14736 = state_14606__$1;(statearr_14668_14736[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 26))
{var inst_14534 = (state_14606[19]);var inst_14592 = (state_14606[2]);var inst_14593 = cljs.core.seq.call(null,inst_14534);var state_14606__$1 = (function (){var statearr_14669 = state_14606;(statearr_14669[30] = inst_14592);
return statearr_14669;
})();if(inst_14593)
{var statearr_14670_14737 = state_14606__$1;(statearr_14670_14737[1] = 42);
} else
{var statearr_14671_14738 = state_14606__$1;(statearr_14671_14738[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 27))
{var inst_14545 = (state_14606[11]);var inst_14543 = (state_14606[13]);var inst_14550 = cljs.core._nth.call(null,inst_14543,inst_14545);var state_14606__$1 = (function (){var statearr_14672 = state_14606;(statearr_14672[7] = inst_14550);
return statearr_14672;
})();var statearr_14673_14739 = state_14606__$1;(statearr_14673_14739[2] = null);
(statearr_14673_14739[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 28))
{var inst_14563 = (state_14606[9]);var inst_14542 = (state_14606[10]);var inst_14563__$1 = cljs.core.seq.call(null,inst_14542);var state_14606__$1 = (function (){var statearr_14677 = state_14606;(statearr_14677[9] = inst_14563__$1);
return statearr_14677;
})();if(inst_14563__$1)
{var statearr_14678_14740 = state_14606__$1;(statearr_14678_14740[1] = 33);
} else
{var statearr_14679_14741 = state_14606__$1;(statearr_14679_14741[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 29))
{var inst_14590 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14680_14742 = state_14606__$1;(statearr_14680_14742[2] = inst_14590);
(statearr_14680_14742[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 30))
{var inst_14542 = (state_14606[10]);var inst_14545 = (state_14606[11]);var inst_14544 = (state_14606[12]);var inst_14543 = (state_14606[13]);var inst_14559 = (state_14606[2]);var inst_14560 = (inst_14545 + 1);var tmp14674 = inst_14542;var tmp14675 = inst_14544;var tmp14676 = inst_14543;var inst_14542__$1 = tmp14674;var inst_14543__$1 = tmp14676;var inst_14544__$1 = tmp14675;var inst_14545__$1 = inst_14560;var state_14606__$1 = (function (){var statearr_14681 = state_14606;(statearr_14681[31] = inst_14559);
(statearr_14681[10] = inst_14542__$1);
(statearr_14681[11] = inst_14545__$1);
(statearr_14681[12] = inst_14544__$1);
(statearr_14681[13] = inst_14543__$1);
return statearr_14681;
})();var statearr_14682_14743 = state_14606__$1;(statearr_14682_14743[2] = null);
(statearr_14682_14743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 31))
{var inst_14550 = (state_14606[7]);var inst_14551 = (state_14606[2]);var inst_14552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14553 = cljs.core.async.untap_STAR_.call(null,m,inst_14550);var state_14606__$1 = (function (){var statearr_14683 = state_14606;(statearr_14683[32] = inst_14552);
(statearr_14683[33] = inst_14551);
return statearr_14683;
})();var statearr_14684_14744 = state_14606__$1;(statearr_14684_14744[2] = inst_14553);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14688[0] = state_machine__5507__auto__);
(statearr_14688[1] = 1);
return statearr_14688;
});
var state_machine__5507__auto____1 = (function (state_14606){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14689){if((e14689 instanceof Object))
{var ex__5510__auto__ = e14689;var statearr_14690_14745 = state_14606;(statearr_14690_14745[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14746 = state_14606;
state_14606 = G__14746;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14606){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14691 = f__5522__auto__.call(null);(statearr_14691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14692);
return statearr_14691;
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
cljs.core.async.Mix = (function (){var obj14748 = {};return obj14748;
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
;var m = (function (){if(typeof cljs.core.async.t14858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14858 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14859){
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
this.meta14859 = meta14859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14858.cljs$lang$type = true;
cljs.core.async.t14858.cljs$lang$ctorStr = "cljs.core.async/t14858";
cljs.core.async.t14858.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14858");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14860){var self__ = this;
var _14860__$1 = this;return self__.meta14859;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14860,meta14859__$1){var self__ = this;
var _14860__$1 = this;return (new cljs.core.async.t14858(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14859__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14858 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14858(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14859){return (new cljs.core.async.t14858(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14859));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14858(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14967 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14925){var state_val_14926 = (state_14925[1]);if((state_val_14926 === 1))
{var inst_14864 = (state_14925[7]);var inst_14864__$1 = calc_state.call(null);var inst_14865 = cljs.core.seq_QMARK_.call(null,inst_14864__$1);var state_14925__$1 = (function (){var statearr_14927 = state_14925;(statearr_14927[7] = inst_14864__$1);
return statearr_14927;
})();if(inst_14865)
{var statearr_14928_14968 = state_14925__$1;(statearr_14928_14968[1] = 2);
} else
{var statearr_14929_14969 = state_14925__$1;(statearr_14929_14969[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 2))
{var inst_14864 = (state_14925[7]);var inst_14867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14864);var state_14925__$1 = state_14925;var statearr_14930_14970 = state_14925__$1;(statearr_14930_14970[2] = inst_14867);
(statearr_14930_14970[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 3))
{var inst_14864 = (state_14925[7]);var state_14925__$1 = state_14925;var statearr_14931_14971 = state_14925__$1;(statearr_14931_14971[2] = inst_14864);
(statearr_14931_14971[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 4))
{var inst_14864 = (state_14925[7]);var inst_14870 = (state_14925[2]);var inst_14871 = cljs.core.get.call(null,inst_14870,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14872 = cljs.core.get.call(null,inst_14870,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14873 = cljs.core.get.call(null,inst_14870,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14874 = inst_14864;var state_14925__$1 = (function (){var statearr_14932 = state_14925;(statearr_14932[8] = inst_14874);
(statearr_14932[9] = inst_14873);
(statearr_14932[10] = inst_14871);
(statearr_14932[11] = inst_14872);
return statearr_14932;
})();var statearr_14933_14972 = state_14925__$1;(statearr_14933_14972[2] = null);
(statearr_14933_14972[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 5))
{var inst_14874 = (state_14925[8]);var inst_14877 = cljs.core.seq_QMARK_.call(null,inst_14874);var state_14925__$1 = state_14925;if(inst_14877)
{var statearr_14934_14973 = state_14925__$1;(statearr_14934_14973[1] = 7);
} else
{var statearr_14935_14974 = state_14925__$1;(statearr_14935_14974[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 6))
{var inst_14923 = (state_14925[2]);var state_14925__$1 = state_14925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14925__$1,inst_14923);
} else
{if((state_val_14926 === 7))
{var inst_14874 = (state_14925[8]);var inst_14879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14874);var state_14925__$1 = state_14925;var statearr_14936_14975 = state_14925__$1;(statearr_14936_14975[2] = inst_14879);
(statearr_14936_14975[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 8))
{var inst_14874 = (state_14925[8]);var state_14925__$1 = state_14925;var statearr_14937_14976 = state_14925__$1;(statearr_14937_14976[2] = inst_14874);
(statearr_14937_14976[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 9))
{var inst_14882 = (state_14925[12]);var inst_14882__$1 = (state_14925[2]);var inst_14883 = cljs.core.get.call(null,inst_14882__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14884 = cljs.core.get.call(null,inst_14882__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14885 = cljs.core.get.call(null,inst_14882__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14925__$1 = (function (){var statearr_14938 = state_14925;(statearr_14938[12] = inst_14882__$1);
(statearr_14938[13] = inst_14885);
(statearr_14938[14] = inst_14884);
return statearr_14938;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14925__$1,10,inst_14883);
} else
{if((state_val_14926 === 10))
{var inst_14889 = (state_14925[15]);var inst_14890 = (state_14925[16]);var inst_14888 = (state_14925[2]);var inst_14889__$1 = cljs.core.nth.call(null,inst_14888,0,null);var inst_14890__$1 = cljs.core.nth.call(null,inst_14888,1,null);var inst_14891 = (inst_14889__$1 == null);var inst_14892 = cljs.core._EQ_.call(null,inst_14890__$1,change);var inst_14893 = (inst_14891) || (inst_14892);var state_14925__$1 = (function (){var statearr_14939 = state_14925;(statearr_14939[15] = inst_14889__$1);
(statearr_14939[16] = inst_14890__$1);
return statearr_14939;
})();if(cljs.core.truth_(inst_14893))
{var statearr_14940_14977 = state_14925__$1;(statearr_14940_14977[1] = 11);
} else
{var statearr_14941_14978 = state_14925__$1;(statearr_14941_14978[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 11))
{var inst_14889 = (state_14925[15]);var inst_14895 = (inst_14889 == null);var state_14925__$1 = state_14925;if(cljs.core.truth_(inst_14895))
{var statearr_14942_14979 = state_14925__$1;(statearr_14942_14979[1] = 14);
} else
{var statearr_14943_14980 = state_14925__$1;(statearr_14943_14980[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 12))
{var inst_14904 = (state_14925[17]);var inst_14890 = (state_14925[16]);var inst_14885 = (state_14925[13]);var inst_14904__$1 = inst_14885.call(null,inst_14890);var state_14925__$1 = (function (){var statearr_14944 = state_14925;(statearr_14944[17] = inst_14904__$1);
return statearr_14944;
})();if(cljs.core.truth_(inst_14904__$1))
{var statearr_14945_14981 = state_14925__$1;(statearr_14945_14981[1] = 17);
} else
{var statearr_14946_14982 = state_14925__$1;(statearr_14946_14982[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 13))
{var inst_14921 = (state_14925[2]);var state_14925__$1 = state_14925;var statearr_14947_14983 = state_14925__$1;(statearr_14947_14983[2] = inst_14921);
(statearr_14947_14983[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 14))
{var inst_14890 = (state_14925[16]);var inst_14897 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14890);var state_14925__$1 = state_14925;var statearr_14948_14984 = state_14925__$1;(statearr_14948_14984[2] = inst_14897);
(statearr_14948_14984[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 15))
{var state_14925__$1 = state_14925;var statearr_14949_14985 = state_14925__$1;(statearr_14949_14985[2] = null);
(statearr_14949_14985[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 16))
{var inst_14900 = (state_14925[2]);var inst_14901 = calc_state.call(null);var inst_14874 = inst_14901;var state_14925__$1 = (function (){var statearr_14950 = state_14925;(statearr_14950[18] = inst_14900);
(statearr_14950[8] = inst_14874);
return statearr_14950;
})();var statearr_14951_14986 = state_14925__$1;(statearr_14951_14986[2] = null);
(statearr_14951_14986[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 17))
{var inst_14904 = (state_14925[17]);var state_14925__$1 = state_14925;var statearr_14952_14987 = state_14925__$1;(statearr_14952_14987[2] = inst_14904);
(statearr_14952_14987[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 18))
{var inst_14890 = (state_14925[16]);var inst_14885 = (state_14925[13]);var inst_14884 = (state_14925[14]);var inst_14907 = cljs.core.empty_QMARK_.call(null,inst_14885);var inst_14908 = inst_14884.call(null,inst_14890);var inst_14909 = cljs.core.not.call(null,inst_14908);var inst_14910 = (inst_14907) && (inst_14909);var state_14925__$1 = state_14925;var statearr_14953_14988 = state_14925__$1;(statearr_14953_14988[2] = inst_14910);
(statearr_14953_14988[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 19))
{var inst_14912 = (state_14925[2]);var state_14925__$1 = state_14925;if(cljs.core.truth_(inst_14912))
{var statearr_14954_14989 = state_14925__$1;(statearr_14954_14989[1] = 20);
} else
{var statearr_14955_14990 = state_14925__$1;(statearr_14955_14990[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 20))
{var inst_14889 = (state_14925[15]);var state_14925__$1 = state_14925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14925__$1,23,out,inst_14889);
} else
{if((state_val_14926 === 21))
{var state_14925__$1 = state_14925;var statearr_14956_14991 = state_14925__$1;(statearr_14956_14991[2] = null);
(statearr_14956_14991[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 22))
{var inst_14882 = (state_14925[12]);var inst_14918 = (state_14925[2]);var inst_14874 = inst_14882;var state_14925__$1 = (function (){var statearr_14957 = state_14925;(statearr_14957[19] = inst_14918);
(statearr_14957[8] = inst_14874);
return statearr_14957;
})();var statearr_14958_14992 = state_14925__$1;(statearr_14958_14992[2] = null);
(statearr_14958_14992[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14926 === 23))
{var inst_14915 = (state_14925[2]);var state_14925__$1 = state_14925;var statearr_14959_14993 = state_14925__$1;(statearr_14959_14993[2] = inst_14915);
(statearr_14959_14993[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14963[0] = state_machine__5507__auto__);
(statearr_14963[1] = 1);
return statearr_14963;
});
var state_machine__5507__auto____1 = (function (state_14925){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14964){if((e14964 instanceof Object))
{var ex__5510__auto__ = e14964;var statearr_14965_14994 = state_14925;(statearr_14965_14994[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14995 = state_14925;
state_14925 = G__14995;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14925){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14966 = f__5522__auto__.call(null);(statearr_14966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14967);
return statearr_14966;
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
cljs.core.async.Pub = (function (){var obj14997 = {};return obj14997;
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
return (function (p1__14998_SHARP_){if(cljs.core.truth_(p1__14998_SHARP_.call(null,topic)))
{return p1__14998_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14998_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15123 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15124){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15124 = meta15124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15123.cljs$lang$type = true;
cljs.core.async.t15123.cljs$lang$ctorStr = "cljs.core.async/t15123";
cljs.core.async.t15123.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15123");
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15123.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15125){var self__ = this;
var _15125__$1 = this;return self__.meta15124;
});})(mults,ensure_mult))
;
cljs.core.async.t15123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15125,meta15124__$1){var self__ = this;
var _15125__$1 = this;return (new cljs.core.async.t15123(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15124__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15123 = ((function (mults,ensure_mult){
return (function __GT_t15123(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15124){return (new cljs.core.async.t15123(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15124));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15123(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15199){var state_val_15200 = (state_15199[1]);if((state_val_15200 === 1))
{var state_15199__$1 = state_15199;var statearr_15201_15248 = state_15199__$1;(statearr_15201_15248[2] = null);
(statearr_15201_15248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 2))
{var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15199__$1,4,ch);
} else
{if((state_val_15200 === 3))
{var inst_15197 = (state_15199[2]);var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15199__$1,inst_15197);
} else
{if((state_val_15200 === 4))
{var inst_15128 = (state_15199[7]);var inst_15128__$1 = (state_15199[2]);var inst_15129 = (inst_15128__$1 == null);var state_15199__$1 = (function (){var statearr_15202 = state_15199;(statearr_15202[7] = inst_15128__$1);
return statearr_15202;
})();if(cljs.core.truth_(inst_15129))
{var statearr_15203_15249 = state_15199__$1;(statearr_15203_15249[1] = 5);
} else
{var statearr_15204_15250 = state_15199__$1;(statearr_15204_15250[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 5))
{var inst_15135 = cljs.core.deref.call(null,mults);var inst_15136 = cljs.core.vals.call(null,inst_15135);var inst_15137 = cljs.core.seq.call(null,inst_15136);var inst_15138 = inst_15137;var inst_15139 = null;var inst_15140 = 0;var inst_15141 = 0;var state_15199__$1 = (function (){var statearr_15205 = state_15199;(statearr_15205[8] = inst_15141);
(statearr_15205[9] = inst_15140);
(statearr_15205[10] = inst_15139);
(statearr_15205[11] = inst_15138);
return statearr_15205;
})();var statearr_15206_15251 = state_15199__$1;(statearr_15206_15251[2] = null);
(statearr_15206_15251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 6))
{var inst_15178 = (state_15199[12]);var inst_15176 = (state_15199[13]);var inst_15128 = (state_15199[7]);var inst_15176__$1 = topic_fn.call(null,inst_15128);var inst_15177 = cljs.core.deref.call(null,mults);var inst_15178__$1 = cljs.core.get.call(null,inst_15177,inst_15176__$1);var state_15199__$1 = (function (){var statearr_15207 = state_15199;(statearr_15207[12] = inst_15178__$1);
(statearr_15207[13] = inst_15176__$1);
return statearr_15207;
})();if(cljs.core.truth_(inst_15178__$1))
{var statearr_15208_15252 = state_15199__$1;(statearr_15208_15252[1] = 19);
} else
{var statearr_15209_15253 = state_15199__$1;(statearr_15209_15253[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 7))
{var inst_15195 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15210_15254 = state_15199__$1;(statearr_15210_15254[2] = inst_15195);
(statearr_15210_15254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 8))
{var inst_15141 = (state_15199[8]);var inst_15140 = (state_15199[9]);var inst_15143 = (inst_15141 < inst_15140);var inst_15144 = inst_15143;var state_15199__$1 = state_15199;if(cljs.core.truth_(inst_15144))
{var statearr_15214_15255 = state_15199__$1;(statearr_15214_15255[1] = 10);
} else
{var statearr_15215_15256 = state_15199__$1;(statearr_15215_15256[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 9))
{var inst_15174 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15216_15257 = state_15199__$1;(statearr_15216_15257[2] = inst_15174);
(statearr_15216_15257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 10))
{var inst_15141 = (state_15199[8]);var inst_15140 = (state_15199[9]);var inst_15139 = (state_15199[10]);var inst_15138 = (state_15199[11]);var inst_15146 = cljs.core._nth.call(null,inst_15139,inst_15141);var inst_15147 = cljs.core.async.muxch_STAR_.call(null,inst_15146);var inst_15148 = cljs.core.async.close_BANG_.call(null,inst_15147);var inst_15149 = (inst_15141 + 1);var tmp15211 = inst_15140;var tmp15212 = inst_15139;var tmp15213 = inst_15138;var inst_15138__$1 = tmp15213;var inst_15139__$1 = tmp15212;var inst_15140__$1 = tmp15211;var inst_15141__$1 = inst_15149;var state_15199__$1 = (function (){var statearr_15217 = state_15199;(statearr_15217[14] = inst_15148);
(statearr_15217[8] = inst_15141__$1);
(statearr_15217[9] = inst_15140__$1);
(statearr_15217[10] = inst_15139__$1);
(statearr_15217[11] = inst_15138__$1);
return statearr_15217;
})();var statearr_15218_15258 = state_15199__$1;(statearr_15218_15258[2] = null);
(statearr_15218_15258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 11))
{var inst_15138 = (state_15199[11]);var inst_15152 = (state_15199[15]);var inst_15152__$1 = cljs.core.seq.call(null,inst_15138);var state_15199__$1 = (function (){var statearr_15219 = state_15199;(statearr_15219[15] = inst_15152__$1);
return statearr_15219;
})();if(inst_15152__$1)
{var statearr_15220_15259 = state_15199__$1;(statearr_15220_15259[1] = 13);
} else
{var statearr_15221_15260 = state_15199__$1;(statearr_15221_15260[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 12))
{var inst_15172 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15222_15261 = state_15199__$1;(statearr_15222_15261[2] = inst_15172);
(statearr_15222_15261[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 13))
{var inst_15152 = (state_15199[15]);var inst_15154 = cljs.core.chunked_seq_QMARK_.call(null,inst_15152);var state_15199__$1 = state_15199;if(inst_15154)
{var statearr_15223_15262 = state_15199__$1;(statearr_15223_15262[1] = 16);
} else
{var statearr_15224_15263 = state_15199__$1;(statearr_15224_15263[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 14))
{var state_15199__$1 = state_15199;var statearr_15225_15264 = state_15199__$1;(statearr_15225_15264[2] = null);
(statearr_15225_15264[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 15))
{var inst_15170 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15226_15265 = state_15199__$1;(statearr_15226_15265[2] = inst_15170);
(statearr_15226_15265[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 16))
{var inst_15152 = (state_15199[15]);var inst_15156 = cljs.core.chunk_first.call(null,inst_15152);var inst_15157 = cljs.core.chunk_rest.call(null,inst_15152);var inst_15158 = cljs.core.count.call(null,inst_15156);var inst_15138 = inst_15157;var inst_15139 = inst_15156;var inst_15140 = inst_15158;var inst_15141 = 0;var state_15199__$1 = (function (){var statearr_15227 = state_15199;(statearr_15227[8] = inst_15141);
(statearr_15227[9] = inst_15140);
(statearr_15227[10] = inst_15139);
(statearr_15227[11] = inst_15138);
return statearr_15227;
})();var statearr_15228_15266 = state_15199__$1;(statearr_15228_15266[2] = null);
(statearr_15228_15266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 17))
{var inst_15152 = (state_15199[15]);var inst_15161 = cljs.core.first.call(null,inst_15152);var inst_15162 = cljs.core.async.muxch_STAR_.call(null,inst_15161);var inst_15163 = cljs.core.async.close_BANG_.call(null,inst_15162);var inst_15164 = cljs.core.next.call(null,inst_15152);var inst_15138 = inst_15164;var inst_15139 = null;var inst_15140 = 0;var inst_15141 = 0;var state_15199__$1 = (function (){var statearr_15229 = state_15199;(statearr_15229[8] = inst_15141);
(statearr_15229[9] = inst_15140);
(statearr_15229[10] = inst_15139);
(statearr_15229[11] = inst_15138);
(statearr_15229[16] = inst_15163);
return statearr_15229;
})();var statearr_15230_15267 = state_15199__$1;(statearr_15230_15267[2] = null);
(statearr_15230_15267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 18))
{var inst_15167 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15231_15268 = state_15199__$1;(statearr_15231_15268[2] = inst_15167);
(statearr_15231_15268[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 19))
{var state_15199__$1 = state_15199;var statearr_15232_15269 = state_15199__$1;(statearr_15232_15269[2] = null);
(statearr_15232_15269[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 20))
{var state_15199__$1 = state_15199;var statearr_15233_15270 = state_15199__$1;(statearr_15233_15270[2] = null);
(statearr_15233_15270[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 21))
{var inst_15192 = (state_15199[2]);var state_15199__$1 = (function (){var statearr_15234 = state_15199;(statearr_15234[17] = inst_15192);
return statearr_15234;
})();var statearr_15235_15271 = state_15199__$1;(statearr_15235_15271[2] = null);
(statearr_15235_15271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 22))
{var inst_15189 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15236_15272 = state_15199__$1;(statearr_15236_15272[2] = inst_15189);
(statearr_15236_15272[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 23))
{var inst_15176 = (state_15199[13]);var inst_15180 = (state_15199[2]);var inst_15181 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15176);var state_15199__$1 = (function (){var statearr_15237 = state_15199;(statearr_15237[18] = inst_15180);
return statearr_15237;
})();var statearr_15238_15273 = state_15199__$1;(statearr_15238_15273[2] = inst_15181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 24))
{var inst_15178 = (state_15199[12]);var inst_15128 = (state_15199[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15199,23,Object,null,22);var inst_15185 = cljs.core.async.muxch_STAR_.call(null,inst_15178);var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15199__$1,25,inst_15185,inst_15128);
} else
{if((state_val_15200 === 25))
{var inst_15187 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15239_15274 = state_15199__$1;(statearr_15239_15274[2] = inst_15187);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15243[0] = state_machine__5507__auto__);
(statearr_15243[1] = 1);
return statearr_15243;
});
var state_machine__5507__auto____1 = (function (state_15199){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15199);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15244){if((e15244 instanceof Object))
{var ex__5510__auto__ = e15244;var statearr_15245_15275 = state_15199;(statearr_15245_15275[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15276 = state_15199;
state_15199 = G__15276;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15246 = f__5522__auto__.call(null);(statearr_15246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15247);
return statearr_15246;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15413 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15383){var state_val_15384 = (state_15383[1]);if((state_val_15384 === 1))
{var state_15383__$1 = state_15383;var statearr_15385_15414 = state_15383__$1;(statearr_15385_15414[2] = null);
(statearr_15385_15414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 2))
{var inst_15346 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15347 = 0;var state_15383__$1 = (function (){var statearr_15386 = state_15383;(statearr_15386[7] = inst_15347);
(statearr_15386[8] = inst_15346);
return statearr_15386;
})();var statearr_15387_15415 = state_15383__$1;(statearr_15387_15415[2] = null);
(statearr_15387_15415[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 3))
{var inst_15381 = (state_15383[2]);var state_15383__$1 = state_15383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15383__$1,inst_15381);
} else
{if((state_val_15384 === 4))
{var inst_15347 = (state_15383[7]);var inst_15349 = (inst_15347 < cnt);var state_15383__$1 = state_15383;if(cljs.core.truth_(inst_15349))
{var statearr_15388_15416 = state_15383__$1;(statearr_15388_15416[1] = 6);
} else
{var statearr_15389_15417 = state_15383__$1;(statearr_15389_15417[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 5))
{var inst_15367 = (state_15383[2]);var state_15383__$1 = (function (){var statearr_15390 = state_15383;(statearr_15390[9] = inst_15367);
return statearr_15390;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15383__$1,12,dchan);
} else
{if((state_val_15384 === 6))
{var state_15383__$1 = state_15383;var statearr_15391_15418 = state_15383__$1;(statearr_15391_15418[2] = null);
(statearr_15391_15418[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 7))
{var state_15383__$1 = state_15383;var statearr_15392_15419 = state_15383__$1;(statearr_15392_15419[2] = null);
(statearr_15392_15419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 8))
{var inst_15365 = (state_15383[2]);var state_15383__$1 = state_15383;var statearr_15393_15420 = state_15383__$1;(statearr_15393_15420[2] = inst_15365);
(statearr_15393_15420[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 9))
{var inst_15347 = (state_15383[7]);var inst_15360 = (state_15383[2]);var inst_15361 = (inst_15347 + 1);var inst_15347__$1 = inst_15361;var state_15383__$1 = (function (){var statearr_15394 = state_15383;(statearr_15394[7] = inst_15347__$1);
(statearr_15394[10] = inst_15360);
return statearr_15394;
})();var statearr_15395_15421 = state_15383__$1;(statearr_15395_15421[2] = null);
(statearr_15395_15421[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 10))
{var inst_15351 = (state_15383[2]);var inst_15352 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15383__$1 = (function (){var statearr_15396 = state_15383;(statearr_15396[11] = inst_15351);
return statearr_15396;
})();var statearr_15397_15422 = state_15383__$1;(statearr_15397_15422[2] = inst_15352);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15383__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 11))
{var inst_15347 = (state_15383[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15383,10,Object,null,9);var inst_15356 = chs__$1.call(null,inst_15347);var inst_15357 = done.call(null,inst_15347);var inst_15358 = cljs.core.async.take_BANG_.call(null,inst_15356,inst_15357);var state_15383__$1 = state_15383;var statearr_15398_15423 = state_15383__$1;(statearr_15398_15423[2] = inst_15358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15383__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 12))
{var inst_15369 = (state_15383[12]);var inst_15369__$1 = (state_15383[2]);var inst_15370 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15369__$1);var state_15383__$1 = (function (){var statearr_15399 = state_15383;(statearr_15399[12] = inst_15369__$1);
return statearr_15399;
})();if(cljs.core.truth_(inst_15370))
{var statearr_15400_15424 = state_15383__$1;(statearr_15400_15424[1] = 13);
} else
{var statearr_15401_15425 = state_15383__$1;(statearr_15401_15425[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 13))
{var inst_15372 = cljs.core.async.close_BANG_.call(null,out);var state_15383__$1 = state_15383;var statearr_15402_15426 = state_15383__$1;(statearr_15402_15426[2] = inst_15372);
(statearr_15402_15426[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 14))
{var inst_15369 = (state_15383[12]);var inst_15374 = cljs.core.apply.call(null,f,inst_15369);var state_15383__$1 = state_15383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15383__$1,16,out,inst_15374);
} else
{if((state_val_15384 === 15))
{var inst_15379 = (state_15383[2]);var state_15383__$1 = state_15383;var statearr_15403_15427 = state_15383__$1;(statearr_15403_15427[2] = inst_15379);
(statearr_15403_15427[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15384 === 16))
{var inst_15376 = (state_15383[2]);var state_15383__$1 = (function (){var statearr_15404 = state_15383;(statearr_15404[13] = inst_15376);
return statearr_15404;
})();var statearr_15405_15428 = state_15383__$1;(statearr_15405_15428[2] = null);
(statearr_15405_15428[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15409[0] = state_machine__5507__auto__);
(statearr_15409[1] = 1);
return statearr_15409;
});
var state_machine__5507__auto____1 = (function (state_15383){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15383);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15410){if((e15410 instanceof Object))
{var ex__5510__auto__ = e15410;var statearr_15411_15429 = state_15383;(statearr_15411_15429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15410;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15430 = state_15383;
state_15383 = G__15430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15383){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15412 = f__5522__auto__.call(null);(statearr_15412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15413);
return statearr_15412;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15514){var state_val_15515 = (state_15514[1]);if((state_val_15515 === 1))
{var inst_15485 = cljs.core.vec.call(null,chs);var inst_15486 = inst_15485;var state_15514__$1 = (function (){var statearr_15516 = state_15514;(statearr_15516[7] = inst_15486);
return statearr_15516;
})();var statearr_15517_15539 = state_15514__$1;(statearr_15517_15539[2] = null);
(statearr_15517_15539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 2))
{var inst_15486 = (state_15514[7]);var inst_15488 = cljs.core.count.call(null,inst_15486);var inst_15489 = (inst_15488 > 0);var state_15514__$1 = state_15514;if(cljs.core.truth_(inst_15489))
{var statearr_15518_15540 = state_15514__$1;(statearr_15518_15540[1] = 4);
} else
{var statearr_15519_15541 = state_15514__$1;(statearr_15519_15541[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 3))
{var inst_15512 = (state_15514[2]);var state_15514__$1 = state_15514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15514__$1,inst_15512);
} else
{if((state_val_15515 === 4))
{var inst_15486 = (state_15514[7]);var state_15514__$1 = state_15514;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15514__$1,7,inst_15486);
} else
{if((state_val_15515 === 5))
{var inst_15508 = cljs.core.async.close_BANG_.call(null,out);var state_15514__$1 = state_15514;var statearr_15520_15542 = state_15514__$1;(statearr_15520_15542[2] = inst_15508);
(statearr_15520_15542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 6))
{var inst_15510 = (state_15514[2]);var state_15514__$1 = state_15514;var statearr_15521_15543 = state_15514__$1;(statearr_15521_15543[2] = inst_15510);
(statearr_15521_15543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 7))
{var inst_15493 = (state_15514[8]);var inst_15494 = (state_15514[9]);var inst_15493__$1 = (state_15514[2]);var inst_15494__$1 = cljs.core.nth.call(null,inst_15493__$1,0,null);var inst_15495 = cljs.core.nth.call(null,inst_15493__$1,1,null);var inst_15496 = (inst_15494__$1 == null);var state_15514__$1 = (function (){var statearr_15522 = state_15514;(statearr_15522[8] = inst_15493__$1);
(statearr_15522[10] = inst_15495);
(statearr_15522[9] = inst_15494__$1);
return statearr_15522;
})();if(cljs.core.truth_(inst_15496))
{var statearr_15523_15544 = state_15514__$1;(statearr_15523_15544[1] = 8);
} else
{var statearr_15524_15545 = state_15514__$1;(statearr_15524_15545[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 8))
{var inst_15493 = (state_15514[8]);var inst_15495 = (state_15514[10]);var inst_15494 = (state_15514[9]);var inst_15486 = (state_15514[7]);var inst_15498 = (function (){var c = inst_15495;var v = inst_15494;var vec__15491 = inst_15493;var cs = inst_15486;return ((function (c,v,vec__15491,cs,inst_15493,inst_15495,inst_15494,inst_15486,state_val_15515){
return (function (p1__15431_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15431_SHARP_);
});
;})(c,v,vec__15491,cs,inst_15493,inst_15495,inst_15494,inst_15486,state_val_15515))
})();var inst_15499 = cljs.core.filterv.call(null,inst_15498,inst_15486);var inst_15486__$1 = inst_15499;var state_15514__$1 = (function (){var statearr_15525 = state_15514;(statearr_15525[7] = inst_15486__$1);
return statearr_15525;
})();var statearr_15526_15546 = state_15514__$1;(statearr_15526_15546[2] = null);
(statearr_15526_15546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 9))
{var inst_15494 = (state_15514[9]);var state_15514__$1 = state_15514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15514__$1,11,out,inst_15494);
} else
{if((state_val_15515 === 10))
{var inst_15506 = (state_15514[2]);var state_15514__$1 = state_15514;var statearr_15528_15547 = state_15514__$1;(statearr_15528_15547[2] = inst_15506);
(statearr_15528_15547[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15515 === 11))
{var inst_15486 = (state_15514[7]);var inst_15503 = (state_15514[2]);var tmp15527 = inst_15486;var inst_15486__$1 = tmp15527;var state_15514__$1 = (function (){var statearr_15529 = state_15514;(statearr_15529[11] = inst_15503);
(statearr_15529[7] = inst_15486__$1);
return statearr_15529;
})();var statearr_15530_15548 = state_15514__$1;(statearr_15530_15548[2] = null);
(statearr_15530_15548[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15534 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15534[0] = state_machine__5507__auto__);
(statearr_15534[1] = 1);
return statearr_15534;
});
var state_machine__5507__auto____1 = (function (state_15514){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15535){if((e15535 instanceof Object))
{var ex__5510__auto__ = e15535;var statearr_15536_15549 = state_15514;(statearr_15536_15549[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15550 = state_15514;
state_15514 = G__15550;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15514){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15537 = f__5522__auto__.call(null);(statearr_15537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15538);
return statearr_15537;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15620){var state_val_15621 = (state_15620[1]);if((state_val_15621 === 1))
{var inst_15597 = 0;var state_15620__$1 = (function (){var statearr_15622 = state_15620;(statearr_15622[7] = inst_15597);
return statearr_15622;
})();var statearr_15623_15644 = state_15620__$1;(statearr_15623_15644[2] = null);
(statearr_15623_15644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 2))
{var inst_15597 = (state_15620[7]);var inst_15599 = (inst_15597 < n);var state_15620__$1 = state_15620;if(cljs.core.truth_(inst_15599))
{var statearr_15624_15645 = state_15620__$1;(statearr_15624_15645[1] = 4);
} else
{var statearr_15625_15646 = state_15620__$1;(statearr_15625_15646[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 3))
{var inst_15617 = (state_15620[2]);var inst_15618 = cljs.core.async.close_BANG_.call(null,out);var state_15620__$1 = (function (){var statearr_15626 = state_15620;(statearr_15626[8] = inst_15617);
return statearr_15626;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15620__$1,inst_15618);
} else
{if((state_val_15621 === 4))
{var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15620__$1,7,ch);
} else
{if((state_val_15621 === 5))
{var state_15620__$1 = state_15620;var statearr_15627_15647 = state_15620__$1;(statearr_15627_15647[2] = null);
(statearr_15627_15647[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 6))
{var inst_15615 = (state_15620[2]);var state_15620__$1 = state_15620;var statearr_15628_15648 = state_15620__$1;(statearr_15628_15648[2] = inst_15615);
(statearr_15628_15648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 7))
{var inst_15602 = (state_15620[9]);var inst_15602__$1 = (state_15620[2]);var inst_15603 = (inst_15602__$1 == null);var inst_15604 = cljs.core.not.call(null,inst_15603);var state_15620__$1 = (function (){var statearr_15629 = state_15620;(statearr_15629[9] = inst_15602__$1);
return statearr_15629;
})();if(inst_15604)
{var statearr_15630_15649 = state_15620__$1;(statearr_15630_15649[1] = 8);
} else
{var statearr_15631_15650 = state_15620__$1;(statearr_15631_15650[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 8))
{var inst_15602 = (state_15620[9]);var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15620__$1,11,out,inst_15602);
} else
{if((state_val_15621 === 9))
{var state_15620__$1 = state_15620;var statearr_15632_15651 = state_15620__$1;(statearr_15632_15651[2] = null);
(statearr_15632_15651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 10))
{var inst_15612 = (state_15620[2]);var state_15620__$1 = state_15620;var statearr_15633_15652 = state_15620__$1;(statearr_15633_15652[2] = inst_15612);
(statearr_15633_15652[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 11))
{var inst_15597 = (state_15620[7]);var inst_15607 = (state_15620[2]);var inst_15608 = (inst_15597 + 1);var inst_15597__$1 = inst_15608;var state_15620__$1 = (function (){var statearr_15634 = state_15620;(statearr_15634[7] = inst_15597__$1);
(statearr_15634[10] = inst_15607);
return statearr_15634;
})();var statearr_15635_15653 = state_15620__$1;(statearr_15635_15653[2] = null);
(statearr_15635_15653[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15639 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15639[0] = state_machine__5507__auto__);
(statearr_15639[1] = 1);
return statearr_15639;
});
var state_machine__5507__auto____1 = (function (state_15620){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15640){if((e15640 instanceof Object))
{var ex__5510__auto__ = e15640;var statearr_15641_15654 = state_15620;(statearr_15641_15654[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15655 = state_15620;
state_15620 = G__15655;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15620){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15642 = f__5522__auto__.call(null);(statearr_15642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15643);
return statearr_15642;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15727){var state_val_15728 = (state_15727[1]);if((state_val_15728 === 1))
{var inst_15704 = null;var state_15727__$1 = (function (){var statearr_15729 = state_15727;(statearr_15729[7] = inst_15704);
return statearr_15729;
})();var statearr_15730_15753 = state_15727__$1;(statearr_15730_15753[2] = null);
(statearr_15730_15753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 2))
{var state_15727__$1 = state_15727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15727__$1,4,ch);
} else
{if((state_val_15728 === 3))
{var inst_15724 = (state_15727[2]);var inst_15725 = cljs.core.async.close_BANG_.call(null,out);var state_15727__$1 = (function (){var statearr_15731 = state_15727;(statearr_15731[8] = inst_15724);
return statearr_15731;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15727__$1,inst_15725);
} else
{if((state_val_15728 === 4))
{var inst_15707 = (state_15727[9]);var inst_15707__$1 = (state_15727[2]);var inst_15708 = (inst_15707__$1 == null);var inst_15709 = cljs.core.not.call(null,inst_15708);var state_15727__$1 = (function (){var statearr_15732 = state_15727;(statearr_15732[9] = inst_15707__$1);
return statearr_15732;
})();if(inst_15709)
{var statearr_15733_15754 = state_15727__$1;(statearr_15733_15754[1] = 5);
} else
{var statearr_15734_15755 = state_15727__$1;(statearr_15734_15755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 5))
{var inst_15707 = (state_15727[9]);var inst_15704 = (state_15727[7]);var inst_15711 = cljs.core._EQ_.call(null,inst_15707,inst_15704);var state_15727__$1 = state_15727;if(inst_15711)
{var statearr_15735_15756 = state_15727__$1;(statearr_15735_15756[1] = 8);
} else
{var statearr_15736_15757 = state_15727__$1;(statearr_15736_15757[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 6))
{var state_15727__$1 = state_15727;var statearr_15738_15758 = state_15727__$1;(statearr_15738_15758[2] = null);
(statearr_15738_15758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 7))
{var inst_15722 = (state_15727[2]);var state_15727__$1 = state_15727;var statearr_15739_15759 = state_15727__$1;(statearr_15739_15759[2] = inst_15722);
(statearr_15739_15759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 8))
{var inst_15704 = (state_15727[7]);var tmp15737 = inst_15704;var inst_15704__$1 = tmp15737;var state_15727__$1 = (function (){var statearr_15740 = state_15727;(statearr_15740[7] = inst_15704__$1);
return statearr_15740;
})();var statearr_15741_15760 = state_15727__$1;(statearr_15741_15760[2] = null);
(statearr_15741_15760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 9))
{var inst_15707 = (state_15727[9]);var state_15727__$1 = state_15727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15727__$1,11,out,inst_15707);
} else
{if((state_val_15728 === 10))
{var inst_15719 = (state_15727[2]);var state_15727__$1 = state_15727;var statearr_15742_15761 = state_15727__$1;(statearr_15742_15761[2] = inst_15719);
(statearr_15742_15761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15728 === 11))
{var inst_15707 = (state_15727[9]);var inst_15716 = (state_15727[2]);var inst_15704 = inst_15707;var state_15727__$1 = (function (){var statearr_15743 = state_15727;(statearr_15743[10] = inst_15716);
(statearr_15743[7] = inst_15704);
return statearr_15743;
})();var statearr_15744_15762 = state_15727__$1;(statearr_15744_15762[2] = null);
(statearr_15744_15762[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15748 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15748[0] = state_machine__5507__auto__);
(statearr_15748[1] = 1);
return statearr_15748;
});
var state_machine__5507__auto____1 = (function (state_15727){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15727);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15749){if((e15749 instanceof Object))
{var ex__5510__auto__ = e15749;var statearr_15750_15763 = state_15727;(statearr_15750_15763[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15764 = state_15727;
state_15727 = G__15764;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15727){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15751 = f__5522__auto__.call(null);(statearr_15751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15752);
return statearr_15751;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15899 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15869){var state_val_15870 = (state_15869[1]);if((state_val_15870 === 1))
{var inst_15832 = (new Array(n));var inst_15833 = inst_15832;var inst_15834 = 0;var state_15869__$1 = (function (){var statearr_15871 = state_15869;(statearr_15871[7] = inst_15834);
(statearr_15871[8] = inst_15833);
return statearr_15871;
})();var statearr_15872_15900 = state_15869__$1;(statearr_15872_15900[2] = null);
(statearr_15872_15900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 2))
{var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15869__$1,4,ch);
} else
{if((state_val_15870 === 3))
{var inst_15867 = (state_15869[2]);var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15869__$1,inst_15867);
} else
{if((state_val_15870 === 4))
{var inst_15837 = (state_15869[9]);var inst_15837__$1 = (state_15869[2]);var inst_15838 = (inst_15837__$1 == null);var inst_15839 = cljs.core.not.call(null,inst_15838);var state_15869__$1 = (function (){var statearr_15873 = state_15869;(statearr_15873[9] = inst_15837__$1);
return statearr_15873;
})();if(inst_15839)
{var statearr_15874_15901 = state_15869__$1;(statearr_15874_15901[1] = 5);
} else
{var statearr_15875_15902 = state_15869__$1;(statearr_15875_15902[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 5))
{var inst_15834 = (state_15869[7]);var inst_15842 = (state_15869[10]);var inst_15837 = (state_15869[9]);var inst_15833 = (state_15869[8]);var inst_15841 = (inst_15833[inst_15834] = inst_15837);var inst_15842__$1 = (inst_15834 + 1);var inst_15843 = (inst_15842__$1 < n);var state_15869__$1 = (function (){var statearr_15876 = state_15869;(statearr_15876[10] = inst_15842__$1);
(statearr_15876[11] = inst_15841);
return statearr_15876;
})();if(cljs.core.truth_(inst_15843))
{var statearr_15877_15903 = state_15869__$1;(statearr_15877_15903[1] = 8);
} else
{var statearr_15878_15904 = state_15869__$1;(statearr_15878_15904[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 6))
{var inst_15834 = (state_15869[7]);var inst_15855 = (inst_15834 > 0);var state_15869__$1 = state_15869;if(cljs.core.truth_(inst_15855))
{var statearr_15880_15905 = state_15869__$1;(statearr_15880_15905[1] = 12);
} else
{var statearr_15881_15906 = state_15869__$1;(statearr_15881_15906[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 7))
{var inst_15865 = (state_15869[2]);var state_15869__$1 = state_15869;var statearr_15882_15907 = state_15869__$1;(statearr_15882_15907[2] = inst_15865);
(statearr_15882_15907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 8))
{var inst_15842 = (state_15869[10]);var inst_15833 = (state_15869[8]);var tmp15879 = inst_15833;var inst_15833__$1 = tmp15879;var inst_15834 = inst_15842;var state_15869__$1 = (function (){var statearr_15883 = state_15869;(statearr_15883[7] = inst_15834);
(statearr_15883[8] = inst_15833__$1);
return statearr_15883;
})();var statearr_15884_15908 = state_15869__$1;(statearr_15884_15908[2] = null);
(statearr_15884_15908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 9))
{var inst_15833 = (state_15869[8]);var inst_15847 = cljs.core.vec.call(null,inst_15833);var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15869__$1,11,out,inst_15847);
} else
{if((state_val_15870 === 10))
{var inst_15853 = (state_15869[2]);var state_15869__$1 = state_15869;var statearr_15885_15909 = state_15869__$1;(statearr_15885_15909[2] = inst_15853);
(statearr_15885_15909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 11))
{var inst_15849 = (state_15869[2]);var inst_15850 = (new Array(n));var inst_15833 = inst_15850;var inst_15834 = 0;var state_15869__$1 = (function (){var statearr_15886 = state_15869;(statearr_15886[12] = inst_15849);
(statearr_15886[7] = inst_15834);
(statearr_15886[8] = inst_15833);
return statearr_15886;
})();var statearr_15887_15910 = state_15869__$1;(statearr_15887_15910[2] = null);
(statearr_15887_15910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 12))
{var inst_15833 = (state_15869[8]);var inst_15857 = cljs.core.vec.call(null,inst_15833);var state_15869__$1 = state_15869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15869__$1,15,out,inst_15857);
} else
{if((state_val_15870 === 13))
{var state_15869__$1 = state_15869;var statearr_15888_15911 = state_15869__$1;(statearr_15888_15911[2] = null);
(statearr_15888_15911[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 14))
{var inst_15862 = (state_15869[2]);var inst_15863 = cljs.core.async.close_BANG_.call(null,out);var state_15869__$1 = (function (){var statearr_15889 = state_15869;(statearr_15889[13] = inst_15862);
return statearr_15889;
})();var statearr_15890_15912 = state_15869__$1;(statearr_15890_15912[2] = inst_15863);
(statearr_15890_15912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15870 === 15))
{var inst_15859 = (state_15869[2]);var state_15869__$1 = state_15869;var statearr_15891_15913 = state_15869__$1;(statearr_15891_15913[2] = inst_15859);
(statearr_15891_15913[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15895[0] = state_machine__5507__auto__);
(statearr_15895[1] = 1);
return statearr_15895;
});
var state_machine__5507__auto____1 = (function (state_15869){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15869);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15896){if((e15896 instanceof Object))
{var ex__5510__auto__ = e15896;var statearr_15897_15914 = state_15869;(statearr_15897_15914[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15915 = state_15869;
state_15869 = G__15915;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15869){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15898 = f__5522__auto__.call(null);(statearr_15898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15899);
return statearr_15898;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16058 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16028){var state_val_16029 = (state_16028[1]);if((state_val_16029 === 1))
{var inst_15987 = [];var inst_15988 = inst_15987;var inst_15989 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16028__$1 = (function (){var statearr_16030 = state_16028;(statearr_16030[7] = inst_15988);
(statearr_16030[8] = inst_15989);
return statearr_16030;
})();var statearr_16031_16059 = state_16028__$1;(statearr_16031_16059[2] = null);
(statearr_16031_16059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 2))
{var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16028__$1,4,ch);
} else
{if((state_val_16029 === 3))
{var inst_16026 = (state_16028[2]);var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16028__$1,inst_16026);
} else
{if((state_val_16029 === 4))
{var inst_15992 = (state_16028[9]);var inst_15992__$1 = (state_16028[2]);var inst_15993 = (inst_15992__$1 == null);var inst_15994 = cljs.core.not.call(null,inst_15993);var state_16028__$1 = (function (){var statearr_16032 = state_16028;(statearr_16032[9] = inst_15992__$1);
return statearr_16032;
})();if(inst_15994)
{var statearr_16033_16060 = state_16028__$1;(statearr_16033_16060[1] = 5);
} else
{var statearr_16034_16061 = state_16028__$1;(statearr_16034_16061[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 5))
{var inst_15992 = (state_16028[9]);var inst_15989 = (state_16028[8]);var inst_15996 = (state_16028[10]);var inst_15996__$1 = f.call(null,inst_15992);var inst_15997 = cljs.core._EQ_.call(null,inst_15996__$1,inst_15989);var inst_15998 = cljs.core.keyword_identical_QMARK_.call(null,inst_15989,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15999 = (inst_15997) || (inst_15998);var state_16028__$1 = (function (){var statearr_16035 = state_16028;(statearr_16035[10] = inst_15996__$1);
return statearr_16035;
})();if(cljs.core.truth_(inst_15999))
{var statearr_16036_16062 = state_16028__$1;(statearr_16036_16062[1] = 8);
} else
{var statearr_16037_16063 = state_16028__$1;(statearr_16037_16063[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 6))
{var inst_15988 = (state_16028[7]);var inst_16013 = inst_15988.length;var inst_16014 = (inst_16013 > 0);var state_16028__$1 = state_16028;if(cljs.core.truth_(inst_16014))
{var statearr_16039_16064 = state_16028__$1;(statearr_16039_16064[1] = 12);
} else
{var statearr_16040_16065 = state_16028__$1;(statearr_16040_16065[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 7))
{var inst_16024 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16041_16066 = state_16028__$1;(statearr_16041_16066[2] = inst_16024);
(statearr_16041_16066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 8))
{var inst_15992 = (state_16028[9]);var inst_15988 = (state_16028[7]);var inst_15996 = (state_16028[10]);var inst_16001 = inst_15988.push(inst_15992);var tmp16038 = inst_15988;var inst_15988__$1 = tmp16038;var inst_15989 = inst_15996;var state_16028__$1 = (function (){var statearr_16042 = state_16028;(statearr_16042[11] = inst_16001);
(statearr_16042[7] = inst_15988__$1);
(statearr_16042[8] = inst_15989);
return statearr_16042;
})();var statearr_16043_16067 = state_16028__$1;(statearr_16043_16067[2] = null);
(statearr_16043_16067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 9))
{var inst_15988 = (state_16028[7]);var inst_16004 = cljs.core.vec.call(null,inst_15988);var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16028__$1,11,out,inst_16004);
} else
{if((state_val_16029 === 10))
{var inst_16011 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16044_16068 = state_16028__$1;(statearr_16044_16068[2] = inst_16011);
(statearr_16044_16068[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 11))
{var inst_15992 = (state_16028[9]);var inst_15996 = (state_16028[10]);var inst_16006 = (state_16028[2]);var inst_16007 = [];var inst_16008 = inst_16007.push(inst_15992);var inst_15988 = inst_16007;var inst_15989 = inst_15996;var state_16028__$1 = (function (){var statearr_16045 = state_16028;(statearr_16045[7] = inst_15988);
(statearr_16045[8] = inst_15989);
(statearr_16045[12] = inst_16008);
(statearr_16045[13] = inst_16006);
return statearr_16045;
})();var statearr_16046_16069 = state_16028__$1;(statearr_16046_16069[2] = null);
(statearr_16046_16069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 12))
{var inst_15988 = (state_16028[7]);var inst_16016 = cljs.core.vec.call(null,inst_15988);var state_16028__$1 = state_16028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16028__$1,15,out,inst_16016);
} else
{if((state_val_16029 === 13))
{var state_16028__$1 = state_16028;var statearr_16047_16070 = state_16028__$1;(statearr_16047_16070[2] = null);
(statearr_16047_16070[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 14))
{var inst_16021 = (state_16028[2]);var inst_16022 = cljs.core.async.close_BANG_.call(null,out);var state_16028__$1 = (function (){var statearr_16048 = state_16028;(statearr_16048[14] = inst_16021);
return statearr_16048;
})();var statearr_16049_16071 = state_16028__$1;(statearr_16049_16071[2] = inst_16022);
(statearr_16049_16071[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16029 === 15))
{var inst_16018 = (state_16028[2]);var state_16028__$1 = state_16028;var statearr_16050_16072 = state_16028__$1;(statearr_16050_16072[2] = inst_16018);
(statearr_16050_16072[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16054[0] = state_machine__5507__auto__);
(statearr_16054[1] = 1);
return statearr_16054;
});
var state_machine__5507__auto____1 = (function (state_16028){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16028);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16055){if((e16055 instanceof Object))
{var ex__5510__auto__ = e16055;var statearr_16056_16073 = state_16028;(statearr_16056_16073[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16074 = state_16028;
state_16028 = G__16074;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16028){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16057 = f__5522__auto__.call(null);(statearr_16057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16058);
return statearr_16057;
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