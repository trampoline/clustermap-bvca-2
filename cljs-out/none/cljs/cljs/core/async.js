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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11919 = (function (f,fn_handler,meta11920){
this.f = f;
this.fn_handler = fn_handler;
this.meta11920 = meta11920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11919.cljs$lang$type = true;
cljs.core.async.t11919.cljs$lang$ctorStr = "cljs.core.async/t11919";
cljs.core.async.t11919.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11919");
});
cljs.core.async.t11919.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11921){var self__ = this;
var _11921__$1 = this;return self__.meta11920;
});
cljs.core.async.t11919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11921,meta11920__$1){var self__ = this;
var _11921__$1 = this;return (new cljs.core.async.t11919(self__.f,self__.fn_handler,meta11920__$1));
});
cljs.core.async.__GT_t11919 = (function __GT_t11919(f__$1,fn_handler__$1,meta11920){return (new cljs.core.async.t11919(f__$1,fn_handler__$1,meta11920));
});
}
return (new cljs.core.async.t11919(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11923 = buff;if(G__11923)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11923.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11923.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11923);
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
{var val_11924 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11924);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11924);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11925 = n;var x_11926 = 0;while(true){
if((x_11926 < n__4248__auto___11925))
{(a[x_11926] = 0);
{
var G__11927 = (x_11926 + 1);
x_11926 = G__11927;
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
var G__11928 = (i + 1);
i = G__11928;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11932 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11932 = (function (flag,alt_flag,meta11933){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11933 = meta11933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11932.cljs$lang$type = true;
cljs.core.async.t11932.cljs$lang$ctorStr = "cljs.core.async/t11932";
cljs.core.async.t11932.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11932");
});
cljs.core.async.t11932.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11934){var self__ = this;
var _11934__$1 = this;return self__.meta11933;
});
cljs.core.async.t11932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11934,meta11933__$1){var self__ = this;
var _11934__$1 = this;return (new cljs.core.async.t11932(self__.flag,self__.alt_flag,meta11933__$1));
});
cljs.core.async.__GT_t11932 = (function __GT_t11932(flag__$1,alt_flag__$1,meta11933){return (new cljs.core.async.t11932(flag__$1,alt_flag__$1,meta11933));
});
}
return (new cljs.core.async.t11932(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11938 = (function (cb,flag,alt_handler,meta11939){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11939 = meta11939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11938.cljs$lang$type = true;
cljs.core.async.t11938.cljs$lang$ctorStr = "cljs.core.async/t11938";
cljs.core.async.t11938.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11938");
});
cljs.core.async.t11938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11940){var self__ = this;
var _11940__$1 = this;return self__.meta11939;
});
cljs.core.async.t11938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11940,meta11939__$1){var self__ = this;
var _11940__$1 = this;return (new cljs.core.async.t11938(self__.cb,self__.flag,self__.alt_handler,meta11939__$1));
});
cljs.core.async.__GT_t11938 = (function __GT_t11938(cb__$1,flag__$1,alt_handler__$1,meta11939){return (new cljs.core.async.t11938(cb__$1,flag__$1,alt_handler__$1,meta11939));
});
}
return (new cljs.core.async.t11938(cb,flag,alt_handler,null));
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
return (function (p1__11941_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11941_SHARP_,port], null));
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
var G__11942 = (i + 1);
i = G__11942;
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
var alts_BANG___delegate = function (ports,p__11943){var map__11945 = p__11943;var map__11945__$1 = ((cljs.core.seq_QMARK_.call(null,map__11945))?cljs.core.apply.call(null,cljs.core.hash_map,map__11945):map__11945);var opts = map__11945__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11943 = null;if (arguments.length > 1) {
  p__11943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11943);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11946){
var ports = cljs.core.first(arglist__11946);
var p__11943 = cljs.core.rest(arglist__11946);
return alts_BANG___delegate(ports,p__11943);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11954 = (function (ch,f,map_LT_,meta11955){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11955 = meta11955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11954.cljs$lang$type = true;
cljs.core.async.t11954.cljs$lang$ctorStr = "cljs.core.async/t11954";
cljs.core.async.t11954.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11954");
});
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11957 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11957 = (function (fn1,_,meta11955,ch,f,map_LT_,meta11958){
this.fn1 = fn1;
this._ = _;
this.meta11955 = meta11955;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11958 = meta11958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11957.cljs$lang$type = true;
cljs.core.async.t11957.cljs$lang$ctorStr = "cljs.core.async/t11957";
cljs.core.async.t11957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11957");
});
cljs.core.async.t11957.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11957.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11947_SHARP_){return f1.call(null,(((p1__11947_SHARP_ == null))?null:self__.f.call(null,p1__11947_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11959){var self__ = this;
var _11959__$1 = this;return self__.meta11958;
});
cljs.core.async.t11957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11959,meta11958__$1){var self__ = this;
var _11959__$1 = this;return (new cljs.core.async.t11957(self__.fn1,self__._,self__.meta11955,self__.ch,self__.f,self__.map_LT_,meta11958__$1));
});
cljs.core.async.__GT_t11957 = (function __GT_t11957(fn1__$1,___$2,meta11955__$1,ch__$2,f__$2,map_LT___$2,meta11958){return (new cljs.core.async.t11957(fn1__$1,___$2,meta11955__$1,ch__$2,f__$2,map_LT___$2,meta11958));
});
}
return (new cljs.core.async.t11957(fn1,___$1,self__.meta11955,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11956){var self__ = this;
var _11956__$1 = this;return self__.meta11955;
});
cljs.core.async.t11954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11956,meta11955__$1){var self__ = this;
var _11956__$1 = this;return (new cljs.core.async.t11954(self__.ch,self__.f,self__.map_LT_,meta11955__$1));
});
cljs.core.async.__GT_t11954 = (function __GT_t11954(ch__$1,f__$1,map_LT___$1,meta11955){return (new cljs.core.async.t11954(ch__$1,f__$1,map_LT___$1,meta11955));
});
}
return (new cljs.core.async.t11954(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11963 = (function (ch,f,map_GT_,meta11964){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11964 = meta11964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11963.cljs$lang$type = true;
cljs.core.async.t11963.cljs$lang$ctorStr = "cljs.core.async/t11963";
cljs.core.async.t11963.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11963");
});
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11965){var self__ = this;
var _11965__$1 = this;return self__.meta11964;
});
cljs.core.async.t11963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11965,meta11964__$1){var self__ = this;
var _11965__$1 = this;return (new cljs.core.async.t11963(self__.ch,self__.f,self__.map_GT_,meta11964__$1));
});
cljs.core.async.__GT_t11963 = (function __GT_t11963(ch__$1,f__$1,map_GT___$1,meta11964){return (new cljs.core.async.t11963(ch__$1,f__$1,map_GT___$1,meta11964));
});
}
return (new cljs.core.async.t11963(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11969 = (function (ch,p,filter_GT_,meta11970){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11970 = meta11970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11969.cljs$lang$type = true;
cljs.core.async.t11969.cljs$lang$ctorStr = "cljs.core.async/t11969";
cljs.core.async.t11969.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11969");
});
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11971){var self__ = this;
var _11971__$1 = this;return self__.meta11970;
});
cljs.core.async.t11969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11971,meta11970__$1){var self__ = this;
var _11971__$1 = this;return (new cljs.core.async.t11969(self__.ch,self__.p,self__.filter_GT_,meta11970__$1));
});
cljs.core.async.__GT_t11969 = (function __GT_t11969(ch__$1,p__$1,filter_GT___$1,meta11970){return (new cljs.core.async.t11969(ch__$1,p__$1,filter_GT___$1,meta11970));
});
}
return (new cljs.core.async.t11969(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12054 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12033){var state_val_12034 = (state_12033[1]);if((state_val_12034 === 1))
{var state_12033__$1 = state_12033;var statearr_12035_12055 = state_12033__$1;(statearr_12035_12055[2] = null);
(statearr_12035_12055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 2))
{var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12033__$1,4,ch);
} else
{if((state_val_12034 === 3))
{var inst_12031 = (state_12033[2]);var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12033__$1,inst_12031);
} else
{if((state_val_12034 === 4))
{var inst_12015 = (state_12033[7]);var inst_12015__$1 = (state_12033[2]);var inst_12016 = (inst_12015__$1 == null);var state_12033__$1 = (function (){var statearr_12036 = state_12033;(statearr_12036[7] = inst_12015__$1);
return statearr_12036;
})();if(cljs.core.truth_(inst_12016))
{var statearr_12037_12056 = state_12033__$1;(statearr_12037_12056[1] = 5);
} else
{var statearr_12038_12057 = state_12033__$1;(statearr_12038_12057[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 5))
{var inst_12018 = cljs.core.async.close_BANG_.call(null,out);var state_12033__$1 = state_12033;var statearr_12039_12058 = state_12033__$1;(statearr_12039_12058[2] = inst_12018);
(statearr_12039_12058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 6))
{var inst_12015 = (state_12033[7]);var inst_12020 = p.call(null,inst_12015);var state_12033__$1 = state_12033;if(cljs.core.truth_(inst_12020))
{var statearr_12040_12059 = state_12033__$1;(statearr_12040_12059[1] = 8);
} else
{var statearr_12041_12060 = state_12033__$1;(statearr_12041_12060[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 7))
{var inst_12029 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12042_12061 = state_12033__$1;(statearr_12042_12061[2] = inst_12029);
(statearr_12042_12061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 8))
{var inst_12015 = (state_12033[7]);var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12033__$1,11,out,inst_12015);
} else
{if((state_val_12034 === 9))
{var state_12033__$1 = state_12033;var statearr_12043_12062 = state_12033__$1;(statearr_12043_12062[2] = null);
(statearr_12043_12062[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 10))
{var inst_12026 = (state_12033[2]);var state_12033__$1 = (function (){var statearr_12044 = state_12033;(statearr_12044[8] = inst_12026);
return statearr_12044;
})();var statearr_12045_12063 = state_12033__$1;(statearr_12045_12063[2] = null);
(statearr_12045_12063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 11))
{var inst_12023 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12046_12064 = state_12033__$1;(statearr_12046_12064[2] = inst_12023);
(statearr_12046_12064[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12050 = [null,null,null,null,null,null,null,null,null];(statearr_12050[0] = state_machine__5507__auto__);
(statearr_12050[1] = 1);
return statearr_12050;
});
var state_machine__5507__auto____1 = (function (state_12033){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12033);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12051){if((e12051 instanceof Object))
{var ex__5510__auto__ = e12051;var statearr_12052_12065 = state_12033;(statearr_12052_12065[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12066 = state_12033;
state_12033 = G__12066;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12033){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12053 = f__5522__auto__.call(null);(statearr_12053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12054);
return statearr_12053;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12218){var state_val_12219 = (state_12218[1]);if((state_val_12219 === 1))
{var state_12218__$1 = state_12218;var statearr_12220_12257 = state_12218__$1;(statearr_12220_12257[2] = null);
(statearr_12220_12257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 2))
{var state_12218__$1 = state_12218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12218__$1,4,in$);
} else
{if((state_val_12219 === 3))
{var inst_12216 = (state_12218[2]);var state_12218__$1 = state_12218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12218__$1,inst_12216);
} else
{if((state_val_12219 === 4))
{var inst_12164 = (state_12218[7]);var inst_12164__$1 = (state_12218[2]);var inst_12165 = (inst_12164__$1 == null);var state_12218__$1 = (function (){var statearr_12221 = state_12218;(statearr_12221[7] = inst_12164__$1);
return statearr_12221;
})();if(cljs.core.truth_(inst_12165))
{var statearr_12222_12258 = state_12218__$1;(statearr_12222_12258[1] = 5);
} else
{var statearr_12223_12259 = state_12218__$1;(statearr_12223_12259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 5))
{var inst_12167 = cljs.core.async.close_BANG_.call(null,out);var state_12218__$1 = state_12218;var statearr_12224_12260 = state_12218__$1;(statearr_12224_12260[2] = inst_12167);
(statearr_12224_12260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 6))
{var inst_12164 = (state_12218[7]);var inst_12169 = f.call(null,inst_12164);var inst_12174 = cljs.core.seq.call(null,inst_12169);var inst_12175 = inst_12174;var inst_12176 = null;var inst_12177 = 0;var inst_12178 = 0;var state_12218__$1 = (function (){var statearr_12225 = state_12218;(statearr_12225[8] = inst_12178);
(statearr_12225[9] = inst_12176);
(statearr_12225[10] = inst_12177);
(statearr_12225[11] = inst_12175);
return statearr_12225;
})();var statearr_12226_12261 = state_12218__$1;(statearr_12226_12261[2] = null);
(statearr_12226_12261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 7))
{var inst_12214 = (state_12218[2]);var state_12218__$1 = state_12218;var statearr_12227_12262 = state_12218__$1;(statearr_12227_12262[2] = inst_12214);
(statearr_12227_12262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 8))
{var inst_12178 = (state_12218[8]);var inst_12177 = (state_12218[10]);var inst_12180 = (inst_12178 < inst_12177);var inst_12181 = inst_12180;var state_12218__$1 = state_12218;if(cljs.core.truth_(inst_12181))
{var statearr_12228_12263 = state_12218__$1;(statearr_12228_12263[1] = 10);
} else
{var statearr_12229_12264 = state_12218__$1;(statearr_12229_12264[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 9))
{var inst_12211 = (state_12218[2]);var state_12218__$1 = (function (){var statearr_12230 = state_12218;(statearr_12230[12] = inst_12211);
return statearr_12230;
})();var statearr_12231_12265 = state_12218__$1;(statearr_12231_12265[2] = null);
(statearr_12231_12265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 10))
{var inst_12178 = (state_12218[8]);var inst_12176 = (state_12218[9]);var inst_12183 = cljs.core._nth.call(null,inst_12176,inst_12178);var state_12218__$1 = state_12218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12218__$1,13,out,inst_12183);
} else
{if((state_val_12219 === 11))
{var inst_12189 = (state_12218[13]);var inst_12175 = (state_12218[11]);var inst_12189__$1 = cljs.core.seq.call(null,inst_12175);var state_12218__$1 = (function (){var statearr_12235 = state_12218;(statearr_12235[13] = inst_12189__$1);
return statearr_12235;
})();if(inst_12189__$1)
{var statearr_12236_12266 = state_12218__$1;(statearr_12236_12266[1] = 14);
} else
{var statearr_12237_12267 = state_12218__$1;(statearr_12237_12267[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 12))
{var inst_12209 = (state_12218[2]);var state_12218__$1 = state_12218;var statearr_12238_12268 = state_12218__$1;(statearr_12238_12268[2] = inst_12209);
(statearr_12238_12268[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 13))
{var inst_12178 = (state_12218[8]);var inst_12176 = (state_12218[9]);var inst_12177 = (state_12218[10]);var inst_12175 = (state_12218[11]);var inst_12185 = (state_12218[2]);var inst_12186 = (inst_12178 + 1);var tmp12232 = inst_12176;var tmp12233 = inst_12177;var tmp12234 = inst_12175;var inst_12175__$1 = tmp12234;var inst_12176__$1 = tmp12232;var inst_12177__$1 = tmp12233;var inst_12178__$1 = inst_12186;var state_12218__$1 = (function (){var statearr_12239 = state_12218;(statearr_12239[14] = inst_12185);
(statearr_12239[8] = inst_12178__$1);
(statearr_12239[9] = inst_12176__$1);
(statearr_12239[10] = inst_12177__$1);
(statearr_12239[11] = inst_12175__$1);
return statearr_12239;
})();var statearr_12240_12269 = state_12218__$1;(statearr_12240_12269[2] = null);
(statearr_12240_12269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 14))
{var inst_12189 = (state_12218[13]);var inst_12191 = cljs.core.chunked_seq_QMARK_.call(null,inst_12189);var state_12218__$1 = state_12218;if(inst_12191)
{var statearr_12241_12270 = state_12218__$1;(statearr_12241_12270[1] = 17);
} else
{var statearr_12242_12271 = state_12218__$1;(statearr_12242_12271[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 15))
{var state_12218__$1 = state_12218;var statearr_12243_12272 = state_12218__$1;(statearr_12243_12272[2] = null);
(statearr_12243_12272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 16))
{var inst_12207 = (state_12218[2]);var state_12218__$1 = state_12218;var statearr_12244_12273 = state_12218__$1;(statearr_12244_12273[2] = inst_12207);
(statearr_12244_12273[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 17))
{var inst_12189 = (state_12218[13]);var inst_12193 = cljs.core.chunk_first.call(null,inst_12189);var inst_12194 = cljs.core.chunk_rest.call(null,inst_12189);var inst_12195 = cljs.core.count.call(null,inst_12193);var inst_12175 = inst_12194;var inst_12176 = inst_12193;var inst_12177 = inst_12195;var inst_12178 = 0;var state_12218__$1 = (function (){var statearr_12245 = state_12218;(statearr_12245[8] = inst_12178);
(statearr_12245[9] = inst_12176);
(statearr_12245[10] = inst_12177);
(statearr_12245[11] = inst_12175);
return statearr_12245;
})();var statearr_12246_12274 = state_12218__$1;(statearr_12246_12274[2] = null);
(statearr_12246_12274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 18))
{var inst_12189 = (state_12218[13]);var inst_12198 = cljs.core.first.call(null,inst_12189);var state_12218__$1 = state_12218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12218__$1,20,out,inst_12198);
} else
{if((state_val_12219 === 19))
{var inst_12204 = (state_12218[2]);var state_12218__$1 = state_12218;var statearr_12247_12275 = state_12218__$1;(statearr_12247_12275[2] = inst_12204);
(statearr_12247_12275[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12219 === 20))
{var inst_12189 = (state_12218[13]);var inst_12200 = (state_12218[2]);var inst_12201 = cljs.core.next.call(null,inst_12189);var inst_12175 = inst_12201;var inst_12176 = null;var inst_12177 = 0;var inst_12178 = 0;var state_12218__$1 = (function (){var statearr_12248 = state_12218;(statearr_12248[8] = inst_12178);
(statearr_12248[9] = inst_12176);
(statearr_12248[10] = inst_12177);
(statearr_12248[11] = inst_12175);
(statearr_12248[15] = inst_12200);
return statearr_12248;
})();var statearr_12249_12276 = state_12218__$1;(statearr_12249_12276[2] = null);
(statearr_12249_12276[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12253[0] = state_machine__5507__auto__);
(statearr_12253[1] = 1);
return statearr_12253;
});
var state_machine__5507__auto____1 = (function (state_12218){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12218);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12254){if((e12254 instanceof Object))
{var ex__5510__auto__ = e12254;var statearr_12255_12277 = state_12218;(statearr_12255_12277[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12278 = state_12218;
state_12218 = G__12278;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12218){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12256 = f__5522__auto__.call(null);(statearr_12256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12256;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12338){var state_val_12339 = (state_12338[1]);if((state_val_12339 === 1))
{var state_12338__$1 = state_12338;var statearr_12340_12360 = state_12338__$1;(statearr_12340_12360[2] = null);
(statearr_12340_12360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 2))
{var state_12338__$1 = state_12338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12338__$1,4,from);
} else
{if((state_val_12339 === 3))
{var inst_12336 = (state_12338[2]);var state_12338__$1 = state_12338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12338__$1,inst_12336);
} else
{if((state_val_12339 === 4))
{var inst_12321 = (state_12338[7]);var inst_12321__$1 = (state_12338[2]);var inst_12322 = (inst_12321__$1 == null);var state_12338__$1 = (function (){var statearr_12341 = state_12338;(statearr_12341[7] = inst_12321__$1);
return statearr_12341;
})();if(cljs.core.truth_(inst_12322))
{var statearr_12342_12361 = state_12338__$1;(statearr_12342_12361[1] = 5);
} else
{var statearr_12343_12362 = state_12338__$1;(statearr_12343_12362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 5))
{var state_12338__$1 = state_12338;if(cljs.core.truth_(close_QMARK_))
{var statearr_12344_12363 = state_12338__$1;(statearr_12344_12363[1] = 8);
} else
{var statearr_12345_12364 = state_12338__$1;(statearr_12345_12364[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 6))
{var inst_12321 = (state_12338[7]);var state_12338__$1 = state_12338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12338__$1,11,to,inst_12321);
} else
{if((state_val_12339 === 7))
{var inst_12334 = (state_12338[2]);var state_12338__$1 = state_12338;var statearr_12346_12365 = state_12338__$1;(statearr_12346_12365[2] = inst_12334);
(statearr_12346_12365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 8))
{var inst_12325 = cljs.core.async.close_BANG_.call(null,to);var state_12338__$1 = state_12338;var statearr_12347_12366 = state_12338__$1;(statearr_12347_12366[2] = inst_12325);
(statearr_12347_12366[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 9))
{var state_12338__$1 = state_12338;var statearr_12348_12367 = state_12338__$1;(statearr_12348_12367[2] = null);
(statearr_12348_12367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 10))
{var inst_12328 = (state_12338[2]);var state_12338__$1 = state_12338;var statearr_12349_12368 = state_12338__$1;(statearr_12349_12368[2] = inst_12328);
(statearr_12349_12368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12339 === 11))
{var inst_12331 = (state_12338[2]);var state_12338__$1 = (function (){var statearr_12350 = state_12338;(statearr_12350[8] = inst_12331);
return statearr_12350;
})();var statearr_12351_12369 = state_12338__$1;(statearr_12351_12369[2] = null);
(statearr_12351_12369[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12355 = [null,null,null,null,null,null,null,null,null];(statearr_12355[0] = state_machine__5507__auto__);
(statearr_12355[1] = 1);
return statearr_12355;
});
var state_machine__5507__auto____1 = (function (state_12338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12356){if((e12356 instanceof Object))
{var ex__5510__auto__ = e12356;var statearr_12357_12370 = state_12338;(statearr_12357_12370[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12371 = state_12338;
state_12338 = G__12371;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12358 = f__5522__auto__.call(null);(statearr_12358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12359);
return statearr_12358;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12436){var state_val_12437 = (state_12436[1]);if((state_val_12437 === 1))
{var state_12436__$1 = state_12436;var statearr_12438_12459 = state_12436__$1;(statearr_12438_12459[2] = null);
(statearr_12438_12459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 2))
{var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12436__$1,4,ch);
} else
{if((state_val_12437 === 3))
{var inst_12434 = (state_12436[2]);var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12436__$1,inst_12434);
} else
{if((state_val_12437 === 4))
{var inst_12417 = (state_12436[7]);var inst_12417__$1 = (state_12436[2]);var inst_12418 = (inst_12417__$1 == null);var state_12436__$1 = (function (){var statearr_12439 = state_12436;(statearr_12439[7] = inst_12417__$1);
return statearr_12439;
})();if(cljs.core.truth_(inst_12418))
{var statearr_12440_12460 = state_12436__$1;(statearr_12440_12460[1] = 5);
} else
{var statearr_12441_12461 = state_12436__$1;(statearr_12441_12461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 5))
{var inst_12420 = cljs.core.async.close_BANG_.call(null,tc);var inst_12421 = cljs.core.async.close_BANG_.call(null,fc);var state_12436__$1 = (function (){var statearr_12442 = state_12436;(statearr_12442[8] = inst_12420);
return statearr_12442;
})();var statearr_12443_12462 = state_12436__$1;(statearr_12443_12462[2] = inst_12421);
(statearr_12443_12462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 6))
{var inst_12417 = (state_12436[7]);var inst_12423 = p.call(null,inst_12417);var state_12436__$1 = state_12436;if(cljs.core.truth_(inst_12423))
{var statearr_12444_12463 = state_12436__$1;(statearr_12444_12463[1] = 9);
} else
{var statearr_12445_12464 = state_12436__$1;(statearr_12445_12464[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 7))
{var inst_12432 = (state_12436[2]);var state_12436__$1 = state_12436;var statearr_12446_12465 = state_12436__$1;(statearr_12446_12465[2] = inst_12432);
(statearr_12446_12465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 8))
{var inst_12429 = (state_12436[2]);var state_12436__$1 = (function (){var statearr_12447 = state_12436;(statearr_12447[9] = inst_12429);
return statearr_12447;
})();var statearr_12448_12466 = state_12436__$1;(statearr_12448_12466[2] = null);
(statearr_12448_12466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 9))
{var state_12436__$1 = state_12436;var statearr_12449_12467 = state_12436__$1;(statearr_12449_12467[2] = tc);
(statearr_12449_12467[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 10))
{var state_12436__$1 = state_12436;var statearr_12450_12468 = state_12436__$1;(statearr_12450_12468[2] = fc);
(statearr_12450_12468[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 11))
{var inst_12417 = (state_12436[7]);var inst_12427 = (state_12436[2]);var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12436__$1,8,inst_12427,inst_12417);
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
var state_machine__5507__auto____0 = (function (){var statearr_12454 = [null,null,null,null,null,null,null,null,null,null];(statearr_12454[0] = state_machine__5507__auto__);
(statearr_12454[1] = 1);
return statearr_12454;
});
var state_machine__5507__auto____1 = (function (state_12436){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12436);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12455){if((e12455 instanceof Object))
{var ex__5510__auto__ = e12455;var statearr_12456_12469 = state_12436;(statearr_12456_12469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12470 = state_12436;
state_12436 = G__12470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12436){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12457 = f__5522__auto__.call(null);(statearr_12457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12458);
return statearr_12457;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12517){var state_val_12518 = (state_12517[1]);if((state_val_12518 === 7))
{var inst_12513 = (state_12517[2]);var state_12517__$1 = state_12517;var statearr_12519_12535 = state_12517__$1;(statearr_12519_12535[2] = inst_12513);
(statearr_12519_12535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12518 === 6))
{var inst_12503 = (state_12517[7]);var inst_12506 = (state_12517[8]);var inst_12510 = f.call(null,inst_12503,inst_12506);var inst_12503__$1 = inst_12510;var state_12517__$1 = (function (){var statearr_12520 = state_12517;(statearr_12520[7] = inst_12503__$1);
return statearr_12520;
})();var statearr_12521_12536 = state_12517__$1;(statearr_12521_12536[2] = null);
(statearr_12521_12536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12518 === 5))
{var inst_12503 = (state_12517[7]);var state_12517__$1 = state_12517;var statearr_12522_12537 = state_12517__$1;(statearr_12522_12537[2] = inst_12503);
(statearr_12522_12537[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12518 === 4))
{var inst_12506 = (state_12517[8]);var inst_12506__$1 = (state_12517[2]);var inst_12507 = (inst_12506__$1 == null);var state_12517__$1 = (function (){var statearr_12523 = state_12517;(statearr_12523[8] = inst_12506__$1);
return statearr_12523;
})();if(cljs.core.truth_(inst_12507))
{var statearr_12524_12538 = state_12517__$1;(statearr_12524_12538[1] = 5);
} else
{var statearr_12525_12539 = state_12517__$1;(statearr_12525_12539[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12518 === 3))
{var inst_12515 = (state_12517[2]);var state_12517__$1 = state_12517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12517__$1,inst_12515);
} else
{if((state_val_12518 === 2))
{var state_12517__$1 = state_12517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12517__$1,4,ch);
} else
{if((state_val_12518 === 1))
{var inst_12503 = init;var state_12517__$1 = (function (){var statearr_12526 = state_12517;(statearr_12526[7] = inst_12503);
return statearr_12526;
})();var statearr_12527_12540 = state_12517__$1;(statearr_12527_12540[2] = null);
(statearr_12527_12540[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12531 = [null,null,null,null,null,null,null,null,null];(statearr_12531[0] = state_machine__5507__auto__);
(statearr_12531[1] = 1);
return statearr_12531;
});
var state_machine__5507__auto____1 = (function (state_12517){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12517);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12532){if((e12532 instanceof Object))
{var ex__5510__auto__ = e12532;var statearr_12533_12541 = state_12517;(statearr_12533_12541[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12542 = state_12517;
state_12517 = G__12542;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12517){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12534 = f__5522__auto__.call(null);(statearr_12534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12534;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12604){var state_val_12605 = (state_12604[1]);if((state_val_12605 === 1))
{var inst_12584 = cljs.core.seq.call(null,coll);var inst_12585 = inst_12584;var state_12604__$1 = (function (){var statearr_12606 = state_12604;(statearr_12606[7] = inst_12585);
return statearr_12606;
})();var statearr_12607_12625 = state_12604__$1;(statearr_12607_12625[2] = null);
(statearr_12607_12625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 2))
{var inst_12585 = (state_12604[7]);var state_12604__$1 = state_12604;if(cljs.core.truth_(inst_12585))
{var statearr_12608_12626 = state_12604__$1;(statearr_12608_12626[1] = 4);
} else
{var statearr_12609_12627 = state_12604__$1;(statearr_12609_12627[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 3))
{var inst_12602 = (state_12604[2]);var state_12604__$1 = state_12604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12604__$1,inst_12602);
} else
{if((state_val_12605 === 4))
{var inst_12585 = (state_12604[7]);var inst_12588 = cljs.core.first.call(null,inst_12585);var state_12604__$1 = state_12604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12604__$1,7,ch,inst_12588);
} else
{if((state_val_12605 === 5))
{var state_12604__$1 = state_12604;if(cljs.core.truth_(close_QMARK_))
{var statearr_12610_12628 = state_12604__$1;(statearr_12610_12628[1] = 8);
} else
{var statearr_12611_12629 = state_12604__$1;(statearr_12611_12629[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 6))
{var inst_12600 = (state_12604[2]);var state_12604__$1 = state_12604;var statearr_12612_12630 = state_12604__$1;(statearr_12612_12630[2] = inst_12600);
(statearr_12612_12630[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 7))
{var inst_12585 = (state_12604[7]);var inst_12590 = (state_12604[2]);var inst_12591 = cljs.core.next.call(null,inst_12585);var inst_12585__$1 = inst_12591;var state_12604__$1 = (function (){var statearr_12613 = state_12604;(statearr_12613[7] = inst_12585__$1);
(statearr_12613[8] = inst_12590);
return statearr_12613;
})();var statearr_12614_12631 = state_12604__$1;(statearr_12614_12631[2] = null);
(statearr_12614_12631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 8))
{var inst_12595 = cljs.core.async.close_BANG_.call(null,ch);var state_12604__$1 = state_12604;var statearr_12615_12632 = state_12604__$1;(statearr_12615_12632[2] = inst_12595);
(statearr_12615_12632[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 9))
{var state_12604__$1 = state_12604;var statearr_12616_12633 = state_12604__$1;(statearr_12616_12633[2] = null);
(statearr_12616_12633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 10))
{var inst_12598 = (state_12604[2]);var state_12604__$1 = state_12604;var statearr_12617_12634 = state_12604__$1;(statearr_12617_12634[2] = inst_12598);
(statearr_12617_12634[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12621 = [null,null,null,null,null,null,null,null,null];(statearr_12621[0] = state_machine__5507__auto__);
(statearr_12621[1] = 1);
return statearr_12621;
});
var state_machine__5507__auto____1 = (function (state_12604){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12622){if((e12622 instanceof Object))
{var ex__5510__auto__ = e12622;var statearr_12623_12635 = state_12604;(statearr_12623_12635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12636 = state_12604;
state_12604 = G__12636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12604){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12624 = f__5522__auto__.call(null);(statearr_12624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12624;
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
cljs.core.async.Mux = (function (){var obj12638 = {};return obj12638;
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
cljs.core.async.Mult = (function (){var obj12640 = {};return obj12640;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12864 = (function (cs,ch,mult,meta12865){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12865 = meta12865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12864.cljs$lang$type = true;
cljs.core.async.t12864.cljs$lang$ctorStr = "cljs.core.async/t12864";
cljs.core.async.t12864.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12864");
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12866){var self__ = this;
var _12866__$1 = this;return self__.meta12865;
});})(cs))
;
cljs.core.async.t12864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12866,meta12865__$1){var self__ = this;
var _12866__$1 = this;return (new cljs.core.async.t12864(self__.cs,self__.ch,self__.mult,meta12865__$1));
});})(cs))
;
cljs.core.async.__GT_t12864 = ((function (cs){
return (function __GT_t12864(cs__$1,ch__$1,mult__$1,meta12865){return (new cljs.core.async.t12864(cs__$1,ch__$1,mult__$1,meta12865));
});})(cs))
;
}
return (new cljs.core.async.t12864(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13001){var state_val_13002 = (state_13001[1]);if((state_val_13002 === 32))
{var inst_12869 = (state_13001[7]);var inst_12945 = (state_13001[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13001,31,Object,null,30);var inst_12952 = cljs.core.async.put_BANG_.call(null,inst_12945,inst_12869,done);var state_13001__$1 = state_13001;var statearr_13003_13088 = state_13001__$1;(statearr_13003_13088[2] = inst_12952);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13001__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 1))
{var state_13001__$1 = state_13001;var statearr_13004_13089 = state_13001__$1;(statearr_13004_13089[2] = null);
(statearr_13004_13089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 33))
{var inst_12958 = (state_13001[9]);var inst_12960 = cljs.core.chunked_seq_QMARK_.call(null,inst_12958);var state_13001__$1 = state_13001;if(inst_12960)
{var statearr_13005_13090 = state_13001__$1;(statearr_13005_13090[1] = 36);
} else
{var statearr_13006_13091 = state_13001__$1;(statearr_13006_13091[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 2))
{var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13001__$1,4,ch);
} else
{if((state_val_13002 === 34))
{var state_13001__$1 = state_13001;var statearr_13007_13092 = state_13001__$1;(statearr_13007_13092[2] = null);
(statearr_13007_13092[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 3))
{var inst_12999 = (state_13001[2]);var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13001__$1,inst_12999);
} else
{if((state_val_13002 === 35))
{var inst_12983 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13008_13093 = state_13001__$1;(statearr_13008_13093[2] = inst_12983);
(statearr_13008_13093[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 4))
{var inst_12869 = (state_13001[7]);var inst_12869__$1 = (state_13001[2]);var inst_12870 = (inst_12869__$1 == null);var state_13001__$1 = (function (){var statearr_13009 = state_13001;(statearr_13009[7] = inst_12869__$1);
return statearr_13009;
})();if(cljs.core.truth_(inst_12870))
{var statearr_13010_13094 = state_13001__$1;(statearr_13010_13094[1] = 5);
} else
{var statearr_13011_13095 = state_13001__$1;(statearr_13011_13095[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 36))
{var inst_12958 = (state_13001[9]);var inst_12962 = cljs.core.chunk_first.call(null,inst_12958);var inst_12963 = cljs.core.chunk_rest.call(null,inst_12958);var inst_12964 = cljs.core.count.call(null,inst_12962);var inst_12937 = inst_12963;var inst_12938 = inst_12962;var inst_12939 = inst_12964;var inst_12940 = 0;var state_13001__$1 = (function (){var statearr_13012 = state_13001;(statearr_13012[10] = inst_12940);
(statearr_13012[11] = inst_12937);
(statearr_13012[12] = inst_12938);
(statearr_13012[13] = inst_12939);
return statearr_13012;
})();var statearr_13013_13096 = state_13001__$1;(statearr_13013_13096[2] = null);
(statearr_13013_13096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 5))
{var inst_12876 = cljs.core.deref.call(null,cs);var inst_12877 = cljs.core.seq.call(null,inst_12876);var inst_12878 = inst_12877;var inst_12879 = null;var inst_12880 = 0;var inst_12881 = 0;var state_13001__$1 = (function (){var statearr_13014 = state_13001;(statearr_13014[14] = inst_12879);
(statearr_13014[15] = inst_12880);
(statearr_13014[16] = inst_12881);
(statearr_13014[17] = inst_12878);
return statearr_13014;
})();var statearr_13015_13097 = state_13001__$1;(statearr_13015_13097[2] = null);
(statearr_13015_13097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 37))
{var inst_12958 = (state_13001[9]);var inst_12967 = cljs.core.first.call(null,inst_12958);var state_13001__$1 = (function (){var statearr_13016 = state_13001;(statearr_13016[18] = inst_12967);
return statearr_13016;
})();var statearr_13017_13098 = state_13001__$1;(statearr_13017_13098[2] = null);
(statearr_13017_13098[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 6))
{var inst_12929 = (state_13001[19]);var inst_12928 = cljs.core.deref.call(null,cs);var inst_12929__$1 = cljs.core.keys.call(null,inst_12928);var inst_12930 = cljs.core.count.call(null,inst_12929__$1);var inst_12931 = cljs.core.reset_BANG_.call(null,dctr,inst_12930);var inst_12936 = cljs.core.seq.call(null,inst_12929__$1);var inst_12937 = inst_12936;var inst_12938 = null;var inst_12939 = 0;var inst_12940 = 0;var state_13001__$1 = (function (){var statearr_13018 = state_13001;(statearr_13018[10] = inst_12940);
(statearr_13018[19] = inst_12929__$1);
(statearr_13018[20] = inst_12931);
(statearr_13018[11] = inst_12937);
(statearr_13018[12] = inst_12938);
(statearr_13018[13] = inst_12939);
return statearr_13018;
})();var statearr_13019_13099 = state_13001__$1;(statearr_13019_13099[2] = null);
(statearr_13019_13099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 38))
{var inst_12980 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13020_13100 = state_13001__$1;(statearr_13020_13100[2] = inst_12980);
(statearr_13020_13100[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 7))
{var inst_12997 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13021_13101 = state_13001__$1;(statearr_13021_13101[2] = inst_12997);
(statearr_13021_13101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 39))
{var inst_12958 = (state_13001[9]);var inst_12976 = (state_13001[2]);var inst_12977 = cljs.core.next.call(null,inst_12958);var inst_12937 = inst_12977;var inst_12938 = null;var inst_12939 = 0;var inst_12940 = 0;var state_13001__$1 = (function (){var statearr_13022 = state_13001;(statearr_13022[10] = inst_12940);
(statearr_13022[21] = inst_12976);
(statearr_13022[11] = inst_12937);
(statearr_13022[12] = inst_12938);
(statearr_13022[13] = inst_12939);
return statearr_13022;
})();var statearr_13023_13102 = state_13001__$1;(statearr_13023_13102[2] = null);
(statearr_13023_13102[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 8))
{var inst_12880 = (state_13001[15]);var inst_12881 = (state_13001[16]);var inst_12883 = (inst_12881 < inst_12880);var inst_12884 = inst_12883;var state_13001__$1 = state_13001;if(cljs.core.truth_(inst_12884))
{var statearr_13024_13103 = state_13001__$1;(statearr_13024_13103[1] = 10);
} else
{var statearr_13025_13104 = state_13001__$1;(statearr_13025_13104[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 40))
{var inst_12967 = (state_13001[18]);var inst_12968 = (state_13001[2]);var inst_12969 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12970 = cljs.core.async.untap_STAR_.call(null,m,inst_12967);var state_13001__$1 = (function (){var statearr_13026 = state_13001;(statearr_13026[22] = inst_12968);
(statearr_13026[23] = inst_12969);
return statearr_13026;
})();var statearr_13027_13105 = state_13001__$1;(statearr_13027_13105[2] = inst_12970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13001__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 9))
{var inst_12926 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13028_13106 = state_13001__$1;(statearr_13028_13106[2] = inst_12926);
(statearr_13028_13106[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 41))
{var inst_12967 = (state_13001[18]);var inst_12869 = (state_13001[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13001,40,Object,null,39);var inst_12974 = cljs.core.async.put_BANG_.call(null,inst_12967,inst_12869,done);var state_13001__$1 = state_13001;var statearr_13029_13107 = state_13001__$1;(statearr_13029_13107[2] = inst_12974);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13001__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 10))
{var inst_12879 = (state_13001[14]);var inst_12881 = (state_13001[16]);var inst_12887 = cljs.core._nth.call(null,inst_12879,inst_12881);var inst_12888 = cljs.core.nth.call(null,inst_12887,0,null);var inst_12889 = cljs.core.nth.call(null,inst_12887,1,null);var state_13001__$1 = (function (){var statearr_13030 = state_13001;(statearr_13030[24] = inst_12888);
return statearr_13030;
})();if(cljs.core.truth_(inst_12889))
{var statearr_13031_13108 = state_13001__$1;(statearr_13031_13108[1] = 13);
} else
{var statearr_13032_13109 = state_13001__$1;(statearr_13032_13109[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 42))
{var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13001__$1,45,dchan);
} else
{if((state_val_13002 === 11))
{var inst_12898 = (state_13001[25]);var inst_12878 = (state_13001[17]);var inst_12898__$1 = cljs.core.seq.call(null,inst_12878);var state_13001__$1 = (function (){var statearr_13033 = state_13001;(statearr_13033[25] = inst_12898__$1);
return statearr_13033;
})();if(inst_12898__$1)
{var statearr_13034_13110 = state_13001__$1;(statearr_13034_13110[1] = 16);
} else
{var statearr_13035_13111 = state_13001__$1;(statearr_13035_13111[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 43))
{var state_13001__$1 = state_13001;var statearr_13036_13112 = state_13001__$1;(statearr_13036_13112[2] = null);
(statearr_13036_13112[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 12))
{var inst_12924 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13037_13113 = state_13001__$1;(statearr_13037_13113[2] = inst_12924);
(statearr_13037_13113[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 44))
{var inst_12994 = (state_13001[2]);var state_13001__$1 = (function (){var statearr_13038 = state_13001;(statearr_13038[26] = inst_12994);
return statearr_13038;
})();var statearr_13039_13114 = state_13001__$1;(statearr_13039_13114[2] = null);
(statearr_13039_13114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 13))
{var inst_12888 = (state_13001[24]);var inst_12891 = cljs.core.async.close_BANG_.call(null,inst_12888);var state_13001__$1 = state_13001;var statearr_13040_13115 = state_13001__$1;(statearr_13040_13115[2] = inst_12891);
(statearr_13040_13115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 45))
{var inst_12991 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13044_13116 = state_13001__$1;(statearr_13044_13116[2] = inst_12991);
(statearr_13044_13116[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 14))
{var state_13001__$1 = state_13001;var statearr_13045_13117 = state_13001__$1;(statearr_13045_13117[2] = null);
(statearr_13045_13117[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 15))
{var inst_12879 = (state_13001[14]);var inst_12880 = (state_13001[15]);var inst_12881 = (state_13001[16]);var inst_12878 = (state_13001[17]);var inst_12894 = (state_13001[2]);var inst_12895 = (inst_12881 + 1);var tmp13041 = inst_12879;var tmp13042 = inst_12880;var tmp13043 = inst_12878;var inst_12878__$1 = tmp13043;var inst_12879__$1 = tmp13041;var inst_12880__$1 = tmp13042;var inst_12881__$1 = inst_12895;var state_13001__$1 = (function (){var statearr_13046 = state_13001;(statearr_13046[14] = inst_12879__$1);
(statearr_13046[15] = inst_12880__$1);
(statearr_13046[16] = inst_12881__$1);
(statearr_13046[27] = inst_12894);
(statearr_13046[17] = inst_12878__$1);
return statearr_13046;
})();var statearr_13047_13118 = state_13001__$1;(statearr_13047_13118[2] = null);
(statearr_13047_13118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 16))
{var inst_12898 = (state_13001[25]);var inst_12900 = cljs.core.chunked_seq_QMARK_.call(null,inst_12898);var state_13001__$1 = state_13001;if(inst_12900)
{var statearr_13048_13119 = state_13001__$1;(statearr_13048_13119[1] = 19);
} else
{var statearr_13049_13120 = state_13001__$1;(statearr_13049_13120[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 17))
{var state_13001__$1 = state_13001;var statearr_13050_13121 = state_13001__$1;(statearr_13050_13121[2] = null);
(statearr_13050_13121[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 18))
{var inst_12922 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13051_13122 = state_13001__$1;(statearr_13051_13122[2] = inst_12922);
(statearr_13051_13122[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 19))
{var inst_12898 = (state_13001[25]);var inst_12902 = cljs.core.chunk_first.call(null,inst_12898);var inst_12903 = cljs.core.chunk_rest.call(null,inst_12898);var inst_12904 = cljs.core.count.call(null,inst_12902);var inst_12878 = inst_12903;var inst_12879 = inst_12902;var inst_12880 = inst_12904;var inst_12881 = 0;var state_13001__$1 = (function (){var statearr_13052 = state_13001;(statearr_13052[14] = inst_12879);
(statearr_13052[15] = inst_12880);
(statearr_13052[16] = inst_12881);
(statearr_13052[17] = inst_12878);
return statearr_13052;
})();var statearr_13053_13123 = state_13001__$1;(statearr_13053_13123[2] = null);
(statearr_13053_13123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 20))
{var inst_12898 = (state_13001[25]);var inst_12908 = cljs.core.first.call(null,inst_12898);var inst_12909 = cljs.core.nth.call(null,inst_12908,0,null);var inst_12910 = cljs.core.nth.call(null,inst_12908,1,null);var state_13001__$1 = (function (){var statearr_13054 = state_13001;(statearr_13054[28] = inst_12909);
return statearr_13054;
})();if(cljs.core.truth_(inst_12910))
{var statearr_13055_13124 = state_13001__$1;(statearr_13055_13124[1] = 22);
} else
{var statearr_13056_13125 = state_13001__$1;(statearr_13056_13125[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 21))
{var inst_12919 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13057_13126 = state_13001__$1;(statearr_13057_13126[2] = inst_12919);
(statearr_13057_13126[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 22))
{var inst_12909 = (state_13001[28]);var inst_12912 = cljs.core.async.close_BANG_.call(null,inst_12909);var state_13001__$1 = state_13001;var statearr_13058_13127 = state_13001__$1;(statearr_13058_13127[2] = inst_12912);
(statearr_13058_13127[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 23))
{var state_13001__$1 = state_13001;var statearr_13059_13128 = state_13001__$1;(statearr_13059_13128[2] = null);
(statearr_13059_13128[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 24))
{var inst_12898 = (state_13001[25]);var inst_12915 = (state_13001[2]);var inst_12916 = cljs.core.next.call(null,inst_12898);var inst_12878 = inst_12916;var inst_12879 = null;var inst_12880 = 0;var inst_12881 = 0;var state_13001__$1 = (function (){var statearr_13060 = state_13001;(statearr_13060[14] = inst_12879);
(statearr_13060[29] = inst_12915);
(statearr_13060[15] = inst_12880);
(statearr_13060[16] = inst_12881);
(statearr_13060[17] = inst_12878);
return statearr_13060;
})();var statearr_13061_13129 = state_13001__$1;(statearr_13061_13129[2] = null);
(statearr_13061_13129[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 25))
{var inst_12940 = (state_13001[10]);var inst_12939 = (state_13001[13]);var inst_12942 = (inst_12940 < inst_12939);var inst_12943 = inst_12942;var state_13001__$1 = state_13001;if(cljs.core.truth_(inst_12943))
{var statearr_13062_13130 = state_13001__$1;(statearr_13062_13130[1] = 27);
} else
{var statearr_13063_13131 = state_13001__$1;(statearr_13063_13131[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 26))
{var inst_12929 = (state_13001[19]);var inst_12987 = (state_13001[2]);var inst_12988 = cljs.core.seq.call(null,inst_12929);var state_13001__$1 = (function (){var statearr_13064 = state_13001;(statearr_13064[30] = inst_12987);
return statearr_13064;
})();if(inst_12988)
{var statearr_13065_13132 = state_13001__$1;(statearr_13065_13132[1] = 42);
} else
{var statearr_13066_13133 = state_13001__$1;(statearr_13066_13133[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 27))
{var inst_12940 = (state_13001[10]);var inst_12938 = (state_13001[12]);var inst_12945 = cljs.core._nth.call(null,inst_12938,inst_12940);var state_13001__$1 = (function (){var statearr_13067 = state_13001;(statearr_13067[8] = inst_12945);
return statearr_13067;
})();var statearr_13068_13134 = state_13001__$1;(statearr_13068_13134[2] = null);
(statearr_13068_13134[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 28))
{var inst_12958 = (state_13001[9]);var inst_12937 = (state_13001[11]);var inst_12958__$1 = cljs.core.seq.call(null,inst_12937);var state_13001__$1 = (function (){var statearr_13072 = state_13001;(statearr_13072[9] = inst_12958__$1);
return statearr_13072;
})();if(inst_12958__$1)
{var statearr_13073_13135 = state_13001__$1;(statearr_13073_13135[1] = 33);
} else
{var statearr_13074_13136 = state_13001__$1;(statearr_13074_13136[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 29))
{var inst_12985 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13075_13137 = state_13001__$1;(statearr_13075_13137[2] = inst_12985);
(statearr_13075_13137[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 30))
{var inst_12940 = (state_13001[10]);var inst_12937 = (state_13001[11]);var inst_12938 = (state_13001[12]);var inst_12939 = (state_13001[13]);var inst_12954 = (state_13001[2]);var inst_12955 = (inst_12940 + 1);var tmp13069 = inst_12937;var tmp13070 = inst_12938;var tmp13071 = inst_12939;var inst_12937__$1 = tmp13069;var inst_12938__$1 = tmp13070;var inst_12939__$1 = tmp13071;var inst_12940__$1 = inst_12955;var state_13001__$1 = (function (){var statearr_13076 = state_13001;(statearr_13076[10] = inst_12940__$1);
(statearr_13076[11] = inst_12937__$1);
(statearr_13076[12] = inst_12938__$1);
(statearr_13076[13] = inst_12939__$1);
(statearr_13076[31] = inst_12954);
return statearr_13076;
})();var statearr_13077_13138 = state_13001__$1;(statearr_13077_13138[2] = null);
(statearr_13077_13138[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 31))
{var inst_12945 = (state_13001[8]);var inst_12946 = (state_13001[2]);var inst_12947 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12948 = cljs.core.async.untap_STAR_.call(null,m,inst_12945);var state_13001__$1 = (function (){var statearr_13078 = state_13001;(statearr_13078[32] = inst_12946);
(statearr_13078[33] = inst_12947);
return statearr_13078;
})();var statearr_13079_13139 = state_13001__$1;(statearr_13079_13139[2] = inst_12948);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13001__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13083[0] = state_machine__5507__auto__);
(statearr_13083[1] = 1);
return statearr_13083;
});
var state_machine__5507__auto____1 = (function (state_13001){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13001);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13084){if((e13084 instanceof Object))
{var ex__5510__auto__ = e13084;var statearr_13085_13140 = state_13001;(statearr_13085_13140[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13141 = state_13001;
state_13001 = G__13141;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13001){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13086 = f__5522__auto__.call(null);(statearr_13086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13087);
return statearr_13086;
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
cljs.core.async.Mix = (function (){var obj13143 = {};return obj13143;
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
;var m = (function (){if(typeof cljs.core.async.t13253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13253 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13254){
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
this.meta13254 = meta13254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13253.cljs$lang$type = true;
cljs.core.async.t13253.cljs$lang$ctorStr = "cljs.core.async/t13253";
cljs.core.async.t13253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13255){var self__ = this;
var _13255__$1 = this;return self__.meta13254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13255,meta13254__$1){var self__ = this;
var _13255__$1 = this;return (new cljs.core.async.t13253(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13254){return (new cljs.core.async.t13253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13253(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13320){var state_val_13321 = (state_13320[1]);if((state_val_13321 === 1))
{var inst_13259 = (state_13320[7]);var inst_13259__$1 = calc_state.call(null);var inst_13260 = cljs.core.seq_QMARK_.call(null,inst_13259__$1);var state_13320__$1 = (function (){var statearr_13322 = state_13320;(statearr_13322[7] = inst_13259__$1);
return statearr_13322;
})();if(inst_13260)
{var statearr_13323_13363 = state_13320__$1;(statearr_13323_13363[1] = 2);
} else
{var statearr_13324_13364 = state_13320__$1;(statearr_13324_13364[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 2))
{var inst_13259 = (state_13320[7]);var inst_13262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13259);var state_13320__$1 = state_13320;var statearr_13325_13365 = state_13320__$1;(statearr_13325_13365[2] = inst_13262);
(statearr_13325_13365[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 3))
{var inst_13259 = (state_13320[7]);var state_13320__$1 = state_13320;var statearr_13326_13366 = state_13320__$1;(statearr_13326_13366[2] = inst_13259);
(statearr_13326_13366[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 4))
{var inst_13259 = (state_13320[7]);var inst_13265 = (state_13320[2]);var inst_13266 = cljs.core.get.call(null,inst_13265,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13267 = cljs.core.get.call(null,inst_13265,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13268 = cljs.core.get.call(null,inst_13265,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13269 = inst_13259;var state_13320__$1 = (function (){var statearr_13327 = state_13320;(statearr_13327[8] = inst_13269);
(statearr_13327[9] = inst_13268);
(statearr_13327[10] = inst_13267);
(statearr_13327[11] = inst_13266);
return statearr_13327;
})();var statearr_13328_13367 = state_13320__$1;(statearr_13328_13367[2] = null);
(statearr_13328_13367[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 5))
{var inst_13269 = (state_13320[8]);var inst_13272 = cljs.core.seq_QMARK_.call(null,inst_13269);var state_13320__$1 = state_13320;if(inst_13272)
{var statearr_13329_13368 = state_13320__$1;(statearr_13329_13368[1] = 7);
} else
{var statearr_13330_13369 = state_13320__$1;(statearr_13330_13369[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 6))
{var inst_13318 = (state_13320[2]);var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else
{if((state_val_13321 === 7))
{var inst_13269 = (state_13320[8]);var inst_13274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13269);var state_13320__$1 = state_13320;var statearr_13331_13370 = state_13320__$1;(statearr_13331_13370[2] = inst_13274);
(statearr_13331_13370[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 8))
{var inst_13269 = (state_13320[8]);var state_13320__$1 = state_13320;var statearr_13332_13371 = state_13320__$1;(statearr_13332_13371[2] = inst_13269);
(statearr_13332_13371[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 9))
{var inst_13277 = (state_13320[12]);var inst_13277__$1 = (state_13320[2]);var inst_13278 = cljs.core.get.call(null,inst_13277__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13279 = cljs.core.get.call(null,inst_13277__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13280 = cljs.core.get.call(null,inst_13277__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13320__$1 = (function (){var statearr_13333 = state_13320;(statearr_13333[12] = inst_13277__$1);
(statearr_13333[13] = inst_13279);
(statearr_13333[14] = inst_13280);
return statearr_13333;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13320__$1,10,inst_13278);
} else
{if((state_val_13321 === 10))
{var inst_13285 = (state_13320[15]);var inst_13284 = (state_13320[16]);var inst_13283 = (state_13320[2]);var inst_13284__$1 = cljs.core.nth.call(null,inst_13283,0,null);var inst_13285__$1 = cljs.core.nth.call(null,inst_13283,1,null);var inst_13286 = (inst_13284__$1 == null);var inst_13287 = cljs.core._EQ_.call(null,inst_13285__$1,change);var inst_13288 = (inst_13286) || (inst_13287);var state_13320__$1 = (function (){var statearr_13334 = state_13320;(statearr_13334[15] = inst_13285__$1);
(statearr_13334[16] = inst_13284__$1);
return statearr_13334;
})();if(cljs.core.truth_(inst_13288))
{var statearr_13335_13372 = state_13320__$1;(statearr_13335_13372[1] = 11);
} else
{var statearr_13336_13373 = state_13320__$1;(statearr_13336_13373[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 11))
{var inst_13284 = (state_13320[16]);var inst_13290 = (inst_13284 == null);var state_13320__$1 = state_13320;if(cljs.core.truth_(inst_13290))
{var statearr_13337_13374 = state_13320__$1;(statearr_13337_13374[1] = 14);
} else
{var statearr_13338_13375 = state_13320__$1;(statearr_13338_13375[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 12))
{var inst_13285 = (state_13320[15]);var inst_13299 = (state_13320[17]);var inst_13280 = (state_13320[14]);var inst_13299__$1 = inst_13280.call(null,inst_13285);var state_13320__$1 = (function (){var statearr_13339 = state_13320;(statearr_13339[17] = inst_13299__$1);
return statearr_13339;
})();if(cljs.core.truth_(inst_13299__$1))
{var statearr_13340_13376 = state_13320__$1;(statearr_13340_13376[1] = 17);
} else
{var statearr_13341_13377 = state_13320__$1;(statearr_13341_13377[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 13))
{var inst_13316 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13342_13378 = state_13320__$1;(statearr_13342_13378[2] = inst_13316);
(statearr_13342_13378[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 14))
{var inst_13285 = (state_13320[15]);var inst_13292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13285);var state_13320__$1 = state_13320;var statearr_13343_13379 = state_13320__$1;(statearr_13343_13379[2] = inst_13292);
(statearr_13343_13379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 15))
{var state_13320__$1 = state_13320;var statearr_13344_13380 = state_13320__$1;(statearr_13344_13380[2] = null);
(statearr_13344_13380[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 16))
{var inst_13295 = (state_13320[2]);var inst_13296 = calc_state.call(null);var inst_13269 = inst_13296;var state_13320__$1 = (function (){var statearr_13345 = state_13320;(statearr_13345[8] = inst_13269);
(statearr_13345[18] = inst_13295);
return statearr_13345;
})();var statearr_13346_13381 = state_13320__$1;(statearr_13346_13381[2] = null);
(statearr_13346_13381[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 17))
{var inst_13299 = (state_13320[17]);var state_13320__$1 = state_13320;var statearr_13347_13382 = state_13320__$1;(statearr_13347_13382[2] = inst_13299);
(statearr_13347_13382[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 18))
{var inst_13285 = (state_13320[15]);var inst_13279 = (state_13320[13]);var inst_13280 = (state_13320[14]);var inst_13302 = cljs.core.empty_QMARK_.call(null,inst_13280);var inst_13303 = inst_13279.call(null,inst_13285);var inst_13304 = cljs.core.not.call(null,inst_13303);var inst_13305 = (inst_13302) && (inst_13304);var state_13320__$1 = state_13320;var statearr_13348_13383 = state_13320__$1;(statearr_13348_13383[2] = inst_13305);
(statearr_13348_13383[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 19))
{var inst_13307 = (state_13320[2]);var state_13320__$1 = state_13320;if(cljs.core.truth_(inst_13307))
{var statearr_13349_13384 = state_13320__$1;(statearr_13349_13384[1] = 20);
} else
{var statearr_13350_13385 = state_13320__$1;(statearr_13350_13385[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 20))
{var inst_13284 = (state_13320[16]);var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,23,out,inst_13284);
} else
{if((state_val_13321 === 21))
{var state_13320__$1 = state_13320;var statearr_13351_13386 = state_13320__$1;(statearr_13351_13386[2] = null);
(statearr_13351_13386[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 22))
{var inst_13277 = (state_13320[12]);var inst_13313 = (state_13320[2]);var inst_13269 = inst_13277;var state_13320__$1 = (function (){var statearr_13352 = state_13320;(statearr_13352[19] = inst_13313);
(statearr_13352[8] = inst_13269);
return statearr_13352;
})();var statearr_13353_13387 = state_13320__$1;(statearr_13353_13387[2] = null);
(statearr_13353_13387[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 23))
{var inst_13310 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13354_13388 = state_13320__$1;(statearr_13354_13388[2] = inst_13310);
(statearr_13354_13388[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13358[0] = state_machine__5507__auto__);
(statearr_13358[1] = 1);
return statearr_13358;
});
var state_machine__5507__auto____1 = (function (state_13320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13359){if((e13359 instanceof Object))
{var ex__5510__auto__ = e13359;var statearr_13360_13389 = state_13320;(statearr_13360_13389[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13390 = state_13320;
state_13320 = G__13390;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13361 = f__5522__auto__.call(null);(statearr_13361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13362);
return statearr_13361;
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
cljs.core.async.Pub = (function (){var obj13392 = {};return obj13392;
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
return (function (p1__13393_SHARP_){if(cljs.core.truth_(p1__13393_SHARP_.call(null,topic)))
{return p1__13393_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13393_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13518 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13519){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13519 = meta13519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13518.cljs$lang$type = true;
cljs.core.async.t13518.cljs$lang$ctorStr = "cljs.core.async/t13518";
cljs.core.async.t13518.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13518");
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13520){var self__ = this;
var _13520__$1 = this;return self__.meta13519;
});})(mults,ensure_mult))
;
cljs.core.async.t13518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13520,meta13519__$1){var self__ = this;
var _13520__$1 = this;return (new cljs.core.async.t13518(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13519__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13518 = ((function (mults,ensure_mult){
return (function __GT_t13518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13519){return (new cljs.core.async.t13518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13519));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13518(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13594){var state_val_13595 = (state_13594[1]);if((state_val_13595 === 1))
{var state_13594__$1 = state_13594;var statearr_13596_13643 = state_13594__$1;(statearr_13596_13643[2] = null);
(statearr_13596_13643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 2))
{var state_13594__$1 = state_13594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13594__$1,4,ch);
} else
{if((state_val_13595 === 3))
{var inst_13592 = (state_13594[2]);var state_13594__$1 = state_13594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13594__$1,inst_13592);
} else
{if((state_val_13595 === 4))
{var inst_13523 = (state_13594[7]);var inst_13523__$1 = (state_13594[2]);var inst_13524 = (inst_13523__$1 == null);var state_13594__$1 = (function (){var statearr_13597 = state_13594;(statearr_13597[7] = inst_13523__$1);
return statearr_13597;
})();if(cljs.core.truth_(inst_13524))
{var statearr_13598_13644 = state_13594__$1;(statearr_13598_13644[1] = 5);
} else
{var statearr_13599_13645 = state_13594__$1;(statearr_13599_13645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 5))
{var inst_13530 = cljs.core.deref.call(null,mults);var inst_13531 = cljs.core.vals.call(null,inst_13530);var inst_13532 = cljs.core.seq.call(null,inst_13531);var inst_13533 = inst_13532;var inst_13534 = null;var inst_13535 = 0;var inst_13536 = 0;var state_13594__$1 = (function (){var statearr_13600 = state_13594;(statearr_13600[8] = inst_13535);
(statearr_13600[9] = inst_13536);
(statearr_13600[10] = inst_13534);
(statearr_13600[11] = inst_13533);
return statearr_13600;
})();var statearr_13601_13646 = state_13594__$1;(statearr_13601_13646[2] = null);
(statearr_13601_13646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 6))
{var inst_13523 = (state_13594[7]);var inst_13573 = (state_13594[12]);var inst_13571 = (state_13594[13]);var inst_13571__$1 = topic_fn.call(null,inst_13523);var inst_13572 = cljs.core.deref.call(null,mults);var inst_13573__$1 = cljs.core.get.call(null,inst_13572,inst_13571__$1);var state_13594__$1 = (function (){var statearr_13602 = state_13594;(statearr_13602[12] = inst_13573__$1);
(statearr_13602[13] = inst_13571__$1);
return statearr_13602;
})();if(cljs.core.truth_(inst_13573__$1))
{var statearr_13603_13647 = state_13594__$1;(statearr_13603_13647[1] = 19);
} else
{var statearr_13604_13648 = state_13594__$1;(statearr_13604_13648[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 7))
{var inst_13590 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13605_13649 = state_13594__$1;(statearr_13605_13649[2] = inst_13590);
(statearr_13605_13649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 8))
{var inst_13535 = (state_13594[8]);var inst_13536 = (state_13594[9]);var inst_13538 = (inst_13536 < inst_13535);var inst_13539 = inst_13538;var state_13594__$1 = state_13594;if(cljs.core.truth_(inst_13539))
{var statearr_13609_13650 = state_13594__$1;(statearr_13609_13650[1] = 10);
} else
{var statearr_13610_13651 = state_13594__$1;(statearr_13610_13651[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 9))
{var inst_13569 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13611_13652 = state_13594__$1;(statearr_13611_13652[2] = inst_13569);
(statearr_13611_13652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 10))
{var inst_13535 = (state_13594[8]);var inst_13536 = (state_13594[9]);var inst_13534 = (state_13594[10]);var inst_13533 = (state_13594[11]);var inst_13541 = cljs.core._nth.call(null,inst_13534,inst_13536);var inst_13542 = cljs.core.async.muxch_STAR_.call(null,inst_13541);var inst_13543 = cljs.core.async.close_BANG_.call(null,inst_13542);var inst_13544 = (inst_13536 + 1);var tmp13606 = inst_13535;var tmp13607 = inst_13534;var tmp13608 = inst_13533;var inst_13533__$1 = tmp13608;var inst_13534__$1 = tmp13607;var inst_13535__$1 = tmp13606;var inst_13536__$1 = inst_13544;var state_13594__$1 = (function (){var statearr_13612 = state_13594;(statearr_13612[8] = inst_13535__$1);
(statearr_13612[9] = inst_13536__$1);
(statearr_13612[14] = inst_13543);
(statearr_13612[10] = inst_13534__$1);
(statearr_13612[11] = inst_13533__$1);
return statearr_13612;
})();var statearr_13613_13653 = state_13594__$1;(statearr_13613_13653[2] = null);
(statearr_13613_13653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 11))
{var inst_13547 = (state_13594[15]);var inst_13533 = (state_13594[11]);var inst_13547__$1 = cljs.core.seq.call(null,inst_13533);var state_13594__$1 = (function (){var statearr_13614 = state_13594;(statearr_13614[15] = inst_13547__$1);
return statearr_13614;
})();if(inst_13547__$1)
{var statearr_13615_13654 = state_13594__$1;(statearr_13615_13654[1] = 13);
} else
{var statearr_13616_13655 = state_13594__$1;(statearr_13616_13655[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 12))
{var inst_13567 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13617_13656 = state_13594__$1;(statearr_13617_13656[2] = inst_13567);
(statearr_13617_13656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 13))
{var inst_13547 = (state_13594[15]);var inst_13549 = cljs.core.chunked_seq_QMARK_.call(null,inst_13547);var state_13594__$1 = state_13594;if(inst_13549)
{var statearr_13618_13657 = state_13594__$1;(statearr_13618_13657[1] = 16);
} else
{var statearr_13619_13658 = state_13594__$1;(statearr_13619_13658[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 14))
{var state_13594__$1 = state_13594;var statearr_13620_13659 = state_13594__$1;(statearr_13620_13659[2] = null);
(statearr_13620_13659[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 15))
{var inst_13565 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13621_13660 = state_13594__$1;(statearr_13621_13660[2] = inst_13565);
(statearr_13621_13660[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 16))
{var inst_13547 = (state_13594[15]);var inst_13551 = cljs.core.chunk_first.call(null,inst_13547);var inst_13552 = cljs.core.chunk_rest.call(null,inst_13547);var inst_13553 = cljs.core.count.call(null,inst_13551);var inst_13533 = inst_13552;var inst_13534 = inst_13551;var inst_13535 = inst_13553;var inst_13536 = 0;var state_13594__$1 = (function (){var statearr_13622 = state_13594;(statearr_13622[8] = inst_13535);
(statearr_13622[9] = inst_13536);
(statearr_13622[10] = inst_13534);
(statearr_13622[11] = inst_13533);
return statearr_13622;
})();var statearr_13623_13661 = state_13594__$1;(statearr_13623_13661[2] = null);
(statearr_13623_13661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 17))
{var inst_13547 = (state_13594[15]);var inst_13556 = cljs.core.first.call(null,inst_13547);var inst_13557 = cljs.core.async.muxch_STAR_.call(null,inst_13556);var inst_13558 = cljs.core.async.close_BANG_.call(null,inst_13557);var inst_13559 = cljs.core.next.call(null,inst_13547);var inst_13533 = inst_13559;var inst_13534 = null;var inst_13535 = 0;var inst_13536 = 0;var state_13594__$1 = (function (){var statearr_13624 = state_13594;(statearr_13624[16] = inst_13558);
(statearr_13624[8] = inst_13535);
(statearr_13624[9] = inst_13536);
(statearr_13624[10] = inst_13534);
(statearr_13624[11] = inst_13533);
return statearr_13624;
})();var statearr_13625_13662 = state_13594__$1;(statearr_13625_13662[2] = null);
(statearr_13625_13662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 18))
{var inst_13562 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13626_13663 = state_13594__$1;(statearr_13626_13663[2] = inst_13562);
(statearr_13626_13663[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 19))
{var state_13594__$1 = state_13594;var statearr_13627_13664 = state_13594__$1;(statearr_13627_13664[2] = null);
(statearr_13627_13664[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 20))
{var state_13594__$1 = state_13594;var statearr_13628_13665 = state_13594__$1;(statearr_13628_13665[2] = null);
(statearr_13628_13665[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 21))
{var inst_13587 = (state_13594[2]);var state_13594__$1 = (function (){var statearr_13629 = state_13594;(statearr_13629[17] = inst_13587);
return statearr_13629;
})();var statearr_13630_13666 = state_13594__$1;(statearr_13630_13666[2] = null);
(statearr_13630_13666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 22))
{var inst_13584 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13631_13667 = state_13594__$1;(statearr_13631_13667[2] = inst_13584);
(statearr_13631_13667[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 23))
{var inst_13571 = (state_13594[13]);var inst_13575 = (state_13594[2]);var inst_13576 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13571);var state_13594__$1 = (function (){var statearr_13632 = state_13594;(statearr_13632[18] = inst_13575);
return statearr_13632;
})();var statearr_13633_13668 = state_13594__$1;(statearr_13633_13668[2] = inst_13576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13594__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13595 === 24))
{var inst_13523 = (state_13594[7]);var inst_13573 = (state_13594[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13594,23,Object,null,22);var inst_13580 = cljs.core.async.muxch_STAR_.call(null,inst_13573);var state_13594__$1 = state_13594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13594__$1,25,inst_13580,inst_13523);
} else
{if((state_val_13595 === 25))
{var inst_13582 = (state_13594[2]);var state_13594__$1 = state_13594;var statearr_13634_13669 = state_13594__$1;(statearr_13634_13669[2] = inst_13582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13594__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13638[0] = state_machine__5507__auto__);
(statearr_13638[1] = 1);
return statearr_13638;
});
var state_machine__5507__auto____1 = (function (state_13594){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13594);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13639){if((e13639 instanceof Object))
{var ex__5510__auto__ = e13639;var statearr_13640_13670 = state_13594;(statearr_13640_13670[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13671 = state_13594;
state_13594 = G__13671;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13594){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13641 = f__5522__auto__.call(null);(statearr_13641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13642);
return statearr_13641;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13778){var state_val_13779 = (state_13778[1]);if((state_val_13779 === 1))
{var state_13778__$1 = state_13778;var statearr_13780_13809 = state_13778__$1;(statearr_13780_13809[2] = null);
(statearr_13780_13809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 2))
{var inst_13741 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13742 = 0;var state_13778__$1 = (function (){var statearr_13781 = state_13778;(statearr_13781[7] = inst_13742);
(statearr_13781[8] = inst_13741);
return statearr_13781;
})();var statearr_13782_13810 = state_13778__$1;(statearr_13782_13810[2] = null);
(statearr_13782_13810[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 3))
{var inst_13776 = (state_13778[2]);var state_13778__$1 = state_13778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13778__$1,inst_13776);
} else
{if((state_val_13779 === 4))
{var inst_13742 = (state_13778[7]);var inst_13744 = (inst_13742 < cnt);var state_13778__$1 = state_13778;if(cljs.core.truth_(inst_13744))
{var statearr_13783_13811 = state_13778__$1;(statearr_13783_13811[1] = 6);
} else
{var statearr_13784_13812 = state_13778__$1;(statearr_13784_13812[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 5))
{var inst_13762 = (state_13778[2]);var state_13778__$1 = (function (){var statearr_13785 = state_13778;(statearr_13785[9] = inst_13762);
return statearr_13785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13778__$1,12,dchan);
} else
{if((state_val_13779 === 6))
{var state_13778__$1 = state_13778;var statearr_13786_13813 = state_13778__$1;(statearr_13786_13813[2] = null);
(statearr_13786_13813[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 7))
{var state_13778__$1 = state_13778;var statearr_13787_13814 = state_13778__$1;(statearr_13787_13814[2] = null);
(statearr_13787_13814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 8))
{var inst_13760 = (state_13778[2]);var state_13778__$1 = state_13778;var statearr_13788_13815 = state_13778__$1;(statearr_13788_13815[2] = inst_13760);
(statearr_13788_13815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 9))
{var inst_13742 = (state_13778[7]);var inst_13755 = (state_13778[2]);var inst_13756 = (inst_13742 + 1);var inst_13742__$1 = inst_13756;var state_13778__$1 = (function (){var statearr_13789 = state_13778;(statearr_13789[10] = inst_13755);
(statearr_13789[7] = inst_13742__$1);
return statearr_13789;
})();var statearr_13790_13816 = state_13778__$1;(statearr_13790_13816[2] = null);
(statearr_13790_13816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 10))
{var inst_13746 = (state_13778[2]);var inst_13747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13778__$1 = (function (){var statearr_13791 = state_13778;(statearr_13791[11] = inst_13746);
return statearr_13791;
})();var statearr_13792_13817 = state_13778__$1;(statearr_13792_13817[2] = inst_13747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 11))
{var inst_13742 = (state_13778[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13778,10,Object,null,9);var inst_13751 = chs__$1.call(null,inst_13742);var inst_13752 = done.call(null,inst_13742);var inst_13753 = cljs.core.async.take_BANG_.call(null,inst_13751,inst_13752);var state_13778__$1 = state_13778;var statearr_13793_13818 = state_13778__$1;(statearr_13793_13818[2] = inst_13753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 12))
{var inst_13764 = (state_13778[12]);var inst_13764__$1 = (state_13778[2]);var inst_13765 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13764__$1);var state_13778__$1 = (function (){var statearr_13794 = state_13778;(statearr_13794[12] = inst_13764__$1);
return statearr_13794;
})();if(cljs.core.truth_(inst_13765))
{var statearr_13795_13819 = state_13778__$1;(statearr_13795_13819[1] = 13);
} else
{var statearr_13796_13820 = state_13778__$1;(statearr_13796_13820[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 13))
{var inst_13767 = cljs.core.async.close_BANG_.call(null,out);var state_13778__$1 = state_13778;var statearr_13797_13821 = state_13778__$1;(statearr_13797_13821[2] = inst_13767);
(statearr_13797_13821[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 14))
{var inst_13764 = (state_13778[12]);var inst_13769 = cljs.core.apply.call(null,f,inst_13764);var state_13778__$1 = state_13778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13778__$1,16,out,inst_13769);
} else
{if((state_val_13779 === 15))
{var inst_13774 = (state_13778[2]);var state_13778__$1 = state_13778;var statearr_13798_13822 = state_13778__$1;(statearr_13798_13822[2] = inst_13774);
(statearr_13798_13822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 16))
{var inst_13771 = (state_13778[2]);var state_13778__$1 = (function (){var statearr_13799 = state_13778;(statearr_13799[13] = inst_13771);
return statearr_13799;
})();var statearr_13800_13823 = state_13778__$1;(statearr_13800_13823[2] = null);
(statearr_13800_13823[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13804[0] = state_machine__5507__auto__);
(statearr_13804[1] = 1);
return statearr_13804;
});
var state_machine__5507__auto____1 = (function (state_13778){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13805){if((e13805 instanceof Object))
{var ex__5510__auto__ = e13805;var statearr_13806_13824 = state_13778;(statearr_13806_13824[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13825 = state_13778;
state_13778 = G__13825;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13778){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13807 = f__5522__auto__.call(null);(statearr_13807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13808);
return statearr_13807;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13909){var state_val_13910 = (state_13909[1]);if((state_val_13910 === 1))
{var inst_13880 = cljs.core.vec.call(null,chs);var inst_13881 = inst_13880;var state_13909__$1 = (function (){var statearr_13911 = state_13909;(statearr_13911[7] = inst_13881);
return statearr_13911;
})();var statearr_13912_13934 = state_13909__$1;(statearr_13912_13934[2] = null);
(statearr_13912_13934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 2))
{var inst_13881 = (state_13909[7]);var inst_13883 = cljs.core.count.call(null,inst_13881);var inst_13884 = (inst_13883 > 0);var state_13909__$1 = state_13909;if(cljs.core.truth_(inst_13884))
{var statearr_13913_13935 = state_13909__$1;(statearr_13913_13935[1] = 4);
} else
{var statearr_13914_13936 = state_13909__$1;(statearr_13914_13936[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 3))
{var inst_13907 = (state_13909[2]);var state_13909__$1 = state_13909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13909__$1,inst_13907);
} else
{if((state_val_13910 === 4))
{var inst_13881 = (state_13909[7]);var state_13909__$1 = state_13909;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13909__$1,7,inst_13881);
} else
{if((state_val_13910 === 5))
{var inst_13903 = cljs.core.async.close_BANG_.call(null,out);var state_13909__$1 = state_13909;var statearr_13915_13937 = state_13909__$1;(statearr_13915_13937[2] = inst_13903);
(statearr_13915_13937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 6))
{var inst_13905 = (state_13909[2]);var state_13909__$1 = state_13909;var statearr_13916_13938 = state_13909__$1;(statearr_13916_13938[2] = inst_13905);
(statearr_13916_13938[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 7))
{var inst_13888 = (state_13909[8]);var inst_13889 = (state_13909[9]);var inst_13888__$1 = (state_13909[2]);var inst_13889__$1 = cljs.core.nth.call(null,inst_13888__$1,0,null);var inst_13890 = cljs.core.nth.call(null,inst_13888__$1,1,null);var inst_13891 = (inst_13889__$1 == null);var state_13909__$1 = (function (){var statearr_13917 = state_13909;(statearr_13917[10] = inst_13890);
(statearr_13917[8] = inst_13888__$1);
(statearr_13917[9] = inst_13889__$1);
return statearr_13917;
})();if(cljs.core.truth_(inst_13891))
{var statearr_13918_13939 = state_13909__$1;(statearr_13918_13939[1] = 8);
} else
{var statearr_13919_13940 = state_13909__$1;(statearr_13919_13940[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 8))
{var inst_13881 = (state_13909[7]);var inst_13890 = (state_13909[10]);var inst_13888 = (state_13909[8]);var inst_13889 = (state_13909[9]);var inst_13893 = (function (){var c = inst_13890;var v = inst_13889;var vec__13886 = inst_13888;var cs = inst_13881;return ((function (c,v,vec__13886,cs,inst_13881,inst_13890,inst_13888,inst_13889,state_val_13910){
return (function (p1__13826_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13826_SHARP_);
});
;})(c,v,vec__13886,cs,inst_13881,inst_13890,inst_13888,inst_13889,state_val_13910))
})();var inst_13894 = cljs.core.filterv.call(null,inst_13893,inst_13881);var inst_13881__$1 = inst_13894;var state_13909__$1 = (function (){var statearr_13920 = state_13909;(statearr_13920[7] = inst_13881__$1);
return statearr_13920;
})();var statearr_13921_13941 = state_13909__$1;(statearr_13921_13941[2] = null);
(statearr_13921_13941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 9))
{var inst_13889 = (state_13909[9]);var state_13909__$1 = state_13909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13909__$1,11,out,inst_13889);
} else
{if((state_val_13910 === 10))
{var inst_13901 = (state_13909[2]);var state_13909__$1 = state_13909;var statearr_13923_13942 = state_13909__$1;(statearr_13923_13942[2] = inst_13901);
(statearr_13923_13942[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13910 === 11))
{var inst_13881 = (state_13909[7]);var inst_13898 = (state_13909[2]);var tmp13922 = inst_13881;var inst_13881__$1 = tmp13922;var state_13909__$1 = (function (){var statearr_13924 = state_13909;(statearr_13924[7] = inst_13881__$1);
(statearr_13924[11] = inst_13898);
return statearr_13924;
})();var statearr_13925_13943 = state_13909__$1;(statearr_13925_13943[2] = null);
(statearr_13925_13943[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13929 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13929[0] = state_machine__5507__auto__);
(statearr_13929[1] = 1);
return statearr_13929;
});
var state_machine__5507__auto____1 = (function (state_13909){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13930){if((e13930 instanceof Object))
{var ex__5510__auto__ = e13930;var statearr_13931_13944 = state_13909;(statearr_13931_13944[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13945 = state_13909;
state_13909 = G__13945;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13909){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13932 = f__5522__auto__.call(null);(statearr_13932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13933);
return statearr_13932;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14038 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14015){var state_val_14016 = (state_14015[1]);if((state_val_14016 === 1))
{var inst_13992 = 0;var state_14015__$1 = (function (){var statearr_14017 = state_14015;(statearr_14017[7] = inst_13992);
return statearr_14017;
})();var statearr_14018_14039 = state_14015__$1;(statearr_14018_14039[2] = null);
(statearr_14018_14039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 2))
{var inst_13992 = (state_14015[7]);var inst_13994 = (inst_13992 < n);var state_14015__$1 = state_14015;if(cljs.core.truth_(inst_13994))
{var statearr_14019_14040 = state_14015__$1;(statearr_14019_14040[1] = 4);
} else
{var statearr_14020_14041 = state_14015__$1;(statearr_14020_14041[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 3))
{var inst_14012 = (state_14015[2]);var inst_14013 = cljs.core.async.close_BANG_.call(null,out);var state_14015__$1 = (function (){var statearr_14021 = state_14015;(statearr_14021[8] = inst_14012);
return statearr_14021;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14015__$1,inst_14013);
} else
{if((state_val_14016 === 4))
{var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14015__$1,7,ch);
} else
{if((state_val_14016 === 5))
{var state_14015__$1 = state_14015;var statearr_14022_14042 = state_14015__$1;(statearr_14022_14042[2] = null);
(statearr_14022_14042[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 6))
{var inst_14010 = (state_14015[2]);var state_14015__$1 = state_14015;var statearr_14023_14043 = state_14015__$1;(statearr_14023_14043[2] = inst_14010);
(statearr_14023_14043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 7))
{var inst_13997 = (state_14015[9]);var inst_13997__$1 = (state_14015[2]);var inst_13998 = (inst_13997__$1 == null);var inst_13999 = cljs.core.not.call(null,inst_13998);var state_14015__$1 = (function (){var statearr_14024 = state_14015;(statearr_14024[9] = inst_13997__$1);
return statearr_14024;
})();if(inst_13999)
{var statearr_14025_14044 = state_14015__$1;(statearr_14025_14044[1] = 8);
} else
{var statearr_14026_14045 = state_14015__$1;(statearr_14026_14045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 8))
{var inst_13997 = (state_14015[9]);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14015__$1,11,out,inst_13997);
} else
{if((state_val_14016 === 9))
{var state_14015__$1 = state_14015;var statearr_14027_14046 = state_14015__$1;(statearr_14027_14046[2] = null);
(statearr_14027_14046[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 10))
{var inst_14007 = (state_14015[2]);var state_14015__$1 = state_14015;var statearr_14028_14047 = state_14015__$1;(statearr_14028_14047[2] = inst_14007);
(statearr_14028_14047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 11))
{var inst_13992 = (state_14015[7]);var inst_14002 = (state_14015[2]);var inst_14003 = (inst_13992 + 1);var inst_13992__$1 = inst_14003;var state_14015__$1 = (function (){var statearr_14029 = state_14015;(statearr_14029[10] = inst_14002);
(statearr_14029[7] = inst_13992__$1);
return statearr_14029;
})();var statearr_14030_14048 = state_14015__$1;(statearr_14030_14048[2] = null);
(statearr_14030_14048[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14034 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14034[0] = state_machine__5507__auto__);
(statearr_14034[1] = 1);
return statearr_14034;
});
var state_machine__5507__auto____1 = (function (state_14015){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14035){if((e14035 instanceof Object))
{var ex__5510__auto__ = e14035;var statearr_14036_14049 = state_14015;(statearr_14036_14049[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14050 = state_14015;
state_14015 = G__14050;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14037 = f__5522__auto__.call(null);(statearr_14037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14038);
return statearr_14037;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14122){var state_val_14123 = (state_14122[1]);if((state_val_14123 === 1))
{var inst_14099 = null;var state_14122__$1 = (function (){var statearr_14124 = state_14122;(statearr_14124[7] = inst_14099);
return statearr_14124;
})();var statearr_14125_14148 = state_14122__$1;(statearr_14125_14148[2] = null);
(statearr_14125_14148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 2))
{var state_14122__$1 = state_14122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14122__$1,4,ch);
} else
{if((state_val_14123 === 3))
{var inst_14119 = (state_14122[2]);var inst_14120 = cljs.core.async.close_BANG_.call(null,out);var state_14122__$1 = (function (){var statearr_14126 = state_14122;(statearr_14126[8] = inst_14119);
return statearr_14126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14122__$1,inst_14120);
} else
{if((state_val_14123 === 4))
{var inst_14102 = (state_14122[9]);var inst_14102__$1 = (state_14122[2]);var inst_14103 = (inst_14102__$1 == null);var inst_14104 = cljs.core.not.call(null,inst_14103);var state_14122__$1 = (function (){var statearr_14127 = state_14122;(statearr_14127[9] = inst_14102__$1);
return statearr_14127;
})();if(inst_14104)
{var statearr_14128_14149 = state_14122__$1;(statearr_14128_14149[1] = 5);
} else
{var statearr_14129_14150 = state_14122__$1;(statearr_14129_14150[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 5))
{var inst_14099 = (state_14122[7]);var inst_14102 = (state_14122[9]);var inst_14106 = cljs.core._EQ_.call(null,inst_14102,inst_14099);var state_14122__$1 = state_14122;if(inst_14106)
{var statearr_14130_14151 = state_14122__$1;(statearr_14130_14151[1] = 8);
} else
{var statearr_14131_14152 = state_14122__$1;(statearr_14131_14152[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 6))
{var state_14122__$1 = state_14122;var statearr_14133_14153 = state_14122__$1;(statearr_14133_14153[2] = null);
(statearr_14133_14153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 7))
{var inst_14117 = (state_14122[2]);var state_14122__$1 = state_14122;var statearr_14134_14154 = state_14122__$1;(statearr_14134_14154[2] = inst_14117);
(statearr_14134_14154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 8))
{var inst_14099 = (state_14122[7]);var tmp14132 = inst_14099;var inst_14099__$1 = tmp14132;var state_14122__$1 = (function (){var statearr_14135 = state_14122;(statearr_14135[7] = inst_14099__$1);
return statearr_14135;
})();var statearr_14136_14155 = state_14122__$1;(statearr_14136_14155[2] = null);
(statearr_14136_14155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 9))
{var inst_14102 = (state_14122[9]);var state_14122__$1 = state_14122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14122__$1,11,out,inst_14102);
} else
{if((state_val_14123 === 10))
{var inst_14114 = (state_14122[2]);var state_14122__$1 = state_14122;var statearr_14137_14156 = state_14122__$1;(statearr_14137_14156[2] = inst_14114);
(statearr_14137_14156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14123 === 11))
{var inst_14102 = (state_14122[9]);var inst_14111 = (state_14122[2]);var inst_14099 = inst_14102;var state_14122__$1 = (function (){var statearr_14138 = state_14122;(statearr_14138[7] = inst_14099);
(statearr_14138[10] = inst_14111);
return statearr_14138;
})();var statearr_14139_14157 = state_14122__$1;(statearr_14139_14157[2] = null);
(statearr_14139_14157[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14143 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14143[0] = state_machine__5507__auto__);
(statearr_14143[1] = 1);
return statearr_14143;
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
}catch (e14144){if((e14144 instanceof Object))
{var ex__5510__auto__ = e14144;var statearr_14145_14158 = state_14122;(statearr_14145_14158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14159 = state_14122;
state_14122 = G__14159;
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
})();var state__5523__auto__ = (function (){var statearr_14146 = f__5522__auto__.call(null);(statearr_14146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14147);
return statearr_14146;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14264){var state_val_14265 = (state_14264[1]);if((state_val_14265 === 1))
{var inst_14227 = (new Array(n));var inst_14228 = inst_14227;var inst_14229 = 0;var state_14264__$1 = (function (){var statearr_14266 = state_14264;(statearr_14266[7] = inst_14228);
(statearr_14266[8] = inst_14229);
return statearr_14266;
})();var statearr_14267_14295 = state_14264__$1;(statearr_14267_14295[2] = null);
(statearr_14267_14295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 2))
{var state_14264__$1 = state_14264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14264__$1,4,ch);
} else
{if((state_val_14265 === 3))
{var inst_14262 = (state_14264[2]);var state_14264__$1 = state_14264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14264__$1,inst_14262);
} else
{if((state_val_14265 === 4))
{var inst_14232 = (state_14264[9]);var inst_14232__$1 = (state_14264[2]);var inst_14233 = (inst_14232__$1 == null);var inst_14234 = cljs.core.not.call(null,inst_14233);var state_14264__$1 = (function (){var statearr_14268 = state_14264;(statearr_14268[9] = inst_14232__$1);
return statearr_14268;
})();if(inst_14234)
{var statearr_14269_14296 = state_14264__$1;(statearr_14269_14296[1] = 5);
} else
{var statearr_14270_14297 = state_14264__$1;(statearr_14270_14297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 5))
{var inst_14228 = (state_14264[7]);var inst_14229 = (state_14264[8]);var inst_14237 = (state_14264[10]);var inst_14232 = (state_14264[9]);var inst_14236 = (inst_14228[inst_14229] = inst_14232);var inst_14237__$1 = (inst_14229 + 1);var inst_14238 = (inst_14237__$1 < n);var state_14264__$1 = (function (){var statearr_14271 = state_14264;(statearr_14271[10] = inst_14237__$1);
(statearr_14271[11] = inst_14236);
return statearr_14271;
})();if(cljs.core.truth_(inst_14238))
{var statearr_14272_14298 = state_14264__$1;(statearr_14272_14298[1] = 8);
} else
{var statearr_14273_14299 = state_14264__$1;(statearr_14273_14299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 6))
{var inst_14229 = (state_14264[8]);var inst_14250 = (inst_14229 > 0);var state_14264__$1 = state_14264;if(cljs.core.truth_(inst_14250))
{var statearr_14275_14300 = state_14264__$1;(statearr_14275_14300[1] = 12);
} else
{var statearr_14276_14301 = state_14264__$1;(statearr_14276_14301[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 7))
{var inst_14260 = (state_14264[2]);var state_14264__$1 = state_14264;var statearr_14277_14302 = state_14264__$1;(statearr_14277_14302[2] = inst_14260);
(statearr_14277_14302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 8))
{var inst_14228 = (state_14264[7]);var inst_14237 = (state_14264[10]);var tmp14274 = inst_14228;var inst_14228__$1 = tmp14274;var inst_14229 = inst_14237;var state_14264__$1 = (function (){var statearr_14278 = state_14264;(statearr_14278[7] = inst_14228__$1);
(statearr_14278[8] = inst_14229);
return statearr_14278;
})();var statearr_14279_14303 = state_14264__$1;(statearr_14279_14303[2] = null);
(statearr_14279_14303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 9))
{var inst_14228 = (state_14264[7]);var inst_14242 = cljs.core.vec.call(null,inst_14228);var state_14264__$1 = state_14264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14264__$1,11,out,inst_14242);
} else
{if((state_val_14265 === 10))
{var inst_14248 = (state_14264[2]);var state_14264__$1 = state_14264;var statearr_14280_14304 = state_14264__$1;(statearr_14280_14304[2] = inst_14248);
(statearr_14280_14304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 11))
{var inst_14244 = (state_14264[2]);var inst_14245 = (new Array(n));var inst_14228 = inst_14245;var inst_14229 = 0;var state_14264__$1 = (function (){var statearr_14281 = state_14264;(statearr_14281[12] = inst_14244);
(statearr_14281[7] = inst_14228);
(statearr_14281[8] = inst_14229);
return statearr_14281;
})();var statearr_14282_14305 = state_14264__$1;(statearr_14282_14305[2] = null);
(statearr_14282_14305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 12))
{var inst_14228 = (state_14264[7]);var inst_14252 = cljs.core.vec.call(null,inst_14228);var state_14264__$1 = state_14264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14264__$1,15,out,inst_14252);
} else
{if((state_val_14265 === 13))
{var state_14264__$1 = state_14264;var statearr_14283_14306 = state_14264__$1;(statearr_14283_14306[2] = null);
(statearr_14283_14306[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 14))
{var inst_14257 = (state_14264[2]);var inst_14258 = cljs.core.async.close_BANG_.call(null,out);var state_14264__$1 = (function (){var statearr_14284 = state_14264;(statearr_14284[13] = inst_14257);
return statearr_14284;
})();var statearr_14285_14307 = state_14264__$1;(statearr_14285_14307[2] = inst_14258);
(statearr_14285_14307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14265 === 15))
{var inst_14254 = (state_14264[2]);var state_14264__$1 = state_14264;var statearr_14286_14308 = state_14264__$1;(statearr_14286_14308[2] = inst_14254);
(statearr_14286_14308[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14290[0] = state_machine__5507__auto__);
(statearr_14290[1] = 1);
return statearr_14290;
});
var state_machine__5507__auto____1 = (function (state_14264){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14264);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14291){if((e14291 instanceof Object))
{var ex__5510__auto__ = e14291;var statearr_14292_14309 = state_14264;(statearr_14292_14309[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14310 = state_14264;
state_14264 = G__14310;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14264){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14293 = f__5522__auto__.call(null);(statearr_14293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14294);
return statearr_14293;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14423){var state_val_14424 = (state_14423[1]);if((state_val_14424 === 1))
{var inst_14382 = [];var inst_14383 = inst_14382;var inst_14384 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14423__$1 = (function (){var statearr_14425 = state_14423;(statearr_14425[7] = inst_14384);
(statearr_14425[8] = inst_14383);
return statearr_14425;
})();var statearr_14426_14454 = state_14423__$1;(statearr_14426_14454[2] = null);
(statearr_14426_14454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 2))
{var state_14423__$1 = state_14423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14423__$1,4,ch);
} else
{if((state_val_14424 === 3))
{var inst_14421 = (state_14423[2]);var state_14423__$1 = state_14423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14423__$1,inst_14421);
} else
{if((state_val_14424 === 4))
{var inst_14387 = (state_14423[9]);var inst_14387__$1 = (state_14423[2]);var inst_14388 = (inst_14387__$1 == null);var inst_14389 = cljs.core.not.call(null,inst_14388);var state_14423__$1 = (function (){var statearr_14427 = state_14423;(statearr_14427[9] = inst_14387__$1);
return statearr_14427;
})();if(inst_14389)
{var statearr_14428_14455 = state_14423__$1;(statearr_14428_14455[1] = 5);
} else
{var statearr_14429_14456 = state_14423__$1;(statearr_14429_14456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 5))
{var inst_14391 = (state_14423[10]);var inst_14387 = (state_14423[9]);var inst_14384 = (state_14423[7]);var inst_14391__$1 = f.call(null,inst_14387);var inst_14392 = cljs.core._EQ_.call(null,inst_14391__$1,inst_14384);var inst_14393 = cljs.core.keyword_identical_QMARK_.call(null,inst_14384,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14394 = (inst_14392) || (inst_14393);var state_14423__$1 = (function (){var statearr_14430 = state_14423;(statearr_14430[10] = inst_14391__$1);
return statearr_14430;
})();if(cljs.core.truth_(inst_14394))
{var statearr_14431_14457 = state_14423__$1;(statearr_14431_14457[1] = 8);
} else
{var statearr_14432_14458 = state_14423__$1;(statearr_14432_14458[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 6))
{var inst_14383 = (state_14423[8]);var inst_14408 = inst_14383.length;var inst_14409 = (inst_14408 > 0);var state_14423__$1 = state_14423;if(cljs.core.truth_(inst_14409))
{var statearr_14434_14459 = state_14423__$1;(statearr_14434_14459[1] = 12);
} else
{var statearr_14435_14460 = state_14423__$1;(statearr_14435_14460[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 7))
{var inst_14419 = (state_14423[2]);var state_14423__$1 = state_14423;var statearr_14436_14461 = state_14423__$1;(statearr_14436_14461[2] = inst_14419);
(statearr_14436_14461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 8))
{var inst_14391 = (state_14423[10]);var inst_14387 = (state_14423[9]);var inst_14383 = (state_14423[8]);var inst_14396 = inst_14383.push(inst_14387);var tmp14433 = inst_14383;var inst_14383__$1 = tmp14433;var inst_14384 = inst_14391;var state_14423__$1 = (function (){var statearr_14437 = state_14423;(statearr_14437[7] = inst_14384);
(statearr_14437[8] = inst_14383__$1);
(statearr_14437[11] = inst_14396);
return statearr_14437;
})();var statearr_14438_14462 = state_14423__$1;(statearr_14438_14462[2] = null);
(statearr_14438_14462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 9))
{var inst_14383 = (state_14423[8]);var inst_14399 = cljs.core.vec.call(null,inst_14383);var state_14423__$1 = state_14423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14423__$1,11,out,inst_14399);
} else
{if((state_val_14424 === 10))
{var inst_14406 = (state_14423[2]);var state_14423__$1 = state_14423;var statearr_14439_14463 = state_14423__$1;(statearr_14439_14463[2] = inst_14406);
(statearr_14439_14463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 11))
{var inst_14391 = (state_14423[10]);var inst_14387 = (state_14423[9]);var inst_14401 = (state_14423[2]);var inst_14402 = [];var inst_14403 = inst_14402.push(inst_14387);var inst_14383 = inst_14402;var inst_14384 = inst_14391;var state_14423__$1 = (function (){var statearr_14440 = state_14423;(statearr_14440[12] = inst_14403);
(statearr_14440[13] = inst_14401);
(statearr_14440[7] = inst_14384);
(statearr_14440[8] = inst_14383);
return statearr_14440;
})();var statearr_14441_14464 = state_14423__$1;(statearr_14441_14464[2] = null);
(statearr_14441_14464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 12))
{var inst_14383 = (state_14423[8]);var inst_14411 = cljs.core.vec.call(null,inst_14383);var state_14423__$1 = state_14423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14423__$1,15,out,inst_14411);
} else
{if((state_val_14424 === 13))
{var state_14423__$1 = state_14423;var statearr_14442_14465 = state_14423__$1;(statearr_14442_14465[2] = null);
(statearr_14442_14465[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 14))
{var inst_14416 = (state_14423[2]);var inst_14417 = cljs.core.async.close_BANG_.call(null,out);var state_14423__$1 = (function (){var statearr_14443 = state_14423;(statearr_14443[14] = inst_14416);
return statearr_14443;
})();var statearr_14444_14466 = state_14423__$1;(statearr_14444_14466[2] = inst_14417);
(statearr_14444_14466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14424 === 15))
{var inst_14413 = (state_14423[2]);var state_14423__$1 = state_14423;var statearr_14445_14467 = state_14423__$1;(statearr_14445_14467[2] = inst_14413);
(statearr_14445_14467[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14449[0] = state_machine__5507__auto__);
(statearr_14449[1] = 1);
return statearr_14449;
});
var state_machine__5507__auto____1 = (function (state_14423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14423);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14450){if((e14450 instanceof Object))
{var ex__5510__auto__ = e14450;var statearr_14451_14468 = state_14423;(statearr_14451_14468[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14469 = state_14423;
state_14423 = G__14469;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14452 = f__5522__auto__.call(null);(statearr_14452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14453);
return statearr_14452;
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