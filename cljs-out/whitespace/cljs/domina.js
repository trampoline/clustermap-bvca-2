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
var opt_wrapper_37756 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37757 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37757,table_section_wrapper_37757,opt_wrapper_37756,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37758,table_section_wrapper_37757,cell_wrapper_37758,opt_wrapper_37756,table_section_wrapper_37757,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37757]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37763 = cljs.core.seq.call(null,tbody);var chunk__37764 = null;var count__37765 = 0;var i__37766 = 0;while(true){
if((i__37766 < count__37765))
{var child = cljs.core._nth.call(null,chunk__37764,i__37766);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37767 = seq__37763;
var G__37768 = chunk__37764;
var G__37769 = count__37765;
var G__37770 = (i__37766 + 1);
seq__37763 = G__37767;
chunk__37764 = G__37768;
count__37765 = G__37769;
i__37766 = G__37770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37763);if(temp__4092__auto__)
{var seq__37763__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37763__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37763__$1);{
var G__37771 = cljs.core.chunk_rest.call(null,seq__37763__$1);
var G__37772 = c__4148__auto__;
var G__37773 = cljs.core.count.call(null,c__4148__auto__);
var G__37774 = 0;
seq__37763 = G__37771;
chunk__37764 = G__37772;
count__37765 = G__37773;
i__37766 = G__37774;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37763__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37775 = cljs.core.next.call(null,seq__37763__$1);
var G__37776 = null;
var G__37777 = 0;
var G__37778 = 0;
seq__37763 = G__37775;
chunk__37764 = G__37776;
count__37765 = G__37777;
i__37766 = G__37778;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37780 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37780,0,null);var start_wrap = cljs.core.nth.call(null,vec__37780,1,null);var end_wrap = cljs.core.nth.call(null,vec__37780,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37781 = wrapper.lastChild;
var G__37782 = (level - 1);
wrapper = G__37781;
level = G__37782;
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
domina.DomContent = (function (){var obj37784 = {};return obj37784;
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
log_debug.cljs$lang$applyTo = (function (arglist__37785){
var mesg = cljs.core.seq(arglist__37785);
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
log.cljs$lang$applyTo = (function (arglist__37786){
var mesg = cljs.core.seq(arglist__37786);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37787){
var contents = cljs.core.seq(arglist__37787);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37788_SHARP_){return p1__37788_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37789_SHARP_,p2__37790_SHARP_){return goog.dom.insertChildAt(p1__37789_SHARP_,p2__37790_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37792_SHARP_,p2__37791_SHARP_){return goog.dom.insertSiblingBefore(p2__37791_SHARP_,p1__37792_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37794_SHARP_,p2__37793_SHARP_){return goog.dom.insertSiblingAfter(p2__37793_SHARP_,p1__37794_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37796_SHARP_,p2__37795_SHARP_){return goog.dom.replaceNode(p2__37795_SHARP_,p1__37796_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37801_37805 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37802_37806 = null;var count__37803_37807 = 0;var i__37804_37808 = 0;while(true){
if((i__37804_37808 < count__37803_37807))
{var n_37809 = cljs.core._nth.call(null,chunk__37802_37806,i__37804_37808);goog.style.setStyle(n_37809,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37810 = seq__37801_37805;
var G__37811 = chunk__37802_37806;
var G__37812 = count__37803_37807;
var G__37813 = (i__37804_37808 + 1);
seq__37801_37805 = G__37810;
chunk__37802_37806 = G__37811;
count__37803_37807 = G__37812;
i__37804_37808 = G__37813;
continue;
}
} else
{var temp__4092__auto___37814 = cljs.core.seq.call(null,seq__37801_37805);if(temp__4092__auto___37814)
{var seq__37801_37815__$1 = temp__4092__auto___37814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37801_37815__$1))
{var c__4148__auto___37816 = cljs.core.chunk_first.call(null,seq__37801_37815__$1);{
var G__37817 = cljs.core.chunk_rest.call(null,seq__37801_37815__$1);
var G__37818 = c__4148__auto___37816;
var G__37819 = cljs.core.count.call(null,c__4148__auto___37816);
var G__37820 = 0;
seq__37801_37805 = G__37817;
chunk__37802_37806 = G__37818;
count__37803_37807 = G__37819;
i__37804_37808 = G__37820;
continue;
}
} else
{var n_37821 = cljs.core.first.call(null,seq__37801_37815__$1);goog.style.setStyle(n_37821,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37822 = cljs.core.next.call(null,seq__37801_37815__$1);
var G__37823 = null;
var G__37824 = 0;
var G__37825 = 0;
seq__37801_37805 = G__37822;
chunk__37802_37806 = G__37823;
count__37803_37807 = G__37824;
i__37804_37808 = G__37825;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37826){
var content = cljs.core.first(arglist__37826);
arglist__37826 = cljs.core.next(arglist__37826);
var name = cljs.core.first(arglist__37826);
var value = cljs.core.rest(arglist__37826);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37831_37835 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37832_37836 = null;var count__37833_37837 = 0;var i__37834_37838 = 0;while(true){
if((i__37834_37838 < count__37833_37837))
{var n_37839 = cljs.core._nth.call(null,chunk__37832_37836,i__37834_37838);n_37839.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37840 = seq__37831_37835;
var G__37841 = chunk__37832_37836;
var G__37842 = count__37833_37837;
var G__37843 = (i__37834_37838 + 1);
seq__37831_37835 = G__37840;
chunk__37832_37836 = G__37841;
count__37833_37837 = G__37842;
i__37834_37838 = G__37843;
continue;
}
} else
{var temp__4092__auto___37844 = cljs.core.seq.call(null,seq__37831_37835);if(temp__4092__auto___37844)
{var seq__37831_37845__$1 = temp__4092__auto___37844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37831_37845__$1))
{var c__4148__auto___37846 = cljs.core.chunk_first.call(null,seq__37831_37845__$1);{
var G__37847 = cljs.core.chunk_rest.call(null,seq__37831_37845__$1);
var G__37848 = c__4148__auto___37846;
var G__37849 = cljs.core.count.call(null,c__4148__auto___37846);
var G__37850 = 0;
seq__37831_37835 = G__37847;
chunk__37832_37836 = G__37848;
count__37833_37837 = G__37849;
i__37834_37838 = G__37850;
continue;
}
} else
{var n_37851 = cljs.core.first.call(null,seq__37831_37845__$1);n_37851.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37852 = cljs.core.next.call(null,seq__37831_37845__$1);
var G__37853 = null;
var G__37854 = 0;
var G__37855 = 0;
seq__37831_37835 = G__37852;
chunk__37832_37836 = G__37853;
count__37833_37837 = G__37854;
i__37834_37838 = G__37855;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37856){
var content = cljs.core.first(arglist__37856);
arglist__37856 = cljs.core.next(arglist__37856);
var name = cljs.core.first(arglist__37856);
var value = cljs.core.rest(arglist__37856);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37861_37865 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37862_37866 = null;var count__37863_37867 = 0;var i__37864_37868 = 0;while(true){
if((i__37864_37868 < count__37863_37867))
{var n_37869 = cljs.core._nth.call(null,chunk__37862_37866,i__37864_37868);n_37869.removeAttribute(cljs.core.name.call(null,name));
{
var G__37870 = seq__37861_37865;
var G__37871 = chunk__37862_37866;
var G__37872 = count__37863_37867;
var G__37873 = (i__37864_37868 + 1);
seq__37861_37865 = G__37870;
chunk__37862_37866 = G__37871;
count__37863_37867 = G__37872;
i__37864_37868 = G__37873;
continue;
}
} else
{var temp__4092__auto___37874 = cljs.core.seq.call(null,seq__37861_37865);if(temp__4092__auto___37874)
{var seq__37861_37875__$1 = temp__4092__auto___37874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37861_37875__$1))
{var c__4148__auto___37876 = cljs.core.chunk_first.call(null,seq__37861_37875__$1);{
var G__37877 = cljs.core.chunk_rest.call(null,seq__37861_37875__$1);
var G__37878 = c__4148__auto___37876;
var G__37879 = cljs.core.count.call(null,c__4148__auto___37876);
var G__37880 = 0;
seq__37861_37865 = G__37877;
chunk__37862_37866 = G__37878;
count__37863_37867 = G__37879;
i__37864_37868 = G__37880;
continue;
}
} else
{var n_37881 = cljs.core.first.call(null,seq__37861_37875__$1);n_37881.removeAttribute(cljs.core.name.call(null,name));
{
var G__37882 = cljs.core.next.call(null,seq__37861_37875__$1);
var G__37883 = null;
var G__37884 = 0;
var G__37885 = 0;
seq__37861_37865 = G__37882;
chunk__37862_37866 = G__37883;
count__37863_37867 = G__37884;
i__37864_37868 = G__37885;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37887 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37887,0,null);var v = cljs.core.nth.call(null,vec__37887,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37888_SHARP_){var attr = attrs__$1.item(p1__37888_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37895_37901 = cljs.core.seq.call(null,styles);var chunk__37896_37902 = null;var count__37897_37903 = 0;var i__37898_37904 = 0;while(true){
if((i__37898_37904 < count__37897_37903))
{var vec__37899_37905 = cljs.core._nth.call(null,chunk__37896_37902,i__37898_37904);var name_37906 = cljs.core.nth.call(null,vec__37899_37905,0,null);var value_37907 = cljs.core.nth.call(null,vec__37899_37905,1,null);domina.set_style_BANG_.call(null,content,name_37906,value_37907);
{
var G__37908 = seq__37895_37901;
var G__37909 = chunk__37896_37902;
var G__37910 = count__37897_37903;
var G__37911 = (i__37898_37904 + 1);
seq__37895_37901 = G__37908;
chunk__37896_37902 = G__37909;
count__37897_37903 = G__37910;
i__37898_37904 = G__37911;
continue;
}
} else
{var temp__4092__auto___37912 = cljs.core.seq.call(null,seq__37895_37901);if(temp__4092__auto___37912)
{var seq__37895_37913__$1 = temp__4092__auto___37912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37895_37913__$1))
{var c__4148__auto___37914 = cljs.core.chunk_first.call(null,seq__37895_37913__$1);{
var G__37915 = cljs.core.chunk_rest.call(null,seq__37895_37913__$1);
var G__37916 = c__4148__auto___37914;
var G__37917 = cljs.core.count.call(null,c__4148__auto___37914);
var G__37918 = 0;
seq__37895_37901 = G__37915;
chunk__37896_37902 = G__37916;
count__37897_37903 = G__37917;
i__37898_37904 = G__37918;
continue;
}
} else
{var vec__37900_37919 = cljs.core.first.call(null,seq__37895_37913__$1);var name_37920 = cljs.core.nth.call(null,vec__37900_37919,0,null);var value_37921 = cljs.core.nth.call(null,vec__37900_37919,1,null);domina.set_style_BANG_.call(null,content,name_37920,value_37921);
{
var G__37922 = cljs.core.next.call(null,seq__37895_37913__$1);
var G__37923 = null;
var G__37924 = 0;
var G__37925 = 0;
seq__37895_37901 = G__37922;
chunk__37896_37902 = G__37923;
count__37897_37903 = G__37924;
i__37898_37904 = G__37925;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37932_37938 = cljs.core.seq.call(null,attrs);var chunk__37933_37939 = null;var count__37934_37940 = 0;var i__37935_37941 = 0;while(true){
if((i__37935_37941 < count__37934_37940))
{var vec__37936_37942 = cljs.core._nth.call(null,chunk__37933_37939,i__37935_37941);var name_37943 = cljs.core.nth.call(null,vec__37936_37942,0,null);var value_37944 = cljs.core.nth.call(null,vec__37936_37942,1,null);domina.set_attr_BANG_.call(null,content,name_37943,value_37944);
{
var G__37945 = seq__37932_37938;
var G__37946 = chunk__37933_37939;
var G__37947 = count__37934_37940;
var G__37948 = (i__37935_37941 + 1);
seq__37932_37938 = G__37945;
chunk__37933_37939 = G__37946;
count__37934_37940 = G__37947;
i__37935_37941 = G__37948;
continue;
}
} else
{var temp__4092__auto___37949 = cljs.core.seq.call(null,seq__37932_37938);if(temp__4092__auto___37949)
{var seq__37932_37950__$1 = temp__4092__auto___37949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37932_37950__$1))
{var c__4148__auto___37951 = cljs.core.chunk_first.call(null,seq__37932_37950__$1);{
var G__37952 = cljs.core.chunk_rest.call(null,seq__37932_37950__$1);
var G__37953 = c__4148__auto___37951;
var G__37954 = cljs.core.count.call(null,c__4148__auto___37951);
var G__37955 = 0;
seq__37932_37938 = G__37952;
chunk__37933_37939 = G__37953;
count__37934_37940 = G__37954;
i__37935_37941 = G__37955;
continue;
}
} else
{var vec__37937_37956 = cljs.core.first.call(null,seq__37932_37950__$1);var name_37957 = cljs.core.nth.call(null,vec__37937_37956,0,null);var value_37958 = cljs.core.nth.call(null,vec__37937_37956,1,null);domina.set_attr_BANG_.call(null,content,name_37957,value_37958);
{
var G__37959 = cljs.core.next.call(null,seq__37932_37950__$1);
var G__37960 = null;
var G__37961 = 0;
var G__37962 = 0;
seq__37932_37938 = G__37959;
chunk__37933_37939 = G__37960;
count__37934_37940 = G__37961;
i__37935_37941 = G__37962;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37967_37971 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37968_37972 = null;var count__37969_37973 = 0;var i__37970_37974 = 0;while(true){
if((i__37970_37974 < count__37969_37973))
{var node_37975 = cljs.core._nth.call(null,chunk__37968_37972,i__37970_37974);goog.dom.classes.add(node_37975,class$);
{
var G__37976 = seq__37967_37971;
var G__37977 = chunk__37968_37972;
var G__37978 = count__37969_37973;
var G__37979 = (i__37970_37974 + 1);
seq__37967_37971 = G__37976;
chunk__37968_37972 = G__37977;
count__37969_37973 = G__37978;
i__37970_37974 = G__37979;
continue;
}
} else
{var temp__4092__auto___37980 = cljs.core.seq.call(null,seq__37967_37971);if(temp__4092__auto___37980)
{var seq__37967_37981__$1 = temp__4092__auto___37980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37967_37981__$1))
{var c__4148__auto___37982 = cljs.core.chunk_first.call(null,seq__37967_37981__$1);{
var G__37983 = cljs.core.chunk_rest.call(null,seq__37967_37981__$1);
var G__37984 = c__4148__auto___37982;
var G__37985 = cljs.core.count.call(null,c__4148__auto___37982);
var G__37986 = 0;
seq__37967_37971 = G__37983;
chunk__37968_37972 = G__37984;
count__37969_37973 = G__37985;
i__37970_37974 = G__37986;
continue;
}
} else
{var node_37987 = cljs.core.first.call(null,seq__37967_37981__$1);goog.dom.classes.add(node_37987,class$);
{
var G__37988 = cljs.core.next.call(null,seq__37967_37981__$1);
var G__37989 = null;
var G__37990 = 0;
var G__37991 = 0;
seq__37967_37971 = G__37988;
chunk__37968_37972 = G__37989;
count__37969_37973 = G__37990;
i__37970_37974 = G__37991;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37996_38000 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37997_38001 = null;var count__37998_38002 = 0;var i__37999_38003 = 0;while(true){
if((i__37999_38003 < count__37998_38002))
{var node_38004 = cljs.core._nth.call(null,chunk__37997_38001,i__37999_38003);goog.dom.classes.remove(node_38004,class$);
{
var G__38005 = seq__37996_38000;
var G__38006 = chunk__37997_38001;
var G__38007 = count__37998_38002;
var G__38008 = (i__37999_38003 + 1);
seq__37996_38000 = G__38005;
chunk__37997_38001 = G__38006;
count__37998_38002 = G__38007;
i__37999_38003 = G__38008;
continue;
}
} else
{var temp__4092__auto___38009 = cljs.core.seq.call(null,seq__37996_38000);if(temp__4092__auto___38009)
{var seq__37996_38010__$1 = temp__4092__auto___38009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37996_38010__$1))
{var c__4148__auto___38011 = cljs.core.chunk_first.call(null,seq__37996_38010__$1);{
var G__38012 = cljs.core.chunk_rest.call(null,seq__37996_38010__$1);
var G__38013 = c__4148__auto___38011;
var G__38014 = cljs.core.count.call(null,c__4148__auto___38011);
var G__38015 = 0;
seq__37996_38000 = G__38012;
chunk__37997_38001 = G__38013;
count__37998_38002 = G__38014;
i__37999_38003 = G__38015;
continue;
}
} else
{var node_38016 = cljs.core.first.call(null,seq__37996_38010__$1);goog.dom.classes.remove(node_38016,class$);
{
var G__38017 = cljs.core.next.call(null,seq__37996_38010__$1);
var G__38018 = null;
var G__38019 = 0;
var G__38020 = 0;
seq__37996_38000 = G__38017;
chunk__37997_38001 = G__38018;
count__37998_38002 = G__38019;
i__37999_38003 = G__38020;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38025_38029 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38026_38030 = null;var count__38027_38031 = 0;var i__38028_38032 = 0;while(true){
if((i__38028_38032 < count__38027_38031))
{var node_38033 = cljs.core._nth.call(null,chunk__38026_38030,i__38028_38032);goog.dom.classes.toggle(node_38033,class$);
{
var G__38034 = seq__38025_38029;
var G__38035 = chunk__38026_38030;
var G__38036 = count__38027_38031;
var G__38037 = (i__38028_38032 + 1);
seq__38025_38029 = G__38034;
chunk__38026_38030 = G__38035;
count__38027_38031 = G__38036;
i__38028_38032 = G__38037;
continue;
}
} else
{var temp__4092__auto___38038 = cljs.core.seq.call(null,seq__38025_38029);if(temp__4092__auto___38038)
{var seq__38025_38039__$1 = temp__4092__auto___38038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38025_38039__$1))
{var c__4148__auto___38040 = cljs.core.chunk_first.call(null,seq__38025_38039__$1);{
var G__38041 = cljs.core.chunk_rest.call(null,seq__38025_38039__$1);
var G__38042 = c__4148__auto___38040;
var G__38043 = cljs.core.count.call(null,c__4148__auto___38040);
var G__38044 = 0;
seq__38025_38029 = G__38041;
chunk__38026_38030 = G__38042;
count__38027_38031 = G__38043;
i__38028_38032 = G__38044;
continue;
}
} else
{var node_38045 = cljs.core.first.call(null,seq__38025_38039__$1);goog.dom.classes.toggle(node_38045,class$);
{
var G__38046 = cljs.core.next.call(null,seq__38025_38039__$1);
var G__38047 = null;
var G__38048 = 0;
var G__38049 = 0;
seq__38025_38029 = G__38046;
chunk__38026_38030 = G__38047;
count__38027_38031 = G__38048;
i__38028_38032 = G__38049;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38058__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38054_38059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38055_38060 = null;var count__38056_38061 = 0;var i__38057_38062 = 0;while(true){
if((i__38057_38062 < count__38056_38061))
{var node_38063 = cljs.core._nth.call(null,chunk__38055_38060,i__38057_38062);goog.dom.classes.set(node_38063,classes_38058__$1);
{
var G__38064 = seq__38054_38059;
var G__38065 = chunk__38055_38060;
var G__38066 = count__38056_38061;
var G__38067 = (i__38057_38062 + 1);
seq__38054_38059 = G__38064;
chunk__38055_38060 = G__38065;
count__38056_38061 = G__38066;
i__38057_38062 = G__38067;
continue;
}
} else
{var temp__4092__auto___38068 = cljs.core.seq.call(null,seq__38054_38059);if(temp__4092__auto___38068)
{var seq__38054_38069__$1 = temp__4092__auto___38068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38054_38069__$1))
{var c__4148__auto___38070 = cljs.core.chunk_first.call(null,seq__38054_38069__$1);{
var G__38071 = cljs.core.chunk_rest.call(null,seq__38054_38069__$1);
var G__38072 = c__4148__auto___38070;
var G__38073 = cljs.core.count.call(null,c__4148__auto___38070);
var G__38074 = 0;
seq__38054_38059 = G__38071;
chunk__38055_38060 = G__38072;
count__38056_38061 = G__38073;
i__38057_38062 = G__38074;
continue;
}
} else
{var node_38075 = cljs.core.first.call(null,seq__38054_38069__$1);goog.dom.classes.set(node_38075,classes_38058__$1);
{
var G__38076 = cljs.core.next.call(null,seq__38054_38069__$1);
var G__38077 = null;
var G__38078 = 0;
var G__38079 = 0;
seq__38054_38059 = G__38076;
chunk__38055_38060 = G__38077;
count__38056_38061 = G__38078;
i__38057_38062 = G__38079;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38084_38088 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38085_38089 = null;var count__38086_38090 = 0;var i__38087_38091 = 0;while(true){
if((i__38087_38091 < count__38086_38090))
{var node_38092 = cljs.core._nth.call(null,chunk__38085_38089,i__38087_38091);goog.dom.setTextContent(node_38092,value);
{
var G__38093 = seq__38084_38088;
var G__38094 = chunk__38085_38089;
var G__38095 = count__38086_38090;
var G__38096 = (i__38087_38091 + 1);
seq__38084_38088 = G__38093;
chunk__38085_38089 = G__38094;
count__38086_38090 = G__38095;
i__38087_38091 = G__38096;
continue;
}
} else
{var temp__4092__auto___38097 = cljs.core.seq.call(null,seq__38084_38088);if(temp__4092__auto___38097)
{var seq__38084_38098__$1 = temp__4092__auto___38097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38084_38098__$1))
{var c__4148__auto___38099 = cljs.core.chunk_first.call(null,seq__38084_38098__$1);{
var G__38100 = cljs.core.chunk_rest.call(null,seq__38084_38098__$1);
var G__38101 = c__4148__auto___38099;
var G__38102 = cljs.core.count.call(null,c__4148__auto___38099);
var G__38103 = 0;
seq__38084_38088 = G__38100;
chunk__38085_38089 = G__38101;
count__38086_38090 = G__38102;
i__38087_38091 = G__38103;
continue;
}
} else
{var node_38104 = cljs.core.first.call(null,seq__38084_38098__$1);goog.dom.setTextContent(node_38104,value);
{
var G__38105 = cljs.core.next.call(null,seq__38084_38098__$1);
var G__38106 = null;
var G__38107 = 0;
var G__38108 = 0;
seq__38084_38088 = G__38105;
chunk__38085_38089 = G__38106;
count__38086_38090 = G__38107;
i__38087_38091 = G__38108;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38113_38117 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38114_38118 = null;var count__38115_38119 = 0;var i__38116_38120 = 0;while(true){
if((i__38116_38120 < count__38115_38119))
{var node_38121 = cljs.core._nth.call(null,chunk__38114_38118,i__38116_38120);goog.dom.forms.setValue(node_38121,value);
{
var G__38122 = seq__38113_38117;
var G__38123 = chunk__38114_38118;
var G__38124 = count__38115_38119;
var G__38125 = (i__38116_38120 + 1);
seq__38113_38117 = G__38122;
chunk__38114_38118 = G__38123;
count__38115_38119 = G__38124;
i__38116_38120 = G__38125;
continue;
}
} else
{var temp__4092__auto___38126 = cljs.core.seq.call(null,seq__38113_38117);if(temp__4092__auto___38126)
{var seq__38113_38127__$1 = temp__4092__auto___38126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38113_38127__$1))
{var c__4148__auto___38128 = cljs.core.chunk_first.call(null,seq__38113_38127__$1);{
var G__38129 = cljs.core.chunk_rest.call(null,seq__38113_38127__$1);
var G__38130 = c__4148__auto___38128;
var G__38131 = cljs.core.count.call(null,c__4148__auto___38128);
var G__38132 = 0;
seq__38113_38117 = G__38129;
chunk__38114_38118 = G__38130;
count__38115_38119 = G__38131;
i__38116_38120 = G__38132;
continue;
}
} else
{var node_38133 = cljs.core.first.call(null,seq__38113_38127__$1);goog.dom.forms.setValue(node_38133,value);
{
var G__38134 = cljs.core.next.call(null,seq__38113_38127__$1);
var G__38135 = null;
var G__38136 = 0;
var G__38137 = 0;
seq__38113_38117 = G__38134;
chunk__38114_38118 = G__38135;
count__38115_38119 = G__38136;
i__38116_38120 = G__38137;
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
{var value_38148 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38144_38149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38145_38150 = null;var count__38146_38151 = 0;var i__38147_38152 = 0;while(true){
if((i__38147_38152 < count__38146_38151))
{var node_38153 = cljs.core._nth.call(null,chunk__38145_38150,i__38147_38152);node_38153.innerHTML = value_38148;
{
var G__38154 = seq__38144_38149;
var G__38155 = chunk__38145_38150;
var G__38156 = count__38146_38151;
var G__38157 = (i__38147_38152 + 1);
seq__38144_38149 = G__38154;
chunk__38145_38150 = G__38155;
count__38146_38151 = G__38156;
i__38147_38152 = G__38157;
continue;
}
} else
{var temp__4092__auto___38158 = cljs.core.seq.call(null,seq__38144_38149);if(temp__4092__auto___38158)
{var seq__38144_38159__$1 = temp__4092__auto___38158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38144_38159__$1))
{var c__4148__auto___38160 = cljs.core.chunk_first.call(null,seq__38144_38159__$1);{
var G__38161 = cljs.core.chunk_rest.call(null,seq__38144_38159__$1);
var G__38162 = c__4148__auto___38160;
var G__38163 = cljs.core.count.call(null,c__4148__auto___38160);
var G__38164 = 0;
seq__38144_38149 = G__38161;
chunk__38145_38150 = G__38162;
count__38146_38151 = G__38163;
i__38147_38152 = G__38164;
continue;
}
} else
{var node_38165 = cljs.core.first.call(null,seq__38144_38159__$1);node_38165.innerHTML = value_38148;
{
var G__38166 = cljs.core.next.call(null,seq__38144_38159__$1);
var G__38167 = null;
var G__38168 = 0;
var G__38169 = 0;
seq__38144_38149 = G__38166;
chunk__38145_38150 = G__38167;
count__38146_38151 = G__38168;
i__38147_38152 = G__38169;
continue;
}
}
} else
{}
}
break;
}
}catch (e38143){if((e38143 instanceof Error))
{var e_38170 = e38143;domina.replace_children_BANG_.call(null,content,value_38148);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38143;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38177_38181 = cljs.core.seq.call(null,children);var chunk__38178_38182 = null;var count__38179_38183 = 0;var i__38180_38184 = 0;while(true){
if((i__38180_38184 < count__38179_38183))
{var child_38185 = cljs.core._nth.call(null,chunk__38178_38182,i__38180_38184);frag.appendChild(child_38185);
{
var G__38186 = seq__38177_38181;
var G__38187 = chunk__38178_38182;
var G__38188 = count__38179_38183;
var G__38189 = (i__38180_38184 + 1);
seq__38177_38181 = G__38186;
chunk__38178_38182 = G__38187;
count__38179_38183 = G__38188;
i__38180_38184 = G__38189;
continue;
}
} else
{var temp__4092__auto___38190 = cljs.core.seq.call(null,seq__38177_38181);if(temp__4092__auto___38190)
{var seq__38177_38191__$1 = temp__4092__auto___38190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38177_38191__$1))
{var c__4148__auto___38192 = cljs.core.chunk_first.call(null,seq__38177_38191__$1);{
var G__38193 = cljs.core.chunk_rest.call(null,seq__38177_38191__$1);
var G__38194 = c__4148__auto___38192;
var G__38195 = cljs.core.count.call(null,c__4148__auto___38192);
var G__38196 = 0;
seq__38177_38181 = G__38193;
chunk__38178_38182 = G__38194;
count__38179_38183 = G__38195;
i__38180_38184 = G__38196;
continue;
}
} else
{var child_38197 = cljs.core.first.call(null,seq__38177_38191__$1);frag.appendChild(child_38197);
{
var G__38198 = cljs.core.next.call(null,seq__38177_38191__$1);
var G__38199 = null;
var G__38200 = 0;
var G__38201 = 0;
seq__38177_38181 = G__38198;
chunk__38178_38182 = G__38199;
count__38179_38183 = G__38200;
i__38180_38184 = G__38201;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38171_SHARP_,p2__38172_SHARP_){return f.call(null,p1__38171_SHARP_,p2__38172_SHARP_);
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
{if((function (){var G__38203 = list_thing;if(G__38203)
{var bit__4050__auto__ = (G__38203.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38203.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38203);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38203);
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
{if((function (){var G__38204 = content;if(G__38204)
{var bit__4050__auto__ = (G__38204.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38204.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38204.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38204);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38204);
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
{if((function (){var G__38205 = content;if(G__38205)
{var bit__4050__auto__ = (G__38205.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38205.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38205.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38205);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38205);
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
