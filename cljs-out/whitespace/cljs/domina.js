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
var opt_wrapper_32584 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32586 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32585,table_section_wrapper_32585,opt_wrapper_32584,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32586,table_section_wrapper_32585,cell_wrapper_32586,opt_wrapper_32584,table_section_wrapper_32585,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32585]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32591 = cljs.core.seq.call(null,tbody);var chunk__32592 = null;var count__32593 = 0;var i__32594 = 0;while(true){
if((i__32594 < count__32593))
{var child = cljs.core._nth.call(null,chunk__32592,i__32594);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32595 = seq__32591;
var G__32596 = chunk__32592;
var G__32597 = count__32593;
var G__32598 = (i__32594 + 1);
seq__32591 = G__32595;
chunk__32592 = G__32596;
count__32593 = G__32597;
i__32594 = G__32598;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32591);if(temp__4092__auto__)
{var seq__32591__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32591__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32591__$1);{
var G__32599 = cljs.core.chunk_rest.call(null,seq__32591__$1);
var G__32600 = c__4148__auto__;
var G__32601 = cljs.core.count.call(null,c__4148__auto__);
var G__32602 = 0;
seq__32591 = G__32599;
chunk__32592 = G__32600;
count__32593 = G__32601;
i__32594 = G__32602;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32591__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32603 = cljs.core.next.call(null,seq__32591__$1);
var G__32604 = null;
var G__32605 = 0;
var G__32606 = 0;
seq__32591 = G__32603;
chunk__32592 = G__32604;
count__32593 = G__32605;
i__32594 = G__32606;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__32608 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32608,0,null);var start_wrap = cljs.core.nth.call(null,vec__32608,1,null);var end_wrap = cljs.core.nth.call(null,vec__32608,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__32609 = wrapper.lastChild;
var G__32610 = (level - 1);
wrapper = G__32609;
level = G__32610;
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
domina.DomContent = (function (){var obj32612 = {};return obj32612;
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
log_debug.cljs$lang$applyTo = (function (arglist__32613){
var mesg = cljs.core.seq(arglist__32613);
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
log.cljs$lang$applyTo = (function (arglist__32614){
var mesg = cljs.core.seq(arglist__32614);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32615){
var contents = cljs.core.seq(arglist__32615);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32616_SHARP_){return p1__32616_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32617_SHARP_,p2__32618_SHARP_){return goog.dom.insertChildAt(p1__32617_SHARP_,p2__32618_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32620_SHARP_,p2__32619_SHARP_){return goog.dom.insertSiblingBefore(p2__32619_SHARP_,p1__32620_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32622_SHARP_,p2__32621_SHARP_){return goog.dom.insertSiblingAfter(p2__32621_SHARP_,p1__32622_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32624_SHARP_,p2__32623_SHARP_){return goog.dom.replaceNode(p2__32623_SHARP_,p1__32624_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32629_32633 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32630_32634 = null;var count__32631_32635 = 0;var i__32632_32636 = 0;while(true){
if((i__32632_32636 < count__32631_32635))
{var n_32637 = cljs.core._nth.call(null,chunk__32630_32634,i__32632_32636);goog.style.setStyle(n_32637,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32638 = seq__32629_32633;
var G__32639 = chunk__32630_32634;
var G__32640 = count__32631_32635;
var G__32641 = (i__32632_32636 + 1);
seq__32629_32633 = G__32638;
chunk__32630_32634 = G__32639;
count__32631_32635 = G__32640;
i__32632_32636 = G__32641;
continue;
}
} else
{var temp__4092__auto___32642 = cljs.core.seq.call(null,seq__32629_32633);if(temp__4092__auto___32642)
{var seq__32629_32643__$1 = temp__4092__auto___32642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32629_32643__$1))
{var c__4148__auto___32644 = cljs.core.chunk_first.call(null,seq__32629_32643__$1);{
var G__32645 = cljs.core.chunk_rest.call(null,seq__32629_32643__$1);
var G__32646 = c__4148__auto___32644;
var G__32647 = cljs.core.count.call(null,c__4148__auto___32644);
var G__32648 = 0;
seq__32629_32633 = G__32645;
chunk__32630_32634 = G__32646;
count__32631_32635 = G__32647;
i__32632_32636 = G__32648;
continue;
}
} else
{var n_32649 = cljs.core.first.call(null,seq__32629_32643__$1);goog.style.setStyle(n_32649,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32650 = cljs.core.next.call(null,seq__32629_32643__$1);
var G__32651 = null;
var G__32652 = 0;
var G__32653 = 0;
seq__32629_32633 = G__32650;
chunk__32630_32634 = G__32651;
count__32631_32635 = G__32652;
i__32632_32636 = G__32653;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32654){
var content = cljs.core.first(arglist__32654);
arglist__32654 = cljs.core.next(arglist__32654);
var name = cljs.core.first(arglist__32654);
var value = cljs.core.rest(arglist__32654);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32659_32663 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32660_32664 = null;var count__32661_32665 = 0;var i__32662_32666 = 0;while(true){
if((i__32662_32666 < count__32661_32665))
{var n_32667 = cljs.core._nth.call(null,chunk__32660_32664,i__32662_32666);n_32667.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32668 = seq__32659_32663;
var G__32669 = chunk__32660_32664;
var G__32670 = count__32661_32665;
var G__32671 = (i__32662_32666 + 1);
seq__32659_32663 = G__32668;
chunk__32660_32664 = G__32669;
count__32661_32665 = G__32670;
i__32662_32666 = G__32671;
continue;
}
} else
{var temp__4092__auto___32672 = cljs.core.seq.call(null,seq__32659_32663);if(temp__4092__auto___32672)
{var seq__32659_32673__$1 = temp__4092__auto___32672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32659_32673__$1))
{var c__4148__auto___32674 = cljs.core.chunk_first.call(null,seq__32659_32673__$1);{
var G__32675 = cljs.core.chunk_rest.call(null,seq__32659_32673__$1);
var G__32676 = c__4148__auto___32674;
var G__32677 = cljs.core.count.call(null,c__4148__auto___32674);
var G__32678 = 0;
seq__32659_32663 = G__32675;
chunk__32660_32664 = G__32676;
count__32661_32665 = G__32677;
i__32662_32666 = G__32678;
continue;
}
} else
{var n_32679 = cljs.core.first.call(null,seq__32659_32673__$1);n_32679.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32680 = cljs.core.next.call(null,seq__32659_32673__$1);
var G__32681 = null;
var G__32682 = 0;
var G__32683 = 0;
seq__32659_32663 = G__32680;
chunk__32660_32664 = G__32681;
count__32661_32665 = G__32682;
i__32662_32666 = G__32683;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32684){
var content = cljs.core.first(arglist__32684);
arglist__32684 = cljs.core.next(arglist__32684);
var name = cljs.core.first(arglist__32684);
var value = cljs.core.rest(arglist__32684);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32689_32693 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32690_32694 = null;var count__32691_32695 = 0;var i__32692_32696 = 0;while(true){
if((i__32692_32696 < count__32691_32695))
{var n_32697 = cljs.core._nth.call(null,chunk__32690_32694,i__32692_32696);n_32697.removeAttribute(cljs.core.name.call(null,name));
{
var G__32698 = seq__32689_32693;
var G__32699 = chunk__32690_32694;
var G__32700 = count__32691_32695;
var G__32701 = (i__32692_32696 + 1);
seq__32689_32693 = G__32698;
chunk__32690_32694 = G__32699;
count__32691_32695 = G__32700;
i__32692_32696 = G__32701;
continue;
}
} else
{var temp__4092__auto___32702 = cljs.core.seq.call(null,seq__32689_32693);if(temp__4092__auto___32702)
{var seq__32689_32703__$1 = temp__4092__auto___32702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32689_32703__$1))
{var c__4148__auto___32704 = cljs.core.chunk_first.call(null,seq__32689_32703__$1);{
var G__32705 = cljs.core.chunk_rest.call(null,seq__32689_32703__$1);
var G__32706 = c__4148__auto___32704;
var G__32707 = cljs.core.count.call(null,c__4148__auto___32704);
var G__32708 = 0;
seq__32689_32693 = G__32705;
chunk__32690_32694 = G__32706;
count__32691_32695 = G__32707;
i__32692_32696 = G__32708;
continue;
}
} else
{var n_32709 = cljs.core.first.call(null,seq__32689_32703__$1);n_32709.removeAttribute(cljs.core.name.call(null,name));
{
var G__32710 = cljs.core.next.call(null,seq__32689_32703__$1);
var G__32711 = null;
var G__32712 = 0;
var G__32713 = 0;
seq__32689_32693 = G__32710;
chunk__32690_32694 = G__32711;
count__32691_32695 = G__32712;
i__32692_32696 = G__32713;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32715 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32715,0,null);var v = cljs.core.nth.call(null,vec__32715,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__32716_SHARP_){var attr = attrs__$1.item(p1__32716_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32723_32729 = cljs.core.seq.call(null,styles);var chunk__32724_32730 = null;var count__32725_32731 = 0;var i__32726_32732 = 0;while(true){
if((i__32726_32732 < count__32725_32731))
{var vec__32727_32733 = cljs.core._nth.call(null,chunk__32724_32730,i__32726_32732);var name_32734 = cljs.core.nth.call(null,vec__32727_32733,0,null);var value_32735 = cljs.core.nth.call(null,vec__32727_32733,1,null);domina.set_style_BANG_.call(null,content,name_32734,value_32735);
{
var G__32736 = seq__32723_32729;
var G__32737 = chunk__32724_32730;
var G__32738 = count__32725_32731;
var G__32739 = (i__32726_32732 + 1);
seq__32723_32729 = G__32736;
chunk__32724_32730 = G__32737;
count__32725_32731 = G__32738;
i__32726_32732 = G__32739;
continue;
}
} else
{var temp__4092__auto___32740 = cljs.core.seq.call(null,seq__32723_32729);if(temp__4092__auto___32740)
{var seq__32723_32741__$1 = temp__4092__auto___32740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32723_32741__$1))
{var c__4148__auto___32742 = cljs.core.chunk_first.call(null,seq__32723_32741__$1);{
var G__32743 = cljs.core.chunk_rest.call(null,seq__32723_32741__$1);
var G__32744 = c__4148__auto___32742;
var G__32745 = cljs.core.count.call(null,c__4148__auto___32742);
var G__32746 = 0;
seq__32723_32729 = G__32743;
chunk__32724_32730 = G__32744;
count__32725_32731 = G__32745;
i__32726_32732 = G__32746;
continue;
}
} else
{var vec__32728_32747 = cljs.core.first.call(null,seq__32723_32741__$1);var name_32748 = cljs.core.nth.call(null,vec__32728_32747,0,null);var value_32749 = cljs.core.nth.call(null,vec__32728_32747,1,null);domina.set_style_BANG_.call(null,content,name_32748,value_32749);
{
var G__32750 = cljs.core.next.call(null,seq__32723_32741__$1);
var G__32751 = null;
var G__32752 = 0;
var G__32753 = 0;
seq__32723_32729 = G__32750;
chunk__32724_32730 = G__32751;
count__32725_32731 = G__32752;
i__32726_32732 = G__32753;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32760_32766 = cljs.core.seq.call(null,attrs);var chunk__32761_32767 = null;var count__32762_32768 = 0;var i__32763_32769 = 0;while(true){
if((i__32763_32769 < count__32762_32768))
{var vec__32764_32770 = cljs.core._nth.call(null,chunk__32761_32767,i__32763_32769);var name_32771 = cljs.core.nth.call(null,vec__32764_32770,0,null);var value_32772 = cljs.core.nth.call(null,vec__32764_32770,1,null);domina.set_attr_BANG_.call(null,content,name_32771,value_32772);
{
var G__32773 = seq__32760_32766;
var G__32774 = chunk__32761_32767;
var G__32775 = count__32762_32768;
var G__32776 = (i__32763_32769 + 1);
seq__32760_32766 = G__32773;
chunk__32761_32767 = G__32774;
count__32762_32768 = G__32775;
i__32763_32769 = G__32776;
continue;
}
} else
{var temp__4092__auto___32777 = cljs.core.seq.call(null,seq__32760_32766);if(temp__4092__auto___32777)
{var seq__32760_32778__$1 = temp__4092__auto___32777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32760_32778__$1))
{var c__4148__auto___32779 = cljs.core.chunk_first.call(null,seq__32760_32778__$1);{
var G__32780 = cljs.core.chunk_rest.call(null,seq__32760_32778__$1);
var G__32781 = c__4148__auto___32779;
var G__32782 = cljs.core.count.call(null,c__4148__auto___32779);
var G__32783 = 0;
seq__32760_32766 = G__32780;
chunk__32761_32767 = G__32781;
count__32762_32768 = G__32782;
i__32763_32769 = G__32783;
continue;
}
} else
{var vec__32765_32784 = cljs.core.first.call(null,seq__32760_32778__$1);var name_32785 = cljs.core.nth.call(null,vec__32765_32784,0,null);var value_32786 = cljs.core.nth.call(null,vec__32765_32784,1,null);domina.set_attr_BANG_.call(null,content,name_32785,value_32786);
{
var G__32787 = cljs.core.next.call(null,seq__32760_32778__$1);
var G__32788 = null;
var G__32789 = 0;
var G__32790 = 0;
seq__32760_32766 = G__32787;
chunk__32761_32767 = G__32788;
count__32762_32768 = G__32789;
i__32763_32769 = G__32790;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32795_32799 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32796_32800 = null;var count__32797_32801 = 0;var i__32798_32802 = 0;while(true){
if((i__32798_32802 < count__32797_32801))
{var node_32803 = cljs.core._nth.call(null,chunk__32796_32800,i__32798_32802);goog.dom.classes.add(node_32803,class$);
{
var G__32804 = seq__32795_32799;
var G__32805 = chunk__32796_32800;
var G__32806 = count__32797_32801;
var G__32807 = (i__32798_32802 + 1);
seq__32795_32799 = G__32804;
chunk__32796_32800 = G__32805;
count__32797_32801 = G__32806;
i__32798_32802 = G__32807;
continue;
}
} else
{var temp__4092__auto___32808 = cljs.core.seq.call(null,seq__32795_32799);if(temp__4092__auto___32808)
{var seq__32795_32809__$1 = temp__4092__auto___32808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32795_32809__$1))
{var c__4148__auto___32810 = cljs.core.chunk_first.call(null,seq__32795_32809__$1);{
var G__32811 = cljs.core.chunk_rest.call(null,seq__32795_32809__$1);
var G__32812 = c__4148__auto___32810;
var G__32813 = cljs.core.count.call(null,c__4148__auto___32810);
var G__32814 = 0;
seq__32795_32799 = G__32811;
chunk__32796_32800 = G__32812;
count__32797_32801 = G__32813;
i__32798_32802 = G__32814;
continue;
}
} else
{var node_32815 = cljs.core.first.call(null,seq__32795_32809__$1);goog.dom.classes.add(node_32815,class$);
{
var G__32816 = cljs.core.next.call(null,seq__32795_32809__$1);
var G__32817 = null;
var G__32818 = 0;
var G__32819 = 0;
seq__32795_32799 = G__32816;
chunk__32796_32800 = G__32817;
count__32797_32801 = G__32818;
i__32798_32802 = G__32819;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32824_32828 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32825_32829 = null;var count__32826_32830 = 0;var i__32827_32831 = 0;while(true){
if((i__32827_32831 < count__32826_32830))
{var node_32832 = cljs.core._nth.call(null,chunk__32825_32829,i__32827_32831);goog.dom.classes.remove(node_32832,class$);
{
var G__32833 = seq__32824_32828;
var G__32834 = chunk__32825_32829;
var G__32835 = count__32826_32830;
var G__32836 = (i__32827_32831 + 1);
seq__32824_32828 = G__32833;
chunk__32825_32829 = G__32834;
count__32826_32830 = G__32835;
i__32827_32831 = G__32836;
continue;
}
} else
{var temp__4092__auto___32837 = cljs.core.seq.call(null,seq__32824_32828);if(temp__4092__auto___32837)
{var seq__32824_32838__$1 = temp__4092__auto___32837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32824_32838__$1))
{var c__4148__auto___32839 = cljs.core.chunk_first.call(null,seq__32824_32838__$1);{
var G__32840 = cljs.core.chunk_rest.call(null,seq__32824_32838__$1);
var G__32841 = c__4148__auto___32839;
var G__32842 = cljs.core.count.call(null,c__4148__auto___32839);
var G__32843 = 0;
seq__32824_32828 = G__32840;
chunk__32825_32829 = G__32841;
count__32826_32830 = G__32842;
i__32827_32831 = G__32843;
continue;
}
} else
{var node_32844 = cljs.core.first.call(null,seq__32824_32838__$1);goog.dom.classes.remove(node_32844,class$);
{
var G__32845 = cljs.core.next.call(null,seq__32824_32838__$1);
var G__32846 = null;
var G__32847 = 0;
var G__32848 = 0;
seq__32824_32828 = G__32845;
chunk__32825_32829 = G__32846;
count__32826_32830 = G__32847;
i__32827_32831 = G__32848;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32853_32857 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32854_32858 = null;var count__32855_32859 = 0;var i__32856_32860 = 0;while(true){
if((i__32856_32860 < count__32855_32859))
{var node_32861 = cljs.core._nth.call(null,chunk__32854_32858,i__32856_32860);goog.dom.classes.toggle(node_32861,class$);
{
var G__32862 = seq__32853_32857;
var G__32863 = chunk__32854_32858;
var G__32864 = count__32855_32859;
var G__32865 = (i__32856_32860 + 1);
seq__32853_32857 = G__32862;
chunk__32854_32858 = G__32863;
count__32855_32859 = G__32864;
i__32856_32860 = G__32865;
continue;
}
} else
{var temp__4092__auto___32866 = cljs.core.seq.call(null,seq__32853_32857);if(temp__4092__auto___32866)
{var seq__32853_32867__$1 = temp__4092__auto___32866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32853_32867__$1))
{var c__4148__auto___32868 = cljs.core.chunk_first.call(null,seq__32853_32867__$1);{
var G__32869 = cljs.core.chunk_rest.call(null,seq__32853_32867__$1);
var G__32870 = c__4148__auto___32868;
var G__32871 = cljs.core.count.call(null,c__4148__auto___32868);
var G__32872 = 0;
seq__32853_32857 = G__32869;
chunk__32854_32858 = G__32870;
count__32855_32859 = G__32871;
i__32856_32860 = G__32872;
continue;
}
} else
{var node_32873 = cljs.core.first.call(null,seq__32853_32867__$1);goog.dom.classes.toggle(node_32873,class$);
{
var G__32874 = cljs.core.next.call(null,seq__32853_32867__$1);
var G__32875 = null;
var G__32876 = 0;
var G__32877 = 0;
seq__32853_32857 = G__32874;
chunk__32854_32858 = G__32875;
count__32855_32859 = G__32876;
i__32856_32860 = G__32877;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32886__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__32882_32887 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32883_32888 = null;var count__32884_32889 = 0;var i__32885_32890 = 0;while(true){
if((i__32885_32890 < count__32884_32889))
{var node_32891 = cljs.core._nth.call(null,chunk__32883_32888,i__32885_32890);goog.dom.classes.set(node_32891,classes_32886__$1);
{
var G__32892 = seq__32882_32887;
var G__32893 = chunk__32883_32888;
var G__32894 = count__32884_32889;
var G__32895 = (i__32885_32890 + 1);
seq__32882_32887 = G__32892;
chunk__32883_32888 = G__32893;
count__32884_32889 = G__32894;
i__32885_32890 = G__32895;
continue;
}
} else
{var temp__4092__auto___32896 = cljs.core.seq.call(null,seq__32882_32887);if(temp__4092__auto___32896)
{var seq__32882_32897__$1 = temp__4092__auto___32896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32882_32897__$1))
{var c__4148__auto___32898 = cljs.core.chunk_first.call(null,seq__32882_32897__$1);{
var G__32899 = cljs.core.chunk_rest.call(null,seq__32882_32897__$1);
var G__32900 = c__4148__auto___32898;
var G__32901 = cljs.core.count.call(null,c__4148__auto___32898);
var G__32902 = 0;
seq__32882_32887 = G__32899;
chunk__32883_32888 = G__32900;
count__32884_32889 = G__32901;
i__32885_32890 = G__32902;
continue;
}
} else
{var node_32903 = cljs.core.first.call(null,seq__32882_32897__$1);goog.dom.classes.set(node_32903,classes_32886__$1);
{
var G__32904 = cljs.core.next.call(null,seq__32882_32897__$1);
var G__32905 = null;
var G__32906 = 0;
var G__32907 = 0;
seq__32882_32887 = G__32904;
chunk__32883_32888 = G__32905;
count__32884_32889 = G__32906;
i__32885_32890 = G__32907;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32912_32916 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32913_32917 = null;var count__32914_32918 = 0;var i__32915_32919 = 0;while(true){
if((i__32915_32919 < count__32914_32918))
{var node_32920 = cljs.core._nth.call(null,chunk__32913_32917,i__32915_32919);goog.dom.setTextContent(node_32920,value);
{
var G__32921 = seq__32912_32916;
var G__32922 = chunk__32913_32917;
var G__32923 = count__32914_32918;
var G__32924 = (i__32915_32919 + 1);
seq__32912_32916 = G__32921;
chunk__32913_32917 = G__32922;
count__32914_32918 = G__32923;
i__32915_32919 = G__32924;
continue;
}
} else
{var temp__4092__auto___32925 = cljs.core.seq.call(null,seq__32912_32916);if(temp__4092__auto___32925)
{var seq__32912_32926__$1 = temp__4092__auto___32925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32912_32926__$1))
{var c__4148__auto___32927 = cljs.core.chunk_first.call(null,seq__32912_32926__$1);{
var G__32928 = cljs.core.chunk_rest.call(null,seq__32912_32926__$1);
var G__32929 = c__4148__auto___32927;
var G__32930 = cljs.core.count.call(null,c__4148__auto___32927);
var G__32931 = 0;
seq__32912_32916 = G__32928;
chunk__32913_32917 = G__32929;
count__32914_32918 = G__32930;
i__32915_32919 = G__32931;
continue;
}
} else
{var node_32932 = cljs.core.first.call(null,seq__32912_32926__$1);goog.dom.setTextContent(node_32932,value);
{
var G__32933 = cljs.core.next.call(null,seq__32912_32926__$1);
var G__32934 = null;
var G__32935 = 0;
var G__32936 = 0;
seq__32912_32916 = G__32933;
chunk__32913_32917 = G__32934;
count__32914_32918 = G__32935;
i__32915_32919 = G__32936;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32941_32945 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32942_32946 = null;var count__32943_32947 = 0;var i__32944_32948 = 0;while(true){
if((i__32944_32948 < count__32943_32947))
{var node_32949 = cljs.core._nth.call(null,chunk__32942_32946,i__32944_32948);goog.dom.forms.setValue(node_32949,value);
{
var G__32950 = seq__32941_32945;
var G__32951 = chunk__32942_32946;
var G__32952 = count__32943_32947;
var G__32953 = (i__32944_32948 + 1);
seq__32941_32945 = G__32950;
chunk__32942_32946 = G__32951;
count__32943_32947 = G__32952;
i__32944_32948 = G__32953;
continue;
}
} else
{var temp__4092__auto___32954 = cljs.core.seq.call(null,seq__32941_32945);if(temp__4092__auto___32954)
{var seq__32941_32955__$1 = temp__4092__auto___32954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32941_32955__$1))
{var c__4148__auto___32956 = cljs.core.chunk_first.call(null,seq__32941_32955__$1);{
var G__32957 = cljs.core.chunk_rest.call(null,seq__32941_32955__$1);
var G__32958 = c__4148__auto___32956;
var G__32959 = cljs.core.count.call(null,c__4148__auto___32956);
var G__32960 = 0;
seq__32941_32945 = G__32957;
chunk__32942_32946 = G__32958;
count__32943_32947 = G__32959;
i__32944_32948 = G__32960;
continue;
}
} else
{var node_32961 = cljs.core.first.call(null,seq__32941_32955__$1);goog.dom.forms.setValue(node_32961,value);
{
var G__32962 = cljs.core.next.call(null,seq__32941_32955__$1);
var G__32963 = null;
var G__32964 = 0;
var G__32965 = 0;
seq__32941_32945 = G__32962;
chunk__32942_32946 = G__32963;
count__32943_32947 = G__32964;
i__32944_32948 = G__32965;
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
{var value_32976 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32972_32977 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32973_32978 = null;var count__32974_32979 = 0;var i__32975_32980 = 0;while(true){
if((i__32975_32980 < count__32974_32979))
{var node_32981 = cljs.core._nth.call(null,chunk__32973_32978,i__32975_32980);node_32981.innerHTML = value_32976;
{
var G__32982 = seq__32972_32977;
var G__32983 = chunk__32973_32978;
var G__32984 = count__32974_32979;
var G__32985 = (i__32975_32980 + 1);
seq__32972_32977 = G__32982;
chunk__32973_32978 = G__32983;
count__32974_32979 = G__32984;
i__32975_32980 = G__32985;
continue;
}
} else
{var temp__4092__auto___32986 = cljs.core.seq.call(null,seq__32972_32977);if(temp__4092__auto___32986)
{var seq__32972_32987__$1 = temp__4092__auto___32986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32972_32987__$1))
{var c__4148__auto___32988 = cljs.core.chunk_first.call(null,seq__32972_32987__$1);{
var G__32989 = cljs.core.chunk_rest.call(null,seq__32972_32987__$1);
var G__32990 = c__4148__auto___32988;
var G__32991 = cljs.core.count.call(null,c__4148__auto___32988);
var G__32992 = 0;
seq__32972_32977 = G__32989;
chunk__32973_32978 = G__32990;
count__32974_32979 = G__32991;
i__32975_32980 = G__32992;
continue;
}
} else
{var node_32993 = cljs.core.first.call(null,seq__32972_32987__$1);node_32993.innerHTML = value_32976;
{
var G__32994 = cljs.core.next.call(null,seq__32972_32987__$1);
var G__32995 = null;
var G__32996 = 0;
var G__32997 = 0;
seq__32972_32977 = G__32994;
chunk__32973_32978 = G__32995;
count__32974_32979 = G__32996;
i__32975_32980 = G__32997;
continue;
}
}
} else
{}
}
break;
}
}catch (e32971){if((e32971 instanceof Error))
{var e_32998 = e32971;domina.replace_children_BANG_.call(null,content,value_32976);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32971;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33005_33009 = cljs.core.seq.call(null,children);var chunk__33006_33010 = null;var count__33007_33011 = 0;var i__33008_33012 = 0;while(true){
if((i__33008_33012 < count__33007_33011))
{var child_33013 = cljs.core._nth.call(null,chunk__33006_33010,i__33008_33012);frag.appendChild(child_33013);
{
var G__33014 = seq__33005_33009;
var G__33015 = chunk__33006_33010;
var G__33016 = count__33007_33011;
var G__33017 = (i__33008_33012 + 1);
seq__33005_33009 = G__33014;
chunk__33006_33010 = G__33015;
count__33007_33011 = G__33016;
i__33008_33012 = G__33017;
continue;
}
} else
{var temp__4092__auto___33018 = cljs.core.seq.call(null,seq__33005_33009);if(temp__4092__auto___33018)
{var seq__33005_33019__$1 = temp__4092__auto___33018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33005_33019__$1))
{var c__4148__auto___33020 = cljs.core.chunk_first.call(null,seq__33005_33019__$1);{
var G__33021 = cljs.core.chunk_rest.call(null,seq__33005_33019__$1);
var G__33022 = c__4148__auto___33020;
var G__33023 = cljs.core.count.call(null,c__4148__auto___33020);
var G__33024 = 0;
seq__33005_33009 = G__33021;
chunk__33006_33010 = G__33022;
count__33007_33011 = G__33023;
i__33008_33012 = G__33024;
continue;
}
} else
{var child_33025 = cljs.core.first.call(null,seq__33005_33019__$1);frag.appendChild(child_33025);
{
var G__33026 = cljs.core.next.call(null,seq__33005_33019__$1);
var G__33027 = null;
var G__33028 = 0;
var G__33029 = 0;
seq__33005_33009 = G__33026;
chunk__33006_33010 = G__33027;
count__33007_33011 = G__33028;
i__33008_33012 = G__33029;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32999_SHARP_,p2__33000_SHARP_){return f.call(null,p1__32999_SHARP_,p2__33000_SHARP_);
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
{if((function (){var G__33031 = list_thing;if(G__33031)
{var bit__4050__auto__ = (G__33031.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33031.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33031.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33031);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33031);
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
{if((function (){var G__33032 = content;if(G__33032)
{var bit__4050__auto__ = (G__33032.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33032.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33032.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33032);
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
{if((function (){var G__33033 = content;if(G__33033)
{var bit__4050__auto__ = (G__33033.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33033.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33033.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33033);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33033);
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
