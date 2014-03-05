// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50533 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50534 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50533,table_section_wrapper_50533,opt_wrapper_50532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50534,table_section_wrapper_50533,cell_wrapper_50534,opt_wrapper_50532,table_section_wrapper_50533,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50533]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50539 = cljs.core.seq.call(null,tbody);var chunk__50540 = null;var count__50541 = 0;var i__50542 = 0;while(true){
if((i__50542 < count__50541))
{var child = cljs.core._nth.call(null,chunk__50540,i__50542);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50543 = seq__50539;
var G__50544 = chunk__50540;
var G__50545 = count__50541;
var G__50546 = (i__50542 + 1);
seq__50539 = G__50543;
chunk__50540 = G__50544;
count__50541 = G__50545;
i__50542 = G__50546;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50539);if(temp__4092__auto__)
{var seq__50539__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50539__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50539__$1);{
var G__50547 = cljs.core.chunk_rest.call(null,seq__50539__$1);
var G__50548 = c__4189__auto__;
var G__50549 = cljs.core.count.call(null,c__4189__auto__);
var G__50550 = 0;
seq__50539 = G__50547;
chunk__50540 = G__50548;
count__50541 = G__50549;
i__50542 = G__50550;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50539__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50551 = cljs.core.next.call(null,seq__50539__$1);
var G__50552 = null;
var G__50553 = 0;
var G__50554 = 0;
seq__50539 = G__50551;
chunk__50540 = G__50552;
count__50541 = G__50553;
i__50542 = G__50554;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50556 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50556,0,null);var start_wrap = cljs.core.nth.call(null,vec__50556,1,null);var end_wrap = cljs.core.nth.call(null,vec__50556,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50557 = wrapper.lastChild;
var G__50558 = (level - 1);
wrapper = G__50557;
level = G__50558;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj50560 = {};return obj50560;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__50561){
var mesg = cljs.core.seq(arglist__50561);
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
log.cljs$lang$applyTo = (function (arglist__50562){
var mesg = cljs.core.seq(arglist__50562);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__50563){
var contents = cljs.core.seq(arglist__50563);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50564_SHARP_){return p1__50564_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50565_SHARP_,p2__50566_SHARP_){return goog.dom.insertChildAt(p1__50565_SHARP_,p2__50566_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50568_SHARP_,p2__50567_SHARP_){return goog.dom.insertSiblingBefore(p2__50567_SHARP_,p1__50568_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50570_SHARP_,p2__50569_SHARP_){return goog.dom.insertSiblingAfter(p2__50569_SHARP_,p1__50570_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50572_SHARP_,p2__50571_SHARP_){return goog.dom.replaceNode(p2__50571_SHARP_,p1__50572_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__50577_50581 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50578_50582 = null;var count__50579_50583 = 0;var i__50580_50584 = 0;while(true){
if((i__50580_50584 < count__50579_50583))
{var n_50585 = cljs.core._nth.call(null,chunk__50578_50582,i__50580_50584);goog.style.setStyle(n_50585,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50586 = seq__50577_50581;
var G__50587 = chunk__50578_50582;
var G__50588 = count__50579_50583;
var G__50589 = (i__50580_50584 + 1);
seq__50577_50581 = G__50586;
chunk__50578_50582 = G__50587;
count__50579_50583 = G__50588;
i__50580_50584 = G__50589;
continue;
}
} else
{var temp__4092__auto___50590 = cljs.core.seq.call(null,seq__50577_50581);if(temp__4092__auto___50590)
{var seq__50577_50591__$1 = temp__4092__auto___50590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50577_50591__$1))
{var c__4189__auto___50592 = cljs.core.chunk_first.call(null,seq__50577_50591__$1);{
var G__50593 = cljs.core.chunk_rest.call(null,seq__50577_50591__$1);
var G__50594 = c__4189__auto___50592;
var G__50595 = cljs.core.count.call(null,c__4189__auto___50592);
var G__50596 = 0;
seq__50577_50581 = G__50593;
chunk__50578_50582 = G__50594;
count__50579_50583 = G__50595;
i__50580_50584 = G__50596;
continue;
}
} else
{var n_50597 = cljs.core.first.call(null,seq__50577_50591__$1);goog.style.setStyle(n_50597,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50598 = cljs.core.next.call(null,seq__50577_50591__$1);
var G__50599 = null;
var G__50600 = 0;
var G__50601 = 0;
seq__50577_50581 = G__50598;
chunk__50578_50582 = G__50599;
count__50579_50583 = G__50600;
i__50580_50584 = G__50601;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50602){
var content = cljs.core.first(arglist__50602);
arglist__50602 = cljs.core.next(arglist__50602);
var name = cljs.core.first(arglist__50602);
var value = cljs.core.rest(arglist__50602);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__50607_50611 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50608_50612 = null;var count__50609_50613 = 0;var i__50610_50614 = 0;while(true){
if((i__50610_50614 < count__50609_50613))
{var n_50615 = cljs.core._nth.call(null,chunk__50608_50612,i__50610_50614);n_50615.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50616 = seq__50607_50611;
var G__50617 = chunk__50608_50612;
var G__50618 = count__50609_50613;
var G__50619 = (i__50610_50614 + 1);
seq__50607_50611 = G__50616;
chunk__50608_50612 = G__50617;
count__50609_50613 = G__50618;
i__50610_50614 = G__50619;
continue;
}
} else
{var temp__4092__auto___50620 = cljs.core.seq.call(null,seq__50607_50611);if(temp__4092__auto___50620)
{var seq__50607_50621__$1 = temp__4092__auto___50620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50607_50621__$1))
{var c__4189__auto___50622 = cljs.core.chunk_first.call(null,seq__50607_50621__$1);{
var G__50623 = cljs.core.chunk_rest.call(null,seq__50607_50621__$1);
var G__50624 = c__4189__auto___50622;
var G__50625 = cljs.core.count.call(null,c__4189__auto___50622);
var G__50626 = 0;
seq__50607_50611 = G__50623;
chunk__50608_50612 = G__50624;
count__50609_50613 = G__50625;
i__50610_50614 = G__50626;
continue;
}
} else
{var n_50627 = cljs.core.first.call(null,seq__50607_50621__$1);n_50627.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50628 = cljs.core.next.call(null,seq__50607_50621__$1);
var G__50629 = null;
var G__50630 = 0;
var G__50631 = 0;
seq__50607_50611 = G__50628;
chunk__50608_50612 = G__50629;
count__50609_50613 = G__50630;
i__50610_50614 = G__50631;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50632){
var content = cljs.core.first(arglist__50632);
arglist__50632 = cljs.core.next(arglist__50632);
var name = cljs.core.first(arglist__50632);
var value = cljs.core.rest(arglist__50632);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50637_50641 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50638_50642 = null;var count__50639_50643 = 0;var i__50640_50644 = 0;while(true){
if((i__50640_50644 < count__50639_50643))
{var n_50645 = cljs.core._nth.call(null,chunk__50638_50642,i__50640_50644);n_50645.removeAttribute(cljs.core.name.call(null,name));
{
var G__50646 = seq__50637_50641;
var G__50647 = chunk__50638_50642;
var G__50648 = count__50639_50643;
var G__50649 = (i__50640_50644 + 1);
seq__50637_50641 = G__50646;
chunk__50638_50642 = G__50647;
count__50639_50643 = G__50648;
i__50640_50644 = G__50649;
continue;
}
} else
{var temp__4092__auto___50650 = cljs.core.seq.call(null,seq__50637_50641);if(temp__4092__auto___50650)
{var seq__50637_50651__$1 = temp__4092__auto___50650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50637_50651__$1))
{var c__4189__auto___50652 = cljs.core.chunk_first.call(null,seq__50637_50651__$1);{
var G__50653 = cljs.core.chunk_rest.call(null,seq__50637_50651__$1);
var G__50654 = c__4189__auto___50652;
var G__50655 = cljs.core.count.call(null,c__4189__auto___50652);
var G__50656 = 0;
seq__50637_50641 = G__50653;
chunk__50638_50642 = G__50654;
count__50639_50643 = G__50655;
i__50640_50644 = G__50656;
continue;
}
} else
{var n_50657 = cljs.core.first.call(null,seq__50637_50651__$1);n_50657.removeAttribute(cljs.core.name.call(null,name));
{
var G__50658 = cljs.core.next.call(null,seq__50637_50651__$1);
var G__50659 = null;
var G__50660 = 0;
var G__50661 = 0;
seq__50637_50641 = G__50658;
chunk__50638_50642 = G__50659;
count__50639_50643 = G__50660;
i__50640_50644 = G__50661;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50663 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50663,0,null);var v = cljs.core.nth.call(null,vec__50663,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50664_SHARP_){var attr = attrs__$1.item(p1__50664_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50671_50677 = cljs.core.seq.call(null,styles);var chunk__50672_50678 = null;var count__50673_50679 = 0;var i__50674_50680 = 0;while(true){
if((i__50674_50680 < count__50673_50679))
{var vec__50675_50681 = cljs.core._nth.call(null,chunk__50672_50678,i__50674_50680);var name_50682 = cljs.core.nth.call(null,vec__50675_50681,0,null);var value_50683 = cljs.core.nth.call(null,vec__50675_50681,1,null);domina.set_style_BANG_.call(null,content,name_50682,value_50683);
{
var G__50684 = seq__50671_50677;
var G__50685 = chunk__50672_50678;
var G__50686 = count__50673_50679;
var G__50687 = (i__50674_50680 + 1);
seq__50671_50677 = G__50684;
chunk__50672_50678 = G__50685;
count__50673_50679 = G__50686;
i__50674_50680 = G__50687;
continue;
}
} else
{var temp__4092__auto___50688 = cljs.core.seq.call(null,seq__50671_50677);if(temp__4092__auto___50688)
{var seq__50671_50689__$1 = temp__4092__auto___50688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50671_50689__$1))
{var c__4189__auto___50690 = cljs.core.chunk_first.call(null,seq__50671_50689__$1);{
var G__50691 = cljs.core.chunk_rest.call(null,seq__50671_50689__$1);
var G__50692 = c__4189__auto___50690;
var G__50693 = cljs.core.count.call(null,c__4189__auto___50690);
var G__50694 = 0;
seq__50671_50677 = G__50691;
chunk__50672_50678 = G__50692;
count__50673_50679 = G__50693;
i__50674_50680 = G__50694;
continue;
}
} else
{var vec__50676_50695 = cljs.core.first.call(null,seq__50671_50689__$1);var name_50696 = cljs.core.nth.call(null,vec__50676_50695,0,null);var value_50697 = cljs.core.nth.call(null,vec__50676_50695,1,null);domina.set_style_BANG_.call(null,content,name_50696,value_50697);
{
var G__50698 = cljs.core.next.call(null,seq__50671_50689__$1);
var G__50699 = null;
var G__50700 = 0;
var G__50701 = 0;
seq__50671_50677 = G__50698;
chunk__50672_50678 = G__50699;
count__50673_50679 = G__50700;
i__50674_50680 = G__50701;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50708_50714 = cljs.core.seq.call(null,attrs);var chunk__50709_50715 = null;var count__50710_50716 = 0;var i__50711_50717 = 0;while(true){
if((i__50711_50717 < count__50710_50716))
{var vec__50712_50718 = cljs.core._nth.call(null,chunk__50709_50715,i__50711_50717);var name_50719 = cljs.core.nth.call(null,vec__50712_50718,0,null);var value_50720 = cljs.core.nth.call(null,vec__50712_50718,1,null);domina.set_attr_BANG_.call(null,content,name_50719,value_50720);
{
var G__50721 = seq__50708_50714;
var G__50722 = chunk__50709_50715;
var G__50723 = count__50710_50716;
var G__50724 = (i__50711_50717 + 1);
seq__50708_50714 = G__50721;
chunk__50709_50715 = G__50722;
count__50710_50716 = G__50723;
i__50711_50717 = G__50724;
continue;
}
} else
{var temp__4092__auto___50725 = cljs.core.seq.call(null,seq__50708_50714);if(temp__4092__auto___50725)
{var seq__50708_50726__$1 = temp__4092__auto___50725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50708_50726__$1))
{var c__4189__auto___50727 = cljs.core.chunk_first.call(null,seq__50708_50726__$1);{
var G__50728 = cljs.core.chunk_rest.call(null,seq__50708_50726__$1);
var G__50729 = c__4189__auto___50727;
var G__50730 = cljs.core.count.call(null,c__4189__auto___50727);
var G__50731 = 0;
seq__50708_50714 = G__50728;
chunk__50709_50715 = G__50729;
count__50710_50716 = G__50730;
i__50711_50717 = G__50731;
continue;
}
} else
{var vec__50713_50732 = cljs.core.first.call(null,seq__50708_50726__$1);var name_50733 = cljs.core.nth.call(null,vec__50713_50732,0,null);var value_50734 = cljs.core.nth.call(null,vec__50713_50732,1,null);domina.set_attr_BANG_.call(null,content,name_50733,value_50734);
{
var G__50735 = cljs.core.next.call(null,seq__50708_50726__$1);
var G__50736 = null;
var G__50737 = 0;
var G__50738 = 0;
seq__50708_50714 = G__50735;
chunk__50709_50715 = G__50736;
count__50710_50716 = G__50737;
i__50711_50717 = G__50738;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50743_50747 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50744_50748 = null;var count__50745_50749 = 0;var i__50746_50750 = 0;while(true){
if((i__50746_50750 < count__50745_50749))
{var node_50751 = cljs.core._nth.call(null,chunk__50744_50748,i__50746_50750);goog.dom.classes.add(node_50751,class$);
{
var G__50752 = seq__50743_50747;
var G__50753 = chunk__50744_50748;
var G__50754 = count__50745_50749;
var G__50755 = (i__50746_50750 + 1);
seq__50743_50747 = G__50752;
chunk__50744_50748 = G__50753;
count__50745_50749 = G__50754;
i__50746_50750 = G__50755;
continue;
}
} else
{var temp__4092__auto___50756 = cljs.core.seq.call(null,seq__50743_50747);if(temp__4092__auto___50756)
{var seq__50743_50757__$1 = temp__4092__auto___50756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50743_50757__$1))
{var c__4189__auto___50758 = cljs.core.chunk_first.call(null,seq__50743_50757__$1);{
var G__50759 = cljs.core.chunk_rest.call(null,seq__50743_50757__$1);
var G__50760 = c__4189__auto___50758;
var G__50761 = cljs.core.count.call(null,c__4189__auto___50758);
var G__50762 = 0;
seq__50743_50747 = G__50759;
chunk__50744_50748 = G__50760;
count__50745_50749 = G__50761;
i__50746_50750 = G__50762;
continue;
}
} else
{var node_50763 = cljs.core.first.call(null,seq__50743_50757__$1);goog.dom.classes.add(node_50763,class$);
{
var G__50764 = cljs.core.next.call(null,seq__50743_50757__$1);
var G__50765 = null;
var G__50766 = 0;
var G__50767 = 0;
seq__50743_50747 = G__50764;
chunk__50744_50748 = G__50765;
count__50745_50749 = G__50766;
i__50746_50750 = G__50767;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50772_50776 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50773_50777 = null;var count__50774_50778 = 0;var i__50775_50779 = 0;while(true){
if((i__50775_50779 < count__50774_50778))
{var node_50780 = cljs.core._nth.call(null,chunk__50773_50777,i__50775_50779);goog.dom.classes.remove(node_50780,class$);
{
var G__50781 = seq__50772_50776;
var G__50782 = chunk__50773_50777;
var G__50783 = count__50774_50778;
var G__50784 = (i__50775_50779 + 1);
seq__50772_50776 = G__50781;
chunk__50773_50777 = G__50782;
count__50774_50778 = G__50783;
i__50775_50779 = G__50784;
continue;
}
} else
{var temp__4092__auto___50785 = cljs.core.seq.call(null,seq__50772_50776);if(temp__4092__auto___50785)
{var seq__50772_50786__$1 = temp__4092__auto___50785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50772_50786__$1))
{var c__4189__auto___50787 = cljs.core.chunk_first.call(null,seq__50772_50786__$1);{
var G__50788 = cljs.core.chunk_rest.call(null,seq__50772_50786__$1);
var G__50789 = c__4189__auto___50787;
var G__50790 = cljs.core.count.call(null,c__4189__auto___50787);
var G__50791 = 0;
seq__50772_50776 = G__50788;
chunk__50773_50777 = G__50789;
count__50774_50778 = G__50790;
i__50775_50779 = G__50791;
continue;
}
} else
{var node_50792 = cljs.core.first.call(null,seq__50772_50786__$1);goog.dom.classes.remove(node_50792,class$);
{
var G__50793 = cljs.core.next.call(null,seq__50772_50786__$1);
var G__50794 = null;
var G__50795 = 0;
var G__50796 = 0;
seq__50772_50776 = G__50793;
chunk__50773_50777 = G__50794;
count__50774_50778 = G__50795;
i__50775_50779 = G__50796;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50801_50805 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50802_50806 = null;var count__50803_50807 = 0;var i__50804_50808 = 0;while(true){
if((i__50804_50808 < count__50803_50807))
{var node_50809 = cljs.core._nth.call(null,chunk__50802_50806,i__50804_50808);goog.dom.classes.toggle(node_50809,class$);
{
var G__50810 = seq__50801_50805;
var G__50811 = chunk__50802_50806;
var G__50812 = count__50803_50807;
var G__50813 = (i__50804_50808 + 1);
seq__50801_50805 = G__50810;
chunk__50802_50806 = G__50811;
count__50803_50807 = G__50812;
i__50804_50808 = G__50813;
continue;
}
} else
{var temp__4092__auto___50814 = cljs.core.seq.call(null,seq__50801_50805);if(temp__4092__auto___50814)
{var seq__50801_50815__$1 = temp__4092__auto___50814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50801_50815__$1))
{var c__4189__auto___50816 = cljs.core.chunk_first.call(null,seq__50801_50815__$1);{
var G__50817 = cljs.core.chunk_rest.call(null,seq__50801_50815__$1);
var G__50818 = c__4189__auto___50816;
var G__50819 = cljs.core.count.call(null,c__4189__auto___50816);
var G__50820 = 0;
seq__50801_50805 = G__50817;
chunk__50802_50806 = G__50818;
count__50803_50807 = G__50819;
i__50804_50808 = G__50820;
continue;
}
} else
{var node_50821 = cljs.core.first.call(null,seq__50801_50815__$1);goog.dom.classes.toggle(node_50821,class$);
{
var G__50822 = cljs.core.next.call(null,seq__50801_50815__$1);
var G__50823 = null;
var G__50824 = 0;
var G__50825 = 0;
seq__50801_50805 = G__50822;
chunk__50802_50806 = G__50823;
count__50803_50807 = G__50824;
i__50804_50808 = G__50825;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50834__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50830_50835 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50831_50836 = null;var count__50832_50837 = 0;var i__50833_50838 = 0;while(true){
if((i__50833_50838 < count__50832_50837))
{var node_50839 = cljs.core._nth.call(null,chunk__50831_50836,i__50833_50838);goog.dom.classes.set(node_50839,classes_50834__$1);
{
var G__50840 = seq__50830_50835;
var G__50841 = chunk__50831_50836;
var G__50842 = count__50832_50837;
var G__50843 = (i__50833_50838 + 1);
seq__50830_50835 = G__50840;
chunk__50831_50836 = G__50841;
count__50832_50837 = G__50842;
i__50833_50838 = G__50843;
continue;
}
} else
{var temp__4092__auto___50844 = cljs.core.seq.call(null,seq__50830_50835);if(temp__4092__auto___50844)
{var seq__50830_50845__$1 = temp__4092__auto___50844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50830_50845__$1))
{var c__4189__auto___50846 = cljs.core.chunk_first.call(null,seq__50830_50845__$1);{
var G__50847 = cljs.core.chunk_rest.call(null,seq__50830_50845__$1);
var G__50848 = c__4189__auto___50846;
var G__50849 = cljs.core.count.call(null,c__4189__auto___50846);
var G__50850 = 0;
seq__50830_50835 = G__50847;
chunk__50831_50836 = G__50848;
count__50832_50837 = G__50849;
i__50833_50838 = G__50850;
continue;
}
} else
{var node_50851 = cljs.core.first.call(null,seq__50830_50845__$1);goog.dom.classes.set(node_50851,classes_50834__$1);
{
var G__50852 = cljs.core.next.call(null,seq__50830_50845__$1);
var G__50853 = null;
var G__50854 = 0;
var G__50855 = 0;
seq__50830_50835 = G__50852;
chunk__50831_50836 = G__50853;
count__50832_50837 = G__50854;
i__50833_50838 = G__50855;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50860_50864 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50861_50865 = null;var count__50862_50866 = 0;var i__50863_50867 = 0;while(true){
if((i__50863_50867 < count__50862_50866))
{var node_50868 = cljs.core._nth.call(null,chunk__50861_50865,i__50863_50867);goog.dom.setTextContent(node_50868,value);
{
var G__50869 = seq__50860_50864;
var G__50870 = chunk__50861_50865;
var G__50871 = count__50862_50866;
var G__50872 = (i__50863_50867 + 1);
seq__50860_50864 = G__50869;
chunk__50861_50865 = G__50870;
count__50862_50866 = G__50871;
i__50863_50867 = G__50872;
continue;
}
} else
{var temp__4092__auto___50873 = cljs.core.seq.call(null,seq__50860_50864);if(temp__4092__auto___50873)
{var seq__50860_50874__$1 = temp__4092__auto___50873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50860_50874__$1))
{var c__4189__auto___50875 = cljs.core.chunk_first.call(null,seq__50860_50874__$1);{
var G__50876 = cljs.core.chunk_rest.call(null,seq__50860_50874__$1);
var G__50877 = c__4189__auto___50875;
var G__50878 = cljs.core.count.call(null,c__4189__auto___50875);
var G__50879 = 0;
seq__50860_50864 = G__50876;
chunk__50861_50865 = G__50877;
count__50862_50866 = G__50878;
i__50863_50867 = G__50879;
continue;
}
} else
{var node_50880 = cljs.core.first.call(null,seq__50860_50874__$1);goog.dom.setTextContent(node_50880,value);
{
var G__50881 = cljs.core.next.call(null,seq__50860_50874__$1);
var G__50882 = null;
var G__50883 = 0;
var G__50884 = 0;
seq__50860_50864 = G__50881;
chunk__50861_50865 = G__50882;
count__50862_50866 = G__50883;
i__50863_50867 = G__50884;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50889_50893 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50890_50894 = null;var count__50891_50895 = 0;var i__50892_50896 = 0;while(true){
if((i__50892_50896 < count__50891_50895))
{var node_50897 = cljs.core._nth.call(null,chunk__50890_50894,i__50892_50896);goog.dom.forms.setValue(node_50897,value);
{
var G__50898 = seq__50889_50893;
var G__50899 = chunk__50890_50894;
var G__50900 = count__50891_50895;
var G__50901 = (i__50892_50896 + 1);
seq__50889_50893 = G__50898;
chunk__50890_50894 = G__50899;
count__50891_50895 = G__50900;
i__50892_50896 = G__50901;
continue;
}
} else
{var temp__4092__auto___50902 = cljs.core.seq.call(null,seq__50889_50893);if(temp__4092__auto___50902)
{var seq__50889_50903__$1 = temp__4092__auto___50902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50889_50903__$1))
{var c__4189__auto___50904 = cljs.core.chunk_first.call(null,seq__50889_50903__$1);{
var G__50905 = cljs.core.chunk_rest.call(null,seq__50889_50903__$1);
var G__50906 = c__4189__auto___50904;
var G__50907 = cljs.core.count.call(null,c__4189__auto___50904);
var G__50908 = 0;
seq__50889_50893 = G__50905;
chunk__50890_50894 = G__50906;
count__50891_50895 = G__50907;
i__50892_50896 = G__50908;
continue;
}
} else
{var node_50909 = cljs.core.first.call(null,seq__50889_50903__$1);goog.dom.forms.setValue(node_50909,value);
{
var G__50910 = cljs.core.next.call(null,seq__50889_50903__$1);
var G__50911 = null;
var G__50912 = 0;
var G__50913 = 0;
seq__50889_50893 = G__50910;
chunk__50890_50894 = G__50911;
count__50891_50895 = G__50912;
i__50892_50896 = G__50913;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50924 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50920_50925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50921_50926 = null;var count__50922_50927 = 0;var i__50923_50928 = 0;while(true){
if((i__50923_50928 < count__50922_50927))
{var node_50929 = cljs.core._nth.call(null,chunk__50921_50926,i__50923_50928);node_50929.innerHTML = value_50924;
{
var G__50930 = seq__50920_50925;
var G__50931 = chunk__50921_50926;
var G__50932 = count__50922_50927;
var G__50933 = (i__50923_50928 + 1);
seq__50920_50925 = G__50930;
chunk__50921_50926 = G__50931;
count__50922_50927 = G__50932;
i__50923_50928 = G__50933;
continue;
}
} else
{var temp__4092__auto___50934 = cljs.core.seq.call(null,seq__50920_50925);if(temp__4092__auto___50934)
{var seq__50920_50935__$1 = temp__4092__auto___50934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50920_50935__$1))
{var c__4189__auto___50936 = cljs.core.chunk_first.call(null,seq__50920_50935__$1);{
var G__50937 = cljs.core.chunk_rest.call(null,seq__50920_50935__$1);
var G__50938 = c__4189__auto___50936;
var G__50939 = cljs.core.count.call(null,c__4189__auto___50936);
var G__50940 = 0;
seq__50920_50925 = G__50937;
chunk__50921_50926 = G__50938;
count__50922_50927 = G__50939;
i__50923_50928 = G__50940;
continue;
}
} else
{var node_50941 = cljs.core.first.call(null,seq__50920_50935__$1);node_50941.innerHTML = value_50924;
{
var G__50942 = cljs.core.next.call(null,seq__50920_50935__$1);
var G__50943 = null;
var G__50944 = 0;
var G__50945 = 0;
seq__50920_50925 = G__50942;
chunk__50921_50926 = G__50943;
count__50922_50927 = G__50944;
i__50923_50928 = G__50945;
continue;
}
}
} else
{}
}
break;
}
}catch (e50919){if((e50919 instanceof Error))
{var e_50946 = e50919;domina.replace_children_BANG_.call(null,content,value_50924);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50919;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50953_50957 = cljs.core.seq.call(null,children);var chunk__50954_50958 = null;var count__50955_50959 = 0;var i__50956_50960 = 0;while(true){
if((i__50956_50960 < count__50955_50959))
{var child_50961 = cljs.core._nth.call(null,chunk__50954_50958,i__50956_50960);frag.appendChild(child_50961);
{
var G__50962 = seq__50953_50957;
var G__50963 = chunk__50954_50958;
var G__50964 = count__50955_50959;
var G__50965 = (i__50956_50960 + 1);
seq__50953_50957 = G__50962;
chunk__50954_50958 = G__50963;
count__50955_50959 = G__50964;
i__50956_50960 = G__50965;
continue;
}
} else
{var temp__4092__auto___50966 = cljs.core.seq.call(null,seq__50953_50957);if(temp__4092__auto___50966)
{var seq__50953_50967__$1 = temp__4092__auto___50966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50953_50967__$1))
{var c__4189__auto___50968 = cljs.core.chunk_first.call(null,seq__50953_50967__$1);{
var G__50969 = cljs.core.chunk_rest.call(null,seq__50953_50967__$1);
var G__50970 = c__4189__auto___50968;
var G__50971 = cljs.core.count.call(null,c__4189__auto___50968);
var G__50972 = 0;
seq__50953_50957 = G__50969;
chunk__50954_50958 = G__50970;
count__50955_50959 = G__50971;
i__50956_50960 = G__50972;
continue;
}
} else
{var child_50973 = cljs.core.first.call(null,seq__50953_50967__$1);frag.appendChild(child_50973);
{
var G__50974 = cljs.core.next.call(null,seq__50953_50967__$1);
var G__50975 = null;
var G__50976 = 0;
var G__50977 = 0;
seq__50953_50957 = G__50974;
chunk__50954_50958 = G__50975;
count__50955_50959 = G__50976;
i__50956_50960 = G__50977;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50947_SHARP_,p2__50948_SHARP_){return f.call(null,p1__50947_SHARP_,p2__50948_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__50979 = list_thing;if(G__50979)
{var bit__4091__auto__ = (G__50979.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50979.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50979);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50979);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__50980 = content;if(G__50980)
{var bit__4091__auto__ = (G__50980.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50980.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50980.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50980);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50980);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__50981 = content;if(G__50981)
{var bit__4091__auto__ = (G__50981.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50981.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50981.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50981);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50981);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
