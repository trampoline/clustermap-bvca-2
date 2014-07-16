// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_30422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_30424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_30424,opt_wrapper_30422,table_section_wrapper_30423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_30422,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_30423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_30423,cell_wrapper_30424,table_section_wrapper_30423,table_section_wrapper_30423]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30429 = cljs.core.seq.call(null,tbody);var chunk__30430 = null;var count__30431 = (0);var i__30432 = (0);while(true){
if((i__30432 < count__30431))
{var child = cljs.core._nth.call(null,chunk__30430,i__30432);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30433 = seq__30429;
var G__30434 = chunk__30430;
var G__30435 = count__30431;
var G__30436 = (i__30432 + (1));
seq__30429 = G__30433;
chunk__30430 = G__30434;
count__30431 = G__30435;
i__30432 = G__30436;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30429);if(temp__4126__auto__)
{var seq__30429__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30429__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30429__$1);{
var G__30437 = cljs.core.chunk_rest.call(null,seq__30429__$1);
var G__30438 = c__4299__auto__;
var G__30439 = cljs.core.count.call(null,c__4299__auto__);
var G__30440 = (0);
seq__30429 = G__30437;
chunk__30430 = G__30438;
count__30431 = G__30439;
i__30432 = G__30440;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30429__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30441 = cljs.core.next.call(null,seq__30429__$1);
var G__30442 = null;
var G__30443 = (0);
var G__30444 = (0);
seq__30429 = G__30441;
chunk__30430 = G__30442;
count__30431 = G__30443;
i__30432 = G__30444;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__30446 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30446,(0),null);var start_wrap = cljs.core.nth.call(null,vec__30446,(1),null);var end_wrap = cljs.core.nth.call(null,vec__30446,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__30447 = wrapper.lastChild;
var G__30448 = (level - (1));
wrapper = G__30447;
level = G__30448;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj30450 = {};return obj30450;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__30451){
var mesg = cljs.core.seq(arglist__30451);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__30452){
var mesg = cljs.core.seq(arglist__30452);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__30453){
var contents = cljs.core.seq(arglist__30453);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30454_SHARP_){return p1__30454_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30455_SHARP_,p2__30456_SHARP_){return goog.dom.insertChildAt(p1__30455_SHARP_,p2__30456_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30458_SHARP_,p2__30457_SHARP_){return goog.dom.insertSiblingBefore(p2__30457_SHARP_,p1__30458_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30460_SHARP_,p2__30459_SHARP_){return goog.dom.insertSiblingAfter(p2__30459_SHARP_,p1__30460_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30462_SHARP_,p2__30461_SHARP_){return goog.dom.replaceNode(p2__30461_SHARP_,p1__30462_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__30467_30471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30468_30472 = null;var count__30469_30473 = (0);var i__30470_30474 = (0);while(true){
if((i__30470_30474 < count__30469_30473))
{var n_30475 = cljs.core._nth.call(null,chunk__30468_30472,i__30470_30474);goog.style.setStyle(n_30475,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30476 = seq__30467_30471;
var G__30477 = chunk__30468_30472;
var G__30478 = count__30469_30473;
var G__30479 = (i__30470_30474 + (1));
seq__30467_30471 = G__30476;
chunk__30468_30472 = G__30477;
count__30469_30473 = G__30478;
i__30470_30474 = G__30479;
continue;
}
} else
{var temp__4126__auto___30480 = cljs.core.seq.call(null,seq__30467_30471);if(temp__4126__auto___30480)
{var seq__30467_30481__$1 = temp__4126__auto___30480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30467_30481__$1))
{var c__4299__auto___30482 = cljs.core.chunk_first.call(null,seq__30467_30481__$1);{
var G__30483 = cljs.core.chunk_rest.call(null,seq__30467_30481__$1);
var G__30484 = c__4299__auto___30482;
var G__30485 = cljs.core.count.call(null,c__4299__auto___30482);
var G__30486 = (0);
seq__30467_30471 = G__30483;
chunk__30468_30472 = G__30484;
count__30469_30473 = G__30485;
i__30470_30474 = G__30486;
continue;
}
} else
{var n_30487 = cljs.core.first.call(null,seq__30467_30481__$1);goog.style.setStyle(n_30487,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30488 = cljs.core.next.call(null,seq__30467_30481__$1);
var G__30489 = null;
var G__30490 = (0);
var G__30491 = (0);
seq__30467_30471 = G__30488;
chunk__30468_30472 = G__30489;
count__30469_30473 = G__30490;
i__30470_30474 = G__30491;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30492){
var content = cljs.core.first(arglist__30492);
arglist__30492 = cljs.core.next(arglist__30492);
var name = cljs.core.first(arglist__30492);
var value = cljs.core.rest(arglist__30492);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__30497_30501 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30498_30502 = null;var count__30499_30503 = (0);var i__30500_30504 = (0);while(true){
if((i__30500_30504 < count__30499_30503))
{var n_30505 = cljs.core._nth.call(null,chunk__30498_30502,i__30500_30504);n_30505.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30506 = seq__30497_30501;
var G__30507 = chunk__30498_30502;
var G__30508 = count__30499_30503;
var G__30509 = (i__30500_30504 + (1));
seq__30497_30501 = G__30506;
chunk__30498_30502 = G__30507;
count__30499_30503 = G__30508;
i__30500_30504 = G__30509;
continue;
}
} else
{var temp__4126__auto___30510 = cljs.core.seq.call(null,seq__30497_30501);if(temp__4126__auto___30510)
{var seq__30497_30511__$1 = temp__4126__auto___30510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30497_30511__$1))
{var c__4299__auto___30512 = cljs.core.chunk_first.call(null,seq__30497_30511__$1);{
var G__30513 = cljs.core.chunk_rest.call(null,seq__30497_30511__$1);
var G__30514 = c__4299__auto___30512;
var G__30515 = cljs.core.count.call(null,c__4299__auto___30512);
var G__30516 = (0);
seq__30497_30501 = G__30513;
chunk__30498_30502 = G__30514;
count__30499_30503 = G__30515;
i__30500_30504 = G__30516;
continue;
}
} else
{var n_30517 = cljs.core.first.call(null,seq__30497_30511__$1);n_30517.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30518 = cljs.core.next.call(null,seq__30497_30511__$1);
var G__30519 = null;
var G__30520 = (0);
var G__30521 = (0);
seq__30497_30501 = G__30518;
chunk__30498_30502 = G__30519;
count__30499_30503 = G__30520;
i__30500_30504 = G__30521;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30522){
var content = cljs.core.first(arglist__30522);
arglist__30522 = cljs.core.next(arglist__30522);
var name = cljs.core.first(arglist__30522);
var value = cljs.core.rest(arglist__30522);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30527_30531 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30528_30532 = null;var count__30529_30533 = (0);var i__30530_30534 = (0);while(true){
if((i__30530_30534 < count__30529_30533))
{var n_30535 = cljs.core._nth.call(null,chunk__30528_30532,i__30530_30534);n_30535.removeAttribute(cljs.core.name.call(null,name));
{
var G__30536 = seq__30527_30531;
var G__30537 = chunk__30528_30532;
var G__30538 = count__30529_30533;
var G__30539 = (i__30530_30534 + (1));
seq__30527_30531 = G__30536;
chunk__30528_30532 = G__30537;
count__30529_30533 = G__30538;
i__30530_30534 = G__30539;
continue;
}
} else
{var temp__4126__auto___30540 = cljs.core.seq.call(null,seq__30527_30531);if(temp__4126__auto___30540)
{var seq__30527_30541__$1 = temp__4126__auto___30540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30527_30541__$1))
{var c__4299__auto___30542 = cljs.core.chunk_first.call(null,seq__30527_30541__$1);{
var G__30543 = cljs.core.chunk_rest.call(null,seq__30527_30541__$1);
var G__30544 = c__4299__auto___30542;
var G__30545 = cljs.core.count.call(null,c__4299__auto___30542);
var G__30546 = (0);
seq__30527_30531 = G__30543;
chunk__30528_30532 = G__30544;
count__30529_30533 = G__30545;
i__30530_30534 = G__30546;
continue;
}
} else
{var n_30547 = cljs.core.first.call(null,seq__30527_30541__$1);n_30547.removeAttribute(cljs.core.name.call(null,name));
{
var G__30548 = cljs.core.next.call(null,seq__30527_30541__$1);
var G__30549 = null;
var G__30550 = (0);
var G__30551 = (0);
seq__30527_30531 = G__30548;
chunk__30528_30532 = G__30549;
count__30529_30533 = G__30550;
i__30530_30534 = G__30551;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30553 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30553,(0),null);var v = cljs.core.nth.call(null,vec__30553,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__30554_SHARP_){var attr = attrs__$1.item(p1__30554_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30561_30567 = cljs.core.seq.call(null,styles);var chunk__30562_30568 = null;var count__30563_30569 = (0);var i__30564_30570 = (0);while(true){
if((i__30564_30570 < count__30563_30569))
{var vec__30565_30571 = cljs.core._nth.call(null,chunk__30562_30568,i__30564_30570);var name_30572 = cljs.core.nth.call(null,vec__30565_30571,(0),null);var value_30573 = cljs.core.nth.call(null,vec__30565_30571,(1),null);domina.set_style_BANG_.call(null,content,name_30572,value_30573);
{
var G__30574 = seq__30561_30567;
var G__30575 = chunk__30562_30568;
var G__30576 = count__30563_30569;
var G__30577 = (i__30564_30570 + (1));
seq__30561_30567 = G__30574;
chunk__30562_30568 = G__30575;
count__30563_30569 = G__30576;
i__30564_30570 = G__30577;
continue;
}
} else
{var temp__4126__auto___30578 = cljs.core.seq.call(null,seq__30561_30567);if(temp__4126__auto___30578)
{var seq__30561_30579__$1 = temp__4126__auto___30578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30561_30579__$1))
{var c__4299__auto___30580 = cljs.core.chunk_first.call(null,seq__30561_30579__$1);{
var G__30581 = cljs.core.chunk_rest.call(null,seq__30561_30579__$1);
var G__30582 = c__4299__auto___30580;
var G__30583 = cljs.core.count.call(null,c__4299__auto___30580);
var G__30584 = (0);
seq__30561_30567 = G__30581;
chunk__30562_30568 = G__30582;
count__30563_30569 = G__30583;
i__30564_30570 = G__30584;
continue;
}
} else
{var vec__30566_30585 = cljs.core.first.call(null,seq__30561_30579__$1);var name_30586 = cljs.core.nth.call(null,vec__30566_30585,(0),null);var value_30587 = cljs.core.nth.call(null,vec__30566_30585,(1),null);domina.set_style_BANG_.call(null,content,name_30586,value_30587);
{
var G__30588 = cljs.core.next.call(null,seq__30561_30579__$1);
var G__30589 = null;
var G__30590 = (0);
var G__30591 = (0);
seq__30561_30567 = G__30588;
chunk__30562_30568 = G__30589;
count__30563_30569 = G__30590;
i__30564_30570 = G__30591;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30598_30604 = cljs.core.seq.call(null,attrs);var chunk__30599_30605 = null;var count__30600_30606 = (0);var i__30601_30607 = (0);while(true){
if((i__30601_30607 < count__30600_30606))
{var vec__30602_30608 = cljs.core._nth.call(null,chunk__30599_30605,i__30601_30607);var name_30609 = cljs.core.nth.call(null,vec__30602_30608,(0),null);var value_30610 = cljs.core.nth.call(null,vec__30602_30608,(1),null);domina.set_attr_BANG_.call(null,content,name_30609,value_30610);
{
var G__30611 = seq__30598_30604;
var G__30612 = chunk__30599_30605;
var G__30613 = count__30600_30606;
var G__30614 = (i__30601_30607 + (1));
seq__30598_30604 = G__30611;
chunk__30599_30605 = G__30612;
count__30600_30606 = G__30613;
i__30601_30607 = G__30614;
continue;
}
} else
{var temp__4126__auto___30615 = cljs.core.seq.call(null,seq__30598_30604);if(temp__4126__auto___30615)
{var seq__30598_30616__$1 = temp__4126__auto___30615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30598_30616__$1))
{var c__4299__auto___30617 = cljs.core.chunk_first.call(null,seq__30598_30616__$1);{
var G__30618 = cljs.core.chunk_rest.call(null,seq__30598_30616__$1);
var G__30619 = c__4299__auto___30617;
var G__30620 = cljs.core.count.call(null,c__4299__auto___30617);
var G__30621 = (0);
seq__30598_30604 = G__30618;
chunk__30599_30605 = G__30619;
count__30600_30606 = G__30620;
i__30601_30607 = G__30621;
continue;
}
} else
{var vec__30603_30622 = cljs.core.first.call(null,seq__30598_30616__$1);var name_30623 = cljs.core.nth.call(null,vec__30603_30622,(0),null);var value_30624 = cljs.core.nth.call(null,vec__30603_30622,(1),null);domina.set_attr_BANG_.call(null,content,name_30623,value_30624);
{
var G__30625 = cljs.core.next.call(null,seq__30598_30616__$1);
var G__30626 = null;
var G__30627 = (0);
var G__30628 = (0);
seq__30598_30604 = G__30625;
chunk__30599_30605 = G__30626;
count__30600_30606 = G__30627;
i__30601_30607 = G__30628;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30633_30637 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30634_30638 = null;var count__30635_30639 = (0);var i__30636_30640 = (0);while(true){
if((i__30636_30640 < count__30635_30639))
{var node_30641 = cljs.core._nth.call(null,chunk__30634_30638,i__30636_30640);goog.dom.classes.add(node_30641,class$);
{
var G__30642 = seq__30633_30637;
var G__30643 = chunk__30634_30638;
var G__30644 = count__30635_30639;
var G__30645 = (i__30636_30640 + (1));
seq__30633_30637 = G__30642;
chunk__30634_30638 = G__30643;
count__30635_30639 = G__30644;
i__30636_30640 = G__30645;
continue;
}
} else
{var temp__4126__auto___30646 = cljs.core.seq.call(null,seq__30633_30637);if(temp__4126__auto___30646)
{var seq__30633_30647__$1 = temp__4126__auto___30646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30633_30647__$1))
{var c__4299__auto___30648 = cljs.core.chunk_first.call(null,seq__30633_30647__$1);{
var G__30649 = cljs.core.chunk_rest.call(null,seq__30633_30647__$1);
var G__30650 = c__4299__auto___30648;
var G__30651 = cljs.core.count.call(null,c__4299__auto___30648);
var G__30652 = (0);
seq__30633_30637 = G__30649;
chunk__30634_30638 = G__30650;
count__30635_30639 = G__30651;
i__30636_30640 = G__30652;
continue;
}
} else
{var node_30653 = cljs.core.first.call(null,seq__30633_30647__$1);goog.dom.classes.add(node_30653,class$);
{
var G__30654 = cljs.core.next.call(null,seq__30633_30647__$1);
var G__30655 = null;
var G__30656 = (0);
var G__30657 = (0);
seq__30633_30637 = G__30654;
chunk__30634_30638 = G__30655;
count__30635_30639 = G__30656;
i__30636_30640 = G__30657;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30662_30666 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30663_30667 = null;var count__30664_30668 = (0);var i__30665_30669 = (0);while(true){
if((i__30665_30669 < count__30664_30668))
{var node_30670 = cljs.core._nth.call(null,chunk__30663_30667,i__30665_30669);goog.dom.classes.remove(node_30670,class$);
{
var G__30671 = seq__30662_30666;
var G__30672 = chunk__30663_30667;
var G__30673 = count__30664_30668;
var G__30674 = (i__30665_30669 + (1));
seq__30662_30666 = G__30671;
chunk__30663_30667 = G__30672;
count__30664_30668 = G__30673;
i__30665_30669 = G__30674;
continue;
}
} else
{var temp__4126__auto___30675 = cljs.core.seq.call(null,seq__30662_30666);if(temp__4126__auto___30675)
{var seq__30662_30676__$1 = temp__4126__auto___30675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30662_30676__$1))
{var c__4299__auto___30677 = cljs.core.chunk_first.call(null,seq__30662_30676__$1);{
var G__30678 = cljs.core.chunk_rest.call(null,seq__30662_30676__$1);
var G__30679 = c__4299__auto___30677;
var G__30680 = cljs.core.count.call(null,c__4299__auto___30677);
var G__30681 = (0);
seq__30662_30666 = G__30678;
chunk__30663_30667 = G__30679;
count__30664_30668 = G__30680;
i__30665_30669 = G__30681;
continue;
}
} else
{var node_30682 = cljs.core.first.call(null,seq__30662_30676__$1);goog.dom.classes.remove(node_30682,class$);
{
var G__30683 = cljs.core.next.call(null,seq__30662_30676__$1);
var G__30684 = null;
var G__30685 = (0);
var G__30686 = (0);
seq__30662_30666 = G__30683;
chunk__30663_30667 = G__30684;
count__30664_30668 = G__30685;
i__30665_30669 = G__30686;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30691_30695 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30692_30696 = null;var count__30693_30697 = (0);var i__30694_30698 = (0);while(true){
if((i__30694_30698 < count__30693_30697))
{var node_30699 = cljs.core._nth.call(null,chunk__30692_30696,i__30694_30698);goog.dom.classes.toggle(node_30699,class$);
{
var G__30700 = seq__30691_30695;
var G__30701 = chunk__30692_30696;
var G__30702 = count__30693_30697;
var G__30703 = (i__30694_30698 + (1));
seq__30691_30695 = G__30700;
chunk__30692_30696 = G__30701;
count__30693_30697 = G__30702;
i__30694_30698 = G__30703;
continue;
}
} else
{var temp__4126__auto___30704 = cljs.core.seq.call(null,seq__30691_30695);if(temp__4126__auto___30704)
{var seq__30691_30705__$1 = temp__4126__auto___30704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30691_30705__$1))
{var c__4299__auto___30706 = cljs.core.chunk_first.call(null,seq__30691_30705__$1);{
var G__30707 = cljs.core.chunk_rest.call(null,seq__30691_30705__$1);
var G__30708 = c__4299__auto___30706;
var G__30709 = cljs.core.count.call(null,c__4299__auto___30706);
var G__30710 = (0);
seq__30691_30695 = G__30707;
chunk__30692_30696 = G__30708;
count__30693_30697 = G__30709;
i__30694_30698 = G__30710;
continue;
}
} else
{var node_30711 = cljs.core.first.call(null,seq__30691_30705__$1);goog.dom.classes.toggle(node_30711,class$);
{
var G__30712 = cljs.core.next.call(null,seq__30691_30705__$1);
var G__30713 = null;
var G__30714 = (0);
var G__30715 = (0);
seq__30691_30695 = G__30712;
chunk__30692_30696 = G__30713;
count__30693_30697 = G__30714;
i__30694_30698 = G__30715;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30724__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30720_30725 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30721_30726 = null;var count__30722_30727 = (0);var i__30723_30728 = (0);while(true){
if((i__30723_30728 < count__30722_30727))
{var node_30729 = cljs.core._nth.call(null,chunk__30721_30726,i__30723_30728);goog.dom.classes.set(node_30729,classes_30724__$1);
{
var G__30730 = seq__30720_30725;
var G__30731 = chunk__30721_30726;
var G__30732 = count__30722_30727;
var G__30733 = (i__30723_30728 + (1));
seq__30720_30725 = G__30730;
chunk__30721_30726 = G__30731;
count__30722_30727 = G__30732;
i__30723_30728 = G__30733;
continue;
}
} else
{var temp__4126__auto___30734 = cljs.core.seq.call(null,seq__30720_30725);if(temp__4126__auto___30734)
{var seq__30720_30735__$1 = temp__4126__auto___30734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30720_30735__$1))
{var c__4299__auto___30736 = cljs.core.chunk_first.call(null,seq__30720_30735__$1);{
var G__30737 = cljs.core.chunk_rest.call(null,seq__30720_30735__$1);
var G__30738 = c__4299__auto___30736;
var G__30739 = cljs.core.count.call(null,c__4299__auto___30736);
var G__30740 = (0);
seq__30720_30725 = G__30737;
chunk__30721_30726 = G__30738;
count__30722_30727 = G__30739;
i__30723_30728 = G__30740;
continue;
}
} else
{var node_30741 = cljs.core.first.call(null,seq__30720_30735__$1);goog.dom.classes.set(node_30741,classes_30724__$1);
{
var G__30742 = cljs.core.next.call(null,seq__30720_30735__$1);
var G__30743 = null;
var G__30744 = (0);
var G__30745 = (0);
seq__30720_30725 = G__30742;
chunk__30721_30726 = G__30743;
count__30722_30727 = G__30744;
i__30723_30728 = G__30745;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30750_30754 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30751_30755 = null;var count__30752_30756 = (0);var i__30753_30757 = (0);while(true){
if((i__30753_30757 < count__30752_30756))
{var node_30758 = cljs.core._nth.call(null,chunk__30751_30755,i__30753_30757);goog.dom.setTextContent(node_30758,value);
{
var G__30759 = seq__30750_30754;
var G__30760 = chunk__30751_30755;
var G__30761 = count__30752_30756;
var G__30762 = (i__30753_30757 + (1));
seq__30750_30754 = G__30759;
chunk__30751_30755 = G__30760;
count__30752_30756 = G__30761;
i__30753_30757 = G__30762;
continue;
}
} else
{var temp__4126__auto___30763 = cljs.core.seq.call(null,seq__30750_30754);if(temp__4126__auto___30763)
{var seq__30750_30764__$1 = temp__4126__auto___30763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30750_30764__$1))
{var c__4299__auto___30765 = cljs.core.chunk_first.call(null,seq__30750_30764__$1);{
var G__30766 = cljs.core.chunk_rest.call(null,seq__30750_30764__$1);
var G__30767 = c__4299__auto___30765;
var G__30768 = cljs.core.count.call(null,c__4299__auto___30765);
var G__30769 = (0);
seq__30750_30754 = G__30766;
chunk__30751_30755 = G__30767;
count__30752_30756 = G__30768;
i__30753_30757 = G__30769;
continue;
}
} else
{var node_30770 = cljs.core.first.call(null,seq__30750_30764__$1);goog.dom.setTextContent(node_30770,value);
{
var G__30771 = cljs.core.next.call(null,seq__30750_30764__$1);
var G__30772 = null;
var G__30773 = (0);
var G__30774 = (0);
seq__30750_30754 = G__30771;
chunk__30751_30755 = G__30772;
count__30752_30756 = G__30773;
i__30753_30757 = G__30774;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30779_30783 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30780_30784 = null;var count__30781_30785 = (0);var i__30782_30786 = (0);while(true){
if((i__30782_30786 < count__30781_30785))
{var node_30787 = cljs.core._nth.call(null,chunk__30780_30784,i__30782_30786);goog.dom.forms.setValue(node_30787,value);
{
var G__30788 = seq__30779_30783;
var G__30789 = chunk__30780_30784;
var G__30790 = count__30781_30785;
var G__30791 = (i__30782_30786 + (1));
seq__30779_30783 = G__30788;
chunk__30780_30784 = G__30789;
count__30781_30785 = G__30790;
i__30782_30786 = G__30791;
continue;
}
} else
{var temp__4126__auto___30792 = cljs.core.seq.call(null,seq__30779_30783);if(temp__4126__auto___30792)
{var seq__30779_30793__$1 = temp__4126__auto___30792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30779_30793__$1))
{var c__4299__auto___30794 = cljs.core.chunk_first.call(null,seq__30779_30793__$1);{
var G__30795 = cljs.core.chunk_rest.call(null,seq__30779_30793__$1);
var G__30796 = c__4299__auto___30794;
var G__30797 = cljs.core.count.call(null,c__4299__auto___30794);
var G__30798 = (0);
seq__30779_30783 = G__30795;
chunk__30780_30784 = G__30796;
count__30781_30785 = G__30797;
i__30782_30786 = G__30798;
continue;
}
} else
{var node_30799 = cljs.core.first.call(null,seq__30779_30793__$1);goog.dom.forms.setValue(node_30799,value);
{
var G__30800 = cljs.core.next.call(null,seq__30779_30793__$1);
var G__30801 = null;
var G__30802 = (0);
var G__30803 = (0);
seq__30779_30783 = G__30800;
chunk__30780_30784 = G__30801;
count__30781_30785 = G__30802;
i__30782_30786 = G__30803;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_30814 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30810_30815 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30811_30816 = null;var count__30812_30817 = (0);var i__30813_30818 = (0);while(true){
if((i__30813_30818 < count__30812_30817))
{var node_30819 = cljs.core._nth.call(null,chunk__30811_30816,i__30813_30818);node_30819.innerHTML = value_30814;
{
var G__30820 = seq__30810_30815;
var G__30821 = chunk__30811_30816;
var G__30822 = count__30812_30817;
var G__30823 = (i__30813_30818 + (1));
seq__30810_30815 = G__30820;
chunk__30811_30816 = G__30821;
count__30812_30817 = G__30822;
i__30813_30818 = G__30823;
continue;
}
} else
{var temp__4126__auto___30824 = cljs.core.seq.call(null,seq__30810_30815);if(temp__4126__auto___30824)
{var seq__30810_30825__$1 = temp__4126__auto___30824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30810_30825__$1))
{var c__4299__auto___30826 = cljs.core.chunk_first.call(null,seq__30810_30825__$1);{
var G__30827 = cljs.core.chunk_rest.call(null,seq__30810_30825__$1);
var G__30828 = c__4299__auto___30826;
var G__30829 = cljs.core.count.call(null,c__4299__auto___30826);
var G__30830 = (0);
seq__30810_30815 = G__30827;
chunk__30811_30816 = G__30828;
count__30812_30817 = G__30829;
i__30813_30818 = G__30830;
continue;
}
} else
{var node_30831 = cljs.core.first.call(null,seq__30810_30825__$1);node_30831.innerHTML = value_30814;
{
var G__30832 = cljs.core.next.call(null,seq__30810_30825__$1);
var G__30833 = null;
var G__30834 = (0);
var G__30835 = (0);
seq__30810_30815 = G__30832;
chunk__30811_30816 = G__30833;
count__30812_30817 = G__30834;
i__30813_30818 = G__30835;
continue;
}
}
} else
{}
}
break;
}
}catch (e30809){if((e30809 instanceof Error))
{var e_30836 = e30809;domina.replace_children_BANG_.call(null,content,value_30814);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30809;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30843_30847 = cljs.core.seq.call(null,children);var chunk__30844_30848 = null;var count__30845_30849 = (0);var i__30846_30850 = (0);while(true){
if((i__30846_30850 < count__30845_30849))
{var child_30851 = cljs.core._nth.call(null,chunk__30844_30848,i__30846_30850);frag.appendChild(child_30851);
{
var G__30852 = seq__30843_30847;
var G__30853 = chunk__30844_30848;
var G__30854 = count__30845_30849;
var G__30855 = (i__30846_30850 + (1));
seq__30843_30847 = G__30852;
chunk__30844_30848 = G__30853;
count__30845_30849 = G__30854;
i__30846_30850 = G__30855;
continue;
}
} else
{var temp__4126__auto___30856 = cljs.core.seq.call(null,seq__30843_30847);if(temp__4126__auto___30856)
{var seq__30843_30857__$1 = temp__4126__auto___30856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30843_30857__$1))
{var c__4299__auto___30858 = cljs.core.chunk_first.call(null,seq__30843_30857__$1);{
var G__30859 = cljs.core.chunk_rest.call(null,seq__30843_30857__$1);
var G__30860 = c__4299__auto___30858;
var G__30861 = cljs.core.count.call(null,c__4299__auto___30858);
var G__30862 = (0);
seq__30843_30847 = G__30859;
chunk__30844_30848 = G__30860;
count__30845_30849 = G__30861;
i__30846_30850 = G__30862;
continue;
}
} else
{var child_30863 = cljs.core.first.call(null,seq__30843_30857__$1);frag.appendChild(child_30863);
{
var G__30864 = cljs.core.next.call(null,seq__30843_30857__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30843_30847 = G__30864;
chunk__30844_30848 = G__30865;
count__30845_30849 = G__30866;
i__30846_30850 = G__30867;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__30837_SHARP_,p2__30838_SHARP_){return f.call(null,p1__30837_SHARP_,p2__30838_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30869 = list_thing;if(G__30869)
{var bit__4193__auto__ = (G__30869.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30869.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30869.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30869);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30869);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30870 = content;if(G__30870)
{var bit__4193__auto__ = (G__30870.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30870.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30870.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30870);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__30871 = content;if(G__30871)
{var bit__4193__auto__ = (G__30871.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__30871.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30871.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30871);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
