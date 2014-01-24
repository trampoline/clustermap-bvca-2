// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_35541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35542 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35543 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35542,table_section_wrapper_35542,opt_wrapper_35541,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35543,table_section_wrapper_35542,cell_wrapper_35543,opt_wrapper_35541,table_section_wrapper_35542,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35542]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35548 = cljs.core.seq.call(null,tbody);var chunk__35549 = null;var count__35550 = 0;var i__35551 = 0;while(true){
if((i__35551 < count__35550))
{var child = cljs.core._nth.call(null,chunk__35549,i__35551);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35552 = seq__35548;
var G__35553 = chunk__35549;
var G__35554 = count__35550;
var G__35555 = (i__35551 + 1);
seq__35548 = G__35552;
chunk__35549 = G__35553;
count__35550 = G__35554;
i__35551 = G__35555;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35548);if(temp__4092__auto__)
{var seq__35548__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35548__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35548__$1);{
var G__35556 = cljs.core.chunk_rest.call(null,seq__35548__$1);
var G__35557 = c__4148__auto__;
var G__35558 = cljs.core.count.call(null,c__4148__auto__);
var G__35559 = 0;
seq__35548 = G__35556;
chunk__35549 = G__35557;
count__35550 = G__35558;
i__35551 = G__35559;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35548__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35560 = cljs.core.next.call(null,seq__35548__$1);
var G__35561 = null;
var G__35562 = 0;
var G__35563 = 0;
seq__35548 = G__35560;
chunk__35549 = G__35561;
count__35550 = G__35562;
i__35551 = G__35563;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__35565 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__35565,0,null);var start_wrap = cljs.core.nth.call(null,vec__35565,1,null);var end_wrap = cljs.core.nth.call(null,vec__35565,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__35566 = wrapper.lastChild;
var G__35567 = (level - 1);
wrapper = G__35566;
level = G__35567;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj35569 = {};return obj35569;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__35570){
var mesg = cljs.core.seq(arglist__35570);
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
log.cljs$lang$applyTo = (function (arglist__35571){
var mesg = cljs.core.seq(arglist__35571);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__35572){
var contents = cljs.core.seq(arglist__35572);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__35573_SHARP_){return p1__35573_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__35574_SHARP_,p2__35575_SHARP_){return goog.dom.insertChildAt(p1__35574_SHARP_,p2__35575_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35577_SHARP_,p2__35576_SHARP_){return goog.dom.insertSiblingBefore(p2__35576_SHARP_,p1__35577_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35579_SHARP_,p2__35578_SHARP_){return goog.dom.insertSiblingAfter(p2__35578_SHARP_,p1__35579_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__35581_SHARP_,p2__35580_SHARP_){return goog.dom.replaceNode(p2__35580_SHARP_,p1__35581_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__35586_35590 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35587_35591 = null;var count__35588_35592 = 0;var i__35589_35593 = 0;while(true){
if((i__35589_35593 < count__35588_35592))
{var n_35594 = cljs.core._nth.call(null,chunk__35587_35591,i__35589_35593);goog.style.setStyle(n_35594,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35595 = seq__35586_35590;
var G__35596 = chunk__35587_35591;
var G__35597 = count__35588_35592;
var G__35598 = (i__35589_35593 + 1);
seq__35586_35590 = G__35595;
chunk__35587_35591 = G__35596;
count__35588_35592 = G__35597;
i__35589_35593 = G__35598;
continue;
}
} else
{var temp__4092__auto___35599 = cljs.core.seq.call(null,seq__35586_35590);if(temp__4092__auto___35599)
{var seq__35586_35600__$1 = temp__4092__auto___35599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35586_35600__$1))
{var c__4148__auto___35601 = cljs.core.chunk_first.call(null,seq__35586_35600__$1);{
var G__35602 = cljs.core.chunk_rest.call(null,seq__35586_35600__$1);
var G__35603 = c__4148__auto___35601;
var G__35604 = cljs.core.count.call(null,c__4148__auto___35601);
var G__35605 = 0;
seq__35586_35590 = G__35602;
chunk__35587_35591 = G__35603;
count__35588_35592 = G__35604;
i__35589_35593 = G__35605;
continue;
}
} else
{var n_35606 = cljs.core.first.call(null,seq__35586_35600__$1);goog.style.setStyle(n_35606,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35607 = cljs.core.next.call(null,seq__35586_35600__$1);
var G__35608 = null;
var G__35609 = 0;
var G__35610 = 0;
seq__35586_35590 = G__35607;
chunk__35587_35591 = G__35608;
count__35588_35592 = G__35609;
i__35589_35593 = G__35610;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35611){
var content = cljs.core.first(arglist__35611);
arglist__35611 = cljs.core.next(arglist__35611);
var name = cljs.core.first(arglist__35611);
var value = cljs.core.rest(arglist__35611);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35616_35620 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35617_35621 = null;var count__35618_35622 = 0;var i__35619_35623 = 0;while(true){
if((i__35619_35623 < count__35618_35622))
{var n_35624 = cljs.core._nth.call(null,chunk__35617_35621,i__35619_35623);n_35624.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35625 = seq__35616_35620;
var G__35626 = chunk__35617_35621;
var G__35627 = count__35618_35622;
var G__35628 = (i__35619_35623 + 1);
seq__35616_35620 = G__35625;
chunk__35617_35621 = G__35626;
count__35618_35622 = G__35627;
i__35619_35623 = G__35628;
continue;
}
} else
{var temp__4092__auto___35629 = cljs.core.seq.call(null,seq__35616_35620);if(temp__4092__auto___35629)
{var seq__35616_35630__$1 = temp__4092__auto___35629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35616_35630__$1))
{var c__4148__auto___35631 = cljs.core.chunk_first.call(null,seq__35616_35630__$1);{
var G__35632 = cljs.core.chunk_rest.call(null,seq__35616_35630__$1);
var G__35633 = c__4148__auto___35631;
var G__35634 = cljs.core.count.call(null,c__4148__auto___35631);
var G__35635 = 0;
seq__35616_35620 = G__35632;
chunk__35617_35621 = G__35633;
count__35618_35622 = G__35634;
i__35619_35623 = G__35635;
continue;
}
} else
{var n_35636 = cljs.core.first.call(null,seq__35616_35630__$1);n_35636.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35637 = cljs.core.next.call(null,seq__35616_35630__$1);
var G__35638 = null;
var G__35639 = 0;
var G__35640 = 0;
seq__35616_35620 = G__35637;
chunk__35617_35621 = G__35638;
count__35618_35622 = G__35639;
i__35619_35623 = G__35640;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35641){
var content = cljs.core.first(arglist__35641);
arglist__35641 = cljs.core.next(arglist__35641);
var name = cljs.core.first(arglist__35641);
var value = cljs.core.rest(arglist__35641);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35646_35650 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35647_35651 = null;var count__35648_35652 = 0;var i__35649_35653 = 0;while(true){
if((i__35649_35653 < count__35648_35652))
{var n_35654 = cljs.core._nth.call(null,chunk__35647_35651,i__35649_35653);n_35654.removeAttribute(cljs.core.name.call(null,name));
{
var G__35655 = seq__35646_35650;
var G__35656 = chunk__35647_35651;
var G__35657 = count__35648_35652;
var G__35658 = (i__35649_35653 + 1);
seq__35646_35650 = G__35655;
chunk__35647_35651 = G__35656;
count__35648_35652 = G__35657;
i__35649_35653 = G__35658;
continue;
}
} else
{var temp__4092__auto___35659 = cljs.core.seq.call(null,seq__35646_35650);if(temp__4092__auto___35659)
{var seq__35646_35660__$1 = temp__4092__auto___35659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35646_35660__$1))
{var c__4148__auto___35661 = cljs.core.chunk_first.call(null,seq__35646_35660__$1);{
var G__35662 = cljs.core.chunk_rest.call(null,seq__35646_35660__$1);
var G__35663 = c__4148__auto___35661;
var G__35664 = cljs.core.count.call(null,c__4148__auto___35661);
var G__35665 = 0;
seq__35646_35650 = G__35662;
chunk__35647_35651 = G__35663;
count__35648_35652 = G__35664;
i__35649_35653 = G__35665;
continue;
}
} else
{var n_35666 = cljs.core.first.call(null,seq__35646_35660__$1);n_35666.removeAttribute(cljs.core.name.call(null,name));
{
var G__35667 = cljs.core.next.call(null,seq__35646_35660__$1);
var G__35668 = null;
var G__35669 = 0;
var G__35670 = 0;
seq__35646_35650 = G__35667;
chunk__35647_35651 = G__35668;
count__35648_35652 = G__35669;
i__35649_35653 = G__35670;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__35672 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__35672,0,null);var v = cljs.core.nth.call(null,vec__35672,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__35673_SHARP_){var attr = attrs__$1.item(p1__35673_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__35680_35686 = cljs.core.seq.call(null,styles);var chunk__35681_35687 = null;var count__35682_35688 = 0;var i__35683_35689 = 0;while(true){
if((i__35683_35689 < count__35682_35688))
{var vec__35684_35690 = cljs.core._nth.call(null,chunk__35681_35687,i__35683_35689);var name_35691 = cljs.core.nth.call(null,vec__35684_35690,0,null);var value_35692 = cljs.core.nth.call(null,vec__35684_35690,1,null);domina.set_style_BANG_.call(null,content,name_35691,value_35692);
{
var G__35693 = seq__35680_35686;
var G__35694 = chunk__35681_35687;
var G__35695 = count__35682_35688;
var G__35696 = (i__35683_35689 + 1);
seq__35680_35686 = G__35693;
chunk__35681_35687 = G__35694;
count__35682_35688 = G__35695;
i__35683_35689 = G__35696;
continue;
}
} else
{var temp__4092__auto___35697 = cljs.core.seq.call(null,seq__35680_35686);if(temp__4092__auto___35697)
{var seq__35680_35698__$1 = temp__4092__auto___35697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35680_35698__$1))
{var c__4148__auto___35699 = cljs.core.chunk_first.call(null,seq__35680_35698__$1);{
var G__35700 = cljs.core.chunk_rest.call(null,seq__35680_35698__$1);
var G__35701 = c__4148__auto___35699;
var G__35702 = cljs.core.count.call(null,c__4148__auto___35699);
var G__35703 = 0;
seq__35680_35686 = G__35700;
chunk__35681_35687 = G__35701;
count__35682_35688 = G__35702;
i__35683_35689 = G__35703;
continue;
}
} else
{var vec__35685_35704 = cljs.core.first.call(null,seq__35680_35698__$1);var name_35705 = cljs.core.nth.call(null,vec__35685_35704,0,null);var value_35706 = cljs.core.nth.call(null,vec__35685_35704,1,null);domina.set_style_BANG_.call(null,content,name_35705,value_35706);
{
var G__35707 = cljs.core.next.call(null,seq__35680_35698__$1);
var G__35708 = null;
var G__35709 = 0;
var G__35710 = 0;
seq__35680_35686 = G__35707;
chunk__35681_35687 = G__35708;
count__35682_35688 = G__35709;
i__35683_35689 = G__35710;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__35717_35723 = cljs.core.seq.call(null,attrs);var chunk__35718_35724 = null;var count__35719_35725 = 0;var i__35720_35726 = 0;while(true){
if((i__35720_35726 < count__35719_35725))
{var vec__35721_35727 = cljs.core._nth.call(null,chunk__35718_35724,i__35720_35726);var name_35728 = cljs.core.nth.call(null,vec__35721_35727,0,null);var value_35729 = cljs.core.nth.call(null,vec__35721_35727,1,null);domina.set_attr_BANG_.call(null,content,name_35728,value_35729);
{
var G__35730 = seq__35717_35723;
var G__35731 = chunk__35718_35724;
var G__35732 = count__35719_35725;
var G__35733 = (i__35720_35726 + 1);
seq__35717_35723 = G__35730;
chunk__35718_35724 = G__35731;
count__35719_35725 = G__35732;
i__35720_35726 = G__35733;
continue;
}
} else
{var temp__4092__auto___35734 = cljs.core.seq.call(null,seq__35717_35723);if(temp__4092__auto___35734)
{var seq__35717_35735__$1 = temp__4092__auto___35734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35717_35735__$1))
{var c__4148__auto___35736 = cljs.core.chunk_first.call(null,seq__35717_35735__$1);{
var G__35737 = cljs.core.chunk_rest.call(null,seq__35717_35735__$1);
var G__35738 = c__4148__auto___35736;
var G__35739 = cljs.core.count.call(null,c__4148__auto___35736);
var G__35740 = 0;
seq__35717_35723 = G__35737;
chunk__35718_35724 = G__35738;
count__35719_35725 = G__35739;
i__35720_35726 = G__35740;
continue;
}
} else
{var vec__35722_35741 = cljs.core.first.call(null,seq__35717_35735__$1);var name_35742 = cljs.core.nth.call(null,vec__35722_35741,0,null);var value_35743 = cljs.core.nth.call(null,vec__35722_35741,1,null);domina.set_attr_BANG_.call(null,content,name_35742,value_35743);
{
var G__35744 = cljs.core.next.call(null,seq__35717_35735__$1);
var G__35745 = null;
var G__35746 = 0;
var G__35747 = 0;
seq__35717_35723 = G__35744;
chunk__35718_35724 = G__35745;
count__35719_35725 = G__35746;
i__35720_35726 = G__35747;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__35752_35756 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35753_35757 = null;var count__35754_35758 = 0;var i__35755_35759 = 0;while(true){
if((i__35755_35759 < count__35754_35758))
{var node_35760 = cljs.core._nth.call(null,chunk__35753_35757,i__35755_35759);goog.dom.classes.add(node_35760,class$);
{
var G__35761 = seq__35752_35756;
var G__35762 = chunk__35753_35757;
var G__35763 = count__35754_35758;
var G__35764 = (i__35755_35759 + 1);
seq__35752_35756 = G__35761;
chunk__35753_35757 = G__35762;
count__35754_35758 = G__35763;
i__35755_35759 = G__35764;
continue;
}
} else
{var temp__4092__auto___35765 = cljs.core.seq.call(null,seq__35752_35756);if(temp__4092__auto___35765)
{var seq__35752_35766__$1 = temp__4092__auto___35765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35752_35766__$1))
{var c__4148__auto___35767 = cljs.core.chunk_first.call(null,seq__35752_35766__$1);{
var G__35768 = cljs.core.chunk_rest.call(null,seq__35752_35766__$1);
var G__35769 = c__4148__auto___35767;
var G__35770 = cljs.core.count.call(null,c__4148__auto___35767);
var G__35771 = 0;
seq__35752_35756 = G__35768;
chunk__35753_35757 = G__35769;
count__35754_35758 = G__35770;
i__35755_35759 = G__35771;
continue;
}
} else
{var node_35772 = cljs.core.first.call(null,seq__35752_35766__$1);goog.dom.classes.add(node_35772,class$);
{
var G__35773 = cljs.core.next.call(null,seq__35752_35766__$1);
var G__35774 = null;
var G__35775 = 0;
var G__35776 = 0;
seq__35752_35756 = G__35773;
chunk__35753_35757 = G__35774;
count__35754_35758 = G__35775;
i__35755_35759 = G__35776;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__35781_35785 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35782_35786 = null;var count__35783_35787 = 0;var i__35784_35788 = 0;while(true){
if((i__35784_35788 < count__35783_35787))
{var node_35789 = cljs.core._nth.call(null,chunk__35782_35786,i__35784_35788);goog.dom.classes.remove(node_35789,class$);
{
var G__35790 = seq__35781_35785;
var G__35791 = chunk__35782_35786;
var G__35792 = count__35783_35787;
var G__35793 = (i__35784_35788 + 1);
seq__35781_35785 = G__35790;
chunk__35782_35786 = G__35791;
count__35783_35787 = G__35792;
i__35784_35788 = G__35793;
continue;
}
} else
{var temp__4092__auto___35794 = cljs.core.seq.call(null,seq__35781_35785);if(temp__4092__auto___35794)
{var seq__35781_35795__$1 = temp__4092__auto___35794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35781_35795__$1))
{var c__4148__auto___35796 = cljs.core.chunk_first.call(null,seq__35781_35795__$1);{
var G__35797 = cljs.core.chunk_rest.call(null,seq__35781_35795__$1);
var G__35798 = c__4148__auto___35796;
var G__35799 = cljs.core.count.call(null,c__4148__auto___35796);
var G__35800 = 0;
seq__35781_35785 = G__35797;
chunk__35782_35786 = G__35798;
count__35783_35787 = G__35799;
i__35784_35788 = G__35800;
continue;
}
} else
{var node_35801 = cljs.core.first.call(null,seq__35781_35795__$1);goog.dom.classes.remove(node_35801,class$);
{
var G__35802 = cljs.core.next.call(null,seq__35781_35795__$1);
var G__35803 = null;
var G__35804 = 0;
var G__35805 = 0;
seq__35781_35785 = G__35802;
chunk__35782_35786 = G__35803;
count__35783_35787 = G__35804;
i__35784_35788 = G__35805;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__35810_35814 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35811_35815 = null;var count__35812_35816 = 0;var i__35813_35817 = 0;while(true){
if((i__35813_35817 < count__35812_35816))
{var node_35818 = cljs.core._nth.call(null,chunk__35811_35815,i__35813_35817);goog.dom.classes.toggle(node_35818,class$);
{
var G__35819 = seq__35810_35814;
var G__35820 = chunk__35811_35815;
var G__35821 = count__35812_35816;
var G__35822 = (i__35813_35817 + 1);
seq__35810_35814 = G__35819;
chunk__35811_35815 = G__35820;
count__35812_35816 = G__35821;
i__35813_35817 = G__35822;
continue;
}
} else
{var temp__4092__auto___35823 = cljs.core.seq.call(null,seq__35810_35814);if(temp__4092__auto___35823)
{var seq__35810_35824__$1 = temp__4092__auto___35823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35810_35824__$1))
{var c__4148__auto___35825 = cljs.core.chunk_first.call(null,seq__35810_35824__$1);{
var G__35826 = cljs.core.chunk_rest.call(null,seq__35810_35824__$1);
var G__35827 = c__4148__auto___35825;
var G__35828 = cljs.core.count.call(null,c__4148__auto___35825);
var G__35829 = 0;
seq__35810_35814 = G__35826;
chunk__35811_35815 = G__35827;
count__35812_35816 = G__35828;
i__35813_35817 = G__35829;
continue;
}
} else
{var node_35830 = cljs.core.first.call(null,seq__35810_35824__$1);goog.dom.classes.toggle(node_35830,class$);
{
var G__35831 = cljs.core.next.call(null,seq__35810_35824__$1);
var G__35832 = null;
var G__35833 = 0;
var G__35834 = 0;
seq__35810_35814 = G__35831;
chunk__35811_35815 = G__35832;
count__35812_35816 = G__35833;
i__35813_35817 = G__35834;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_35843__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__35839_35844 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35840_35845 = null;var count__35841_35846 = 0;var i__35842_35847 = 0;while(true){
if((i__35842_35847 < count__35841_35846))
{var node_35848 = cljs.core._nth.call(null,chunk__35840_35845,i__35842_35847);goog.dom.classes.set(node_35848,classes_35843__$1);
{
var G__35849 = seq__35839_35844;
var G__35850 = chunk__35840_35845;
var G__35851 = count__35841_35846;
var G__35852 = (i__35842_35847 + 1);
seq__35839_35844 = G__35849;
chunk__35840_35845 = G__35850;
count__35841_35846 = G__35851;
i__35842_35847 = G__35852;
continue;
}
} else
{var temp__4092__auto___35853 = cljs.core.seq.call(null,seq__35839_35844);if(temp__4092__auto___35853)
{var seq__35839_35854__$1 = temp__4092__auto___35853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35839_35854__$1))
{var c__4148__auto___35855 = cljs.core.chunk_first.call(null,seq__35839_35854__$1);{
var G__35856 = cljs.core.chunk_rest.call(null,seq__35839_35854__$1);
var G__35857 = c__4148__auto___35855;
var G__35858 = cljs.core.count.call(null,c__4148__auto___35855);
var G__35859 = 0;
seq__35839_35844 = G__35856;
chunk__35840_35845 = G__35857;
count__35841_35846 = G__35858;
i__35842_35847 = G__35859;
continue;
}
} else
{var node_35860 = cljs.core.first.call(null,seq__35839_35854__$1);goog.dom.classes.set(node_35860,classes_35843__$1);
{
var G__35861 = cljs.core.next.call(null,seq__35839_35854__$1);
var G__35862 = null;
var G__35863 = 0;
var G__35864 = 0;
seq__35839_35844 = G__35861;
chunk__35840_35845 = G__35862;
count__35841_35846 = G__35863;
i__35842_35847 = G__35864;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__35869_35873 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35870_35874 = null;var count__35871_35875 = 0;var i__35872_35876 = 0;while(true){
if((i__35872_35876 < count__35871_35875))
{var node_35877 = cljs.core._nth.call(null,chunk__35870_35874,i__35872_35876);goog.dom.setTextContent(node_35877,value);
{
var G__35878 = seq__35869_35873;
var G__35879 = chunk__35870_35874;
var G__35880 = count__35871_35875;
var G__35881 = (i__35872_35876 + 1);
seq__35869_35873 = G__35878;
chunk__35870_35874 = G__35879;
count__35871_35875 = G__35880;
i__35872_35876 = G__35881;
continue;
}
} else
{var temp__4092__auto___35882 = cljs.core.seq.call(null,seq__35869_35873);if(temp__4092__auto___35882)
{var seq__35869_35883__$1 = temp__4092__auto___35882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35869_35883__$1))
{var c__4148__auto___35884 = cljs.core.chunk_first.call(null,seq__35869_35883__$1);{
var G__35885 = cljs.core.chunk_rest.call(null,seq__35869_35883__$1);
var G__35886 = c__4148__auto___35884;
var G__35887 = cljs.core.count.call(null,c__4148__auto___35884);
var G__35888 = 0;
seq__35869_35873 = G__35885;
chunk__35870_35874 = G__35886;
count__35871_35875 = G__35887;
i__35872_35876 = G__35888;
continue;
}
} else
{var node_35889 = cljs.core.first.call(null,seq__35869_35883__$1);goog.dom.setTextContent(node_35889,value);
{
var G__35890 = cljs.core.next.call(null,seq__35869_35883__$1);
var G__35891 = null;
var G__35892 = 0;
var G__35893 = 0;
seq__35869_35873 = G__35890;
chunk__35870_35874 = G__35891;
count__35871_35875 = G__35892;
i__35872_35876 = G__35893;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__35898_35902 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35899_35903 = null;var count__35900_35904 = 0;var i__35901_35905 = 0;while(true){
if((i__35901_35905 < count__35900_35904))
{var node_35906 = cljs.core._nth.call(null,chunk__35899_35903,i__35901_35905);goog.dom.forms.setValue(node_35906,value);
{
var G__35907 = seq__35898_35902;
var G__35908 = chunk__35899_35903;
var G__35909 = count__35900_35904;
var G__35910 = (i__35901_35905 + 1);
seq__35898_35902 = G__35907;
chunk__35899_35903 = G__35908;
count__35900_35904 = G__35909;
i__35901_35905 = G__35910;
continue;
}
} else
{var temp__4092__auto___35911 = cljs.core.seq.call(null,seq__35898_35902);if(temp__4092__auto___35911)
{var seq__35898_35912__$1 = temp__4092__auto___35911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35898_35912__$1))
{var c__4148__auto___35913 = cljs.core.chunk_first.call(null,seq__35898_35912__$1);{
var G__35914 = cljs.core.chunk_rest.call(null,seq__35898_35912__$1);
var G__35915 = c__4148__auto___35913;
var G__35916 = cljs.core.count.call(null,c__4148__auto___35913);
var G__35917 = 0;
seq__35898_35902 = G__35914;
chunk__35899_35903 = G__35915;
count__35900_35904 = G__35916;
i__35901_35905 = G__35917;
continue;
}
} else
{var node_35918 = cljs.core.first.call(null,seq__35898_35912__$1);goog.dom.forms.setValue(node_35918,value);
{
var G__35919 = cljs.core.next.call(null,seq__35898_35912__$1);
var G__35920 = null;
var G__35921 = 0;
var G__35922 = 0;
seq__35898_35902 = G__35919;
chunk__35899_35903 = G__35920;
count__35900_35904 = G__35921;
i__35901_35905 = G__35922;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_35933 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__35929_35934 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35930_35935 = null;var count__35931_35936 = 0;var i__35932_35937 = 0;while(true){
if((i__35932_35937 < count__35931_35936))
{var node_35938 = cljs.core._nth.call(null,chunk__35930_35935,i__35932_35937);node_35938.innerHTML = value_35933;
{
var G__35939 = seq__35929_35934;
var G__35940 = chunk__35930_35935;
var G__35941 = count__35931_35936;
var G__35942 = (i__35932_35937 + 1);
seq__35929_35934 = G__35939;
chunk__35930_35935 = G__35940;
count__35931_35936 = G__35941;
i__35932_35937 = G__35942;
continue;
}
} else
{var temp__4092__auto___35943 = cljs.core.seq.call(null,seq__35929_35934);if(temp__4092__auto___35943)
{var seq__35929_35944__$1 = temp__4092__auto___35943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35929_35944__$1))
{var c__4148__auto___35945 = cljs.core.chunk_first.call(null,seq__35929_35944__$1);{
var G__35946 = cljs.core.chunk_rest.call(null,seq__35929_35944__$1);
var G__35947 = c__4148__auto___35945;
var G__35948 = cljs.core.count.call(null,c__4148__auto___35945);
var G__35949 = 0;
seq__35929_35934 = G__35946;
chunk__35930_35935 = G__35947;
count__35931_35936 = G__35948;
i__35932_35937 = G__35949;
continue;
}
} else
{var node_35950 = cljs.core.first.call(null,seq__35929_35944__$1);node_35950.innerHTML = value_35933;
{
var G__35951 = cljs.core.next.call(null,seq__35929_35944__$1);
var G__35952 = null;
var G__35953 = 0;
var G__35954 = 0;
seq__35929_35934 = G__35951;
chunk__35930_35935 = G__35952;
count__35931_35936 = G__35953;
i__35932_35937 = G__35954;
continue;
}
}
} else
{}
}
break;
}
}catch (e35928){if((e35928 instanceof Error))
{var e_35955 = e35928;domina.replace_children_BANG_.call(null,content,value_35933);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35928;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__35962_35966 = cljs.core.seq.call(null,children);var chunk__35963_35967 = null;var count__35964_35968 = 0;var i__35965_35969 = 0;while(true){
if((i__35965_35969 < count__35964_35968))
{var child_35970 = cljs.core._nth.call(null,chunk__35963_35967,i__35965_35969);frag.appendChild(child_35970);
{
var G__35971 = seq__35962_35966;
var G__35972 = chunk__35963_35967;
var G__35973 = count__35964_35968;
var G__35974 = (i__35965_35969 + 1);
seq__35962_35966 = G__35971;
chunk__35963_35967 = G__35972;
count__35964_35968 = G__35973;
i__35965_35969 = G__35974;
continue;
}
} else
{var temp__4092__auto___35975 = cljs.core.seq.call(null,seq__35962_35966);if(temp__4092__auto___35975)
{var seq__35962_35976__$1 = temp__4092__auto___35975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35962_35976__$1))
{var c__4148__auto___35977 = cljs.core.chunk_first.call(null,seq__35962_35976__$1);{
var G__35978 = cljs.core.chunk_rest.call(null,seq__35962_35976__$1);
var G__35979 = c__4148__auto___35977;
var G__35980 = cljs.core.count.call(null,c__4148__auto___35977);
var G__35981 = 0;
seq__35962_35966 = G__35978;
chunk__35963_35967 = G__35979;
count__35964_35968 = G__35980;
i__35965_35969 = G__35981;
continue;
}
} else
{var child_35982 = cljs.core.first.call(null,seq__35962_35976__$1);frag.appendChild(child_35982);
{
var G__35983 = cljs.core.next.call(null,seq__35962_35976__$1);
var G__35984 = null;
var G__35985 = 0;
var G__35986 = 0;
seq__35962_35966 = G__35983;
chunk__35963_35967 = G__35984;
count__35964_35968 = G__35985;
i__35965_35969 = G__35986;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__35956_SHARP_,p2__35957_SHARP_){return f.call(null,p1__35956_SHARP_,p2__35957_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__35988 = list_thing;if(G__35988)
{var bit__4050__auto__ = (G__35988.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35988.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35988.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35988);
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
{if((function (){var G__35989 = content;if(G__35989)
{var bit__4050__auto__ = (G__35989.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35989.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35989.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35989);
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
{if((function (){var G__35990 = content;if(G__35990)
{var bit__4050__auto__ = (G__35990.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35990.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35990.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35990);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35990);
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
