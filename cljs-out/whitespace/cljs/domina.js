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
var opt_wrapper_34830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_34831 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_34832 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_34831,table_section_wrapper_34831,opt_wrapper_34830,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_34832,table_section_wrapper_34831,cell_wrapper_34832,opt_wrapper_34830,table_section_wrapper_34831,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_34831]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__34837 = cljs.core.seq.call(null,tbody);var chunk__34838 = null;var count__34839 = 0;var i__34840 = 0;while(true){
if((i__34840 < count__34839))
{var child = cljs.core._nth.call(null,chunk__34838,i__34840);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34841 = seq__34837;
var G__34842 = chunk__34838;
var G__34843 = count__34839;
var G__34844 = (i__34840 + 1);
seq__34837 = G__34841;
chunk__34838 = G__34842;
count__34839 = G__34843;
i__34840 = G__34844;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34837);if(temp__4092__auto__)
{var seq__34837__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34837__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34837__$1);{
var G__34845 = cljs.core.chunk_rest.call(null,seq__34837__$1);
var G__34846 = c__4148__auto__;
var G__34847 = cljs.core.count.call(null,c__4148__auto__);
var G__34848 = 0;
seq__34837 = G__34845;
chunk__34838 = G__34846;
count__34839 = G__34847;
i__34840 = G__34848;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__34837__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34849 = cljs.core.next.call(null,seq__34837__$1);
var G__34850 = null;
var G__34851 = 0;
var G__34852 = 0;
seq__34837 = G__34849;
chunk__34838 = G__34850;
count__34839 = G__34851;
i__34840 = G__34852;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__34854 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__34854,0,null);var start_wrap = cljs.core.nth.call(null,vec__34854,1,null);var end_wrap = cljs.core.nth.call(null,vec__34854,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__34855 = wrapper.lastChild;
var G__34856 = (level - 1);
wrapper = G__34855;
level = G__34856;
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
domina.DomContent = (function (){var obj34858 = {};return obj34858;
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
log_debug.cljs$lang$applyTo = (function (arglist__34859){
var mesg = cljs.core.seq(arglist__34859);
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
log.cljs$lang$applyTo = (function (arglist__34860){
var mesg = cljs.core.seq(arglist__34860);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__34861){
var contents = cljs.core.seq(arglist__34861);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__34862_SHARP_){return p1__34862_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__34863_SHARP_,p2__34864_SHARP_){return goog.dom.insertChildAt(p1__34863_SHARP_,p2__34864_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34866_SHARP_,p2__34865_SHARP_){return goog.dom.insertSiblingBefore(p2__34865_SHARP_,p1__34866_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34868_SHARP_,p2__34867_SHARP_){return goog.dom.insertSiblingAfter(p2__34867_SHARP_,p1__34868_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__34870_SHARP_,p2__34869_SHARP_){return goog.dom.replaceNode(p2__34869_SHARP_,p1__34870_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__34875_34879 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34876_34880 = null;var count__34877_34881 = 0;var i__34878_34882 = 0;while(true){
if((i__34878_34882 < count__34877_34881))
{var n_34883 = cljs.core._nth.call(null,chunk__34876_34880,i__34878_34882);goog.style.setStyle(n_34883,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34884 = seq__34875_34879;
var G__34885 = chunk__34876_34880;
var G__34886 = count__34877_34881;
var G__34887 = (i__34878_34882 + 1);
seq__34875_34879 = G__34884;
chunk__34876_34880 = G__34885;
count__34877_34881 = G__34886;
i__34878_34882 = G__34887;
continue;
}
} else
{var temp__4092__auto___34888 = cljs.core.seq.call(null,seq__34875_34879);if(temp__4092__auto___34888)
{var seq__34875_34889__$1 = temp__4092__auto___34888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34875_34889__$1))
{var c__4148__auto___34890 = cljs.core.chunk_first.call(null,seq__34875_34889__$1);{
var G__34891 = cljs.core.chunk_rest.call(null,seq__34875_34889__$1);
var G__34892 = c__4148__auto___34890;
var G__34893 = cljs.core.count.call(null,c__4148__auto___34890);
var G__34894 = 0;
seq__34875_34879 = G__34891;
chunk__34876_34880 = G__34892;
count__34877_34881 = G__34893;
i__34878_34882 = G__34894;
continue;
}
} else
{var n_34895 = cljs.core.first.call(null,seq__34875_34889__$1);goog.style.setStyle(n_34895,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34896 = cljs.core.next.call(null,seq__34875_34889__$1);
var G__34897 = null;
var G__34898 = 0;
var G__34899 = 0;
seq__34875_34879 = G__34896;
chunk__34876_34880 = G__34897;
count__34877_34881 = G__34898;
i__34878_34882 = G__34899;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__34900){
var content = cljs.core.first(arglist__34900);
arglist__34900 = cljs.core.next(arglist__34900);
var name = cljs.core.first(arglist__34900);
var value = cljs.core.rest(arglist__34900);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__34905_34909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34906_34910 = null;var count__34907_34911 = 0;var i__34908_34912 = 0;while(true){
if((i__34908_34912 < count__34907_34911))
{var n_34913 = cljs.core._nth.call(null,chunk__34906_34910,i__34908_34912);n_34913.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34914 = seq__34905_34909;
var G__34915 = chunk__34906_34910;
var G__34916 = count__34907_34911;
var G__34917 = (i__34908_34912 + 1);
seq__34905_34909 = G__34914;
chunk__34906_34910 = G__34915;
count__34907_34911 = G__34916;
i__34908_34912 = G__34917;
continue;
}
} else
{var temp__4092__auto___34918 = cljs.core.seq.call(null,seq__34905_34909);if(temp__4092__auto___34918)
{var seq__34905_34919__$1 = temp__4092__auto___34918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34905_34919__$1))
{var c__4148__auto___34920 = cljs.core.chunk_first.call(null,seq__34905_34919__$1);{
var G__34921 = cljs.core.chunk_rest.call(null,seq__34905_34919__$1);
var G__34922 = c__4148__auto___34920;
var G__34923 = cljs.core.count.call(null,c__4148__auto___34920);
var G__34924 = 0;
seq__34905_34909 = G__34921;
chunk__34906_34910 = G__34922;
count__34907_34911 = G__34923;
i__34908_34912 = G__34924;
continue;
}
} else
{var n_34925 = cljs.core.first.call(null,seq__34905_34919__$1);n_34925.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34926 = cljs.core.next.call(null,seq__34905_34919__$1);
var G__34927 = null;
var G__34928 = 0;
var G__34929 = 0;
seq__34905_34909 = G__34926;
chunk__34906_34910 = G__34927;
count__34907_34911 = G__34928;
i__34908_34912 = G__34929;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__34930){
var content = cljs.core.first(arglist__34930);
arglist__34930 = cljs.core.next(arglist__34930);
var name = cljs.core.first(arglist__34930);
var value = cljs.core.rest(arglist__34930);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__34935_34939 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34936_34940 = null;var count__34937_34941 = 0;var i__34938_34942 = 0;while(true){
if((i__34938_34942 < count__34937_34941))
{var n_34943 = cljs.core._nth.call(null,chunk__34936_34940,i__34938_34942);n_34943.removeAttribute(cljs.core.name.call(null,name));
{
var G__34944 = seq__34935_34939;
var G__34945 = chunk__34936_34940;
var G__34946 = count__34937_34941;
var G__34947 = (i__34938_34942 + 1);
seq__34935_34939 = G__34944;
chunk__34936_34940 = G__34945;
count__34937_34941 = G__34946;
i__34938_34942 = G__34947;
continue;
}
} else
{var temp__4092__auto___34948 = cljs.core.seq.call(null,seq__34935_34939);if(temp__4092__auto___34948)
{var seq__34935_34949__$1 = temp__4092__auto___34948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34935_34949__$1))
{var c__4148__auto___34950 = cljs.core.chunk_first.call(null,seq__34935_34949__$1);{
var G__34951 = cljs.core.chunk_rest.call(null,seq__34935_34949__$1);
var G__34952 = c__4148__auto___34950;
var G__34953 = cljs.core.count.call(null,c__4148__auto___34950);
var G__34954 = 0;
seq__34935_34939 = G__34951;
chunk__34936_34940 = G__34952;
count__34937_34941 = G__34953;
i__34938_34942 = G__34954;
continue;
}
} else
{var n_34955 = cljs.core.first.call(null,seq__34935_34949__$1);n_34955.removeAttribute(cljs.core.name.call(null,name));
{
var G__34956 = cljs.core.next.call(null,seq__34935_34949__$1);
var G__34957 = null;
var G__34958 = 0;
var G__34959 = 0;
seq__34935_34939 = G__34956;
chunk__34936_34940 = G__34957;
count__34937_34941 = G__34958;
i__34938_34942 = G__34959;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__34961 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__34961,0,null);var v = cljs.core.nth.call(null,vec__34961,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__34962_SHARP_){var attr = attrs__$1.item(p1__34962_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__34969_34975 = cljs.core.seq.call(null,styles);var chunk__34970_34976 = null;var count__34971_34977 = 0;var i__34972_34978 = 0;while(true){
if((i__34972_34978 < count__34971_34977))
{var vec__34973_34979 = cljs.core._nth.call(null,chunk__34970_34976,i__34972_34978);var name_34980 = cljs.core.nth.call(null,vec__34973_34979,0,null);var value_34981 = cljs.core.nth.call(null,vec__34973_34979,1,null);domina.set_style_BANG_.call(null,content,name_34980,value_34981);
{
var G__34982 = seq__34969_34975;
var G__34983 = chunk__34970_34976;
var G__34984 = count__34971_34977;
var G__34985 = (i__34972_34978 + 1);
seq__34969_34975 = G__34982;
chunk__34970_34976 = G__34983;
count__34971_34977 = G__34984;
i__34972_34978 = G__34985;
continue;
}
} else
{var temp__4092__auto___34986 = cljs.core.seq.call(null,seq__34969_34975);if(temp__4092__auto___34986)
{var seq__34969_34987__$1 = temp__4092__auto___34986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34969_34987__$1))
{var c__4148__auto___34988 = cljs.core.chunk_first.call(null,seq__34969_34987__$1);{
var G__34989 = cljs.core.chunk_rest.call(null,seq__34969_34987__$1);
var G__34990 = c__4148__auto___34988;
var G__34991 = cljs.core.count.call(null,c__4148__auto___34988);
var G__34992 = 0;
seq__34969_34975 = G__34989;
chunk__34970_34976 = G__34990;
count__34971_34977 = G__34991;
i__34972_34978 = G__34992;
continue;
}
} else
{var vec__34974_34993 = cljs.core.first.call(null,seq__34969_34987__$1);var name_34994 = cljs.core.nth.call(null,vec__34974_34993,0,null);var value_34995 = cljs.core.nth.call(null,vec__34974_34993,1,null);domina.set_style_BANG_.call(null,content,name_34994,value_34995);
{
var G__34996 = cljs.core.next.call(null,seq__34969_34987__$1);
var G__34997 = null;
var G__34998 = 0;
var G__34999 = 0;
seq__34969_34975 = G__34996;
chunk__34970_34976 = G__34997;
count__34971_34977 = G__34998;
i__34972_34978 = G__34999;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__35006_35012 = cljs.core.seq.call(null,attrs);var chunk__35007_35013 = null;var count__35008_35014 = 0;var i__35009_35015 = 0;while(true){
if((i__35009_35015 < count__35008_35014))
{var vec__35010_35016 = cljs.core._nth.call(null,chunk__35007_35013,i__35009_35015);var name_35017 = cljs.core.nth.call(null,vec__35010_35016,0,null);var value_35018 = cljs.core.nth.call(null,vec__35010_35016,1,null);domina.set_attr_BANG_.call(null,content,name_35017,value_35018);
{
var G__35019 = seq__35006_35012;
var G__35020 = chunk__35007_35013;
var G__35021 = count__35008_35014;
var G__35022 = (i__35009_35015 + 1);
seq__35006_35012 = G__35019;
chunk__35007_35013 = G__35020;
count__35008_35014 = G__35021;
i__35009_35015 = G__35022;
continue;
}
} else
{var temp__4092__auto___35023 = cljs.core.seq.call(null,seq__35006_35012);if(temp__4092__auto___35023)
{var seq__35006_35024__$1 = temp__4092__auto___35023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35006_35024__$1))
{var c__4148__auto___35025 = cljs.core.chunk_first.call(null,seq__35006_35024__$1);{
var G__35026 = cljs.core.chunk_rest.call(null,seq__35006_35024__$1);
var G__35027 = c__4148__auto___35025;
var G__35028 = cljs.core.count.call(null,c__4148__auto___35025);
var G__35029 = 0;
seq__35006_35012 = G__35026;
chunk__35007_35013 = G__35027;
count__35008_35014 = G__35028;
i__35009_35015 = G__35029;
continue;
}
} else
{var vec__35011_35030 = cljs.core.first.call(null,seq__35006_35024__$1);var name_35031 = cljs.core.nth.call(null,vec__35011_35030,0,null);var value_35032 = cljs.core.nth.call(null,vec__35011_35030,1,null);domina.set_attr_BANG_.call(null,content,name_35031,value_35032);
{
var G__35033 = cljs.core.next.call(null,seq__35006_35024__$1);
var G__35034 = null;
var G__35035 = 0;
var G__35036 = 0;
seq__35006_35012 = G__35033;
chunk__35007_35013 = G__35034;
count__35008_35014 = G__35035;
i__35009_35015 = G__35036;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__35041_35045 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35042_35046 = null;var count__35043_35047 = 0;var i__35044_35048 = 0;while(true){
if((i__35044_35048 < count__35043_35047))
{var node_35049 = cljs.core._nth.call(null,chunk__35042_35046,i__35044_35048);goog.dom.classes.add(node_35049,class$);
{
var G__35050 = seq__35041_35045;
var G__35051 = chunk__35042_35046;
var G__35052 = count__35043_35047;
var G__35053 = (i__35044_35048 + 1);
seq__35041_35045 = G__35050;
chunk__35042_35046 = G__35051;
count__35043_35047 = G__35052;
i__35044_35048 = G__35053;
continue;
}
} else
{var temp__4092__auto___35054 = cljs.core.seq.call(null,seq__35041_35045);if(temp__4092__auto___35054)
{var seq__35041_35055__$1 = temp__4092__auto___35054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35041_35055__$1))
{var c__4148__auto___35056 = cljs.core.chunk_first.call(null,seq__35041_35055__$1);{
var G__35057 = cljs.core.chunk_rest.call(null,seq__35041_35055__$1);
var G__35058 = c__4148__auto___35056;
var G__35059 = cljs.core.count.call(null,c__4148__auto___35056);
var G__35060 = 0;
seq__35041_35045 = G__35057;
chunk__35042_35046 = G__35058;
count__35043_35047 = G__35059;
i__35044_35048 = G__35060;
continue;
}
} else
{var node_35061 = cljs.core.first.call(null,seq__35041_35055__$1);goog.dom.classes.add(node_35061,class$);
{
var G__35062 = cljs.core.next.call(null,seq__35041_35055__$1);
var G__35063 = null;
var G__35064 = 0;
var G__35065 = 0;
seq__35041_35045 = G__35062;
chunk__35042_35046 = G__35063;
count__35043_35047 = G__35064;
i__35044_35048 = G__35065;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__35070_35074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35071_35075 = null;var count__35072_35076 = 0;var i__35073_35077 = 0;while(true){
if((i__35073_35077 < count__35072_35076))
{var node_35078 = cljs.core._nth.call(null,chunk__35071_35075,i__35073_35077);goog.dom.classes.remove(node_35078,class$);
{
var G__35079 = seq__35070_35074;
var G__35080 = chunk__35071_35075;
var G__35081 = count__35072_35076;
var G__35082 = (i__35073_35077 + 1);
seq__35070_35074 = G__35079;
chunk__35071_35075 = G__35080;
count__35072_35076 = G__35081;
i__35073_35077 = G__35082;
continue;
}
} else
{var temp__4092__auto___35083 = cljs.core.seq.call(null,seq__35070_35074);if(temp__4092__auto___35083)
{var seq__35070_35084__$1 = temp__4092__auto___35083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35070_35084__$1))
{var c__4148__auto___35085 = cljs.core.chunk_first.call(null,seq__35070_35084__$1);{
var G__35086 = cljs.core.chunk_rest.call(null,seq__35070_35084__$1);
var G__35087 = c__4148__auto___35085;
var G__35088 = cljs.core.count.call(null,c__4148__auto___35085);
var G__35089 = 0;
seq__35070_35074 = G__35086;
chunk__35071_35075 = G__35087;
count__35072_35076 = G__35088;
i__35073_35077 = G__35089;
continue;
}
} else
{var node_35090 = cljs.core.first.call(null,seq__35070_35084__$1);goog.dom.classes.remove(node_35090,class$);
{
var G__35091 = cljs.core.next.call(null,seq__35070_35084__$1);
var G__35092 = null;
var G__35093 = 0;
var G__35094 = 0;
seq__35070_35074 = G__35091;
chunk__35071_35075 = G__35092;
count__35072_35076 = G__35093;
i__35073_35077 = G__35094;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__35099_35103 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35100_35104 = null;var count__35101_35105 = 0;var i__35102_35106 = 0;while(true){
if((i__35102_35106 < count__35101_35105))
{var node_35107 = cljs.core._nth.call(null,chunk__35100_35104,i__35102_35106);goog.dom.classes.toggle(node_35107,class$);
{
var G__35108 = seq__35099_35103;
var G__35109 = chunk__35100_35104;
var G__35110 = count__35101_35105;
var G__35111 = (i__35102_35106 + 1);
seq__35099_35103 = G__35108;
chunk__35100_35104 = G__35109;
count__35101_35105 = G__35110;
i__35102_35106 = G__35111;
continue;
}
} else
{var temp__4092__auto___35112 = cljs.core.seq.call(null,seq__35099_35103);if(temp__4092__auto___35112)
{var seq__35099_35113__$1 = temp__4092__auto___35112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35099_35113__$1))
{var c__4148__auto___35114 = cljs.core.chunk_first.call(null,seq__35099_35113__$1);{
var G__35115 = cljs.core.chunk_rest.call(null,seq__35099_35113__$1);
var G__35116 = c__4148__auto___35114;
var G__35117 = cljs.core.count.call(null,c__4148__auto___35114);
var G__35118 = 0;
seq__35099_35103 = G__35115;
chunk__35100_35104 = G__35116;
count__35101_35105 = G__35117;
i__35102_35106 = G__35118;
continue;
}
} else
{var node_35119 = cljs.core.first.call(null,seq__35099_35113__$1);goog.dom.classes.toggle(node_35119,class$);
{
var G__35120 = cljs.core.next.call(null,seq__35099_35113__$1);
var G__35121 = null;
var G__35122 = 0;
var G__35123 = 0;
seq__35099_35103 = G__35120;
chunk__35100_35104 = G__35121;
count__35101_35105 = G__35122;
i__35102_35106 = G__35123;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_35132__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__35128_35133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35129_35134 = null;var count__35130_35135 = 0;var i__35131_35136 = 0;while(true){
if((i__35131_35136 < count__35130_35135))
{var node_35137 = cljs.core._nth.call(null,chunk__35129_35134,i__35131_35136);goog.dom.classes.set(node_35137,classes_35132__$1);
{
var G__35138 = seq__35128_35133;
var G__35139 = chunk__35129_35134;
var G__35140 = count__35130_35135;
var G__35141 = (i__35131_35136 + 1);
seq__35128_35133 = G__35138;
chunk__35129_35134 = G__35139;
count__35130_35135 = G__35140;
i__35131_35136 = G__35141;
continue;
}
} else
{var temp__4092__auto___35142 = cljs.core.seq.call(null,seq__35128_35133);if(temp__4092__auto___35142)
{var seq__35128_35143__$1 = temp__4092__auto___35142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35128_35143__$1))
{var c__4148__auto___35144 = cljs.core.chunk_first.call(null,seq__35128_35143__$1);{
var G__35145 = cljs.core.chunk_rest.call(null,seq__35128_35143__$1);
var G__35146 = c__4148__auto___35144;
var G__35147 = cljs.core.count.call(null,c__4148__auto___35144);
var G__35148 = 0;
seq__35128_35133 = G__35145;
chunk__35129_35134 = G__35146;
count__35130_35135 = G__35147;
i__35131_35136 = G__35148;
continue;
}
} else
{var node_35149 = cljs.core.first.call(null,seq__35128_35143__$1);goog.dom.classes.set(node_35149,classes_35132__$1);
{
var G__35150 = cljs.core.next.call(null,seq__35128_35143__$1);
var G__35151 = null;
var G__35152 = 0;
var G__35153 = 0;
seq__35128_35133 = G__35150;
chunk__35129_35134 = G__35151;
count__35130_35135 = G__35152;
i__35131_35136 = G__35153;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__35158_35162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35159_35163 = null;var count__35160_35164 = 0;var i__35161_35165 = 0;while(true){
if((i__35161_35165 < count__35160_35164))
{var node_35166 = cljs.core._nth.call(null,chunk__35159_35163,i__35161_35165);goog.dom.setTextContent(node_35166,value);
{
var G__35167 = seq__35158_35162;
var G__35168 = chunk__35159_35163;
var G__35169 = count__35160_35164;
var G__35170 = (i__35161_35165 + 1);
seq__35158_35162 = G__35167;
chunk__35159_35163 = G__35168;
count__35160_35164 = G__35169;
i__35161_35165 = G__35170;
continue;
}
} else
{var temp__4092__auto___35171 = cljs.core.seq.call(null,seq__35158_35162);if(temp__4092__auto___35171)
{var seq__35158_35172__$1 = temp__4092__auto___35171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35158_35172__$1))
{var c__4148__auto___35173 = cljs.core.chunk_first.call(null,seq__35158_35172__$1);{
var G__35174 = cljs.core.chunk_rest.call(null,seq__35158_35172__$1);
var G__35175 = c__4148__auto___35173;
var G__35176 = cljs.core.count.call(null,c__4148__auto___35173);
var G__35177 = 0;
seq__35158_35162 = G__35174;
chunk__35159_35163 = G__35175;
count__35160_35164 = G__35176;
i__35161_35165 = G__35177;
continue;
}
} else
{var node_35178 = cljs.core.first.call(null,seq__35158_35172__$1);goog.dom.setTextContent(node_35178,value);
{
var G__35179 = cljs.core.next.call(null,seq__35158_35172__$1);
var G__35180 = null;
var G__35181 = 0;
var G__35182 = 0;
seq__35158_35162 = G__35179;
chunk__35159_35163 = G__35180;
count__35160_35164 = G__35181;
i__35161_35165 = G__35182;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__35187_35191 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35188_35192 = null;var count__35189_35193 = 0;var i__35190_35194 = 0;while(true){
if((i__35190_35194 < count__35189_35193))
{var node_35195 = cljs.core._nth.call(null,chunk__35188_35192,i__35190_35194);goog.dom.forms.setValue(node_35195,value);
{
var G__35196 = seq__35187_35191;
var G__35197 = chunk__35188_35192;
var G__35198 = count__35189_35193;
var G__35199 = (i__35190_35194 + 1);
seq__35187_35191 = G__35196;
chunk__35188_35192 = G__35197;
count__35189_35193 = G__35198;
i__35190_35194 = G__35199;
continue;
}
} else
{var temp__4092__auto___35200 = cljs.core.seq.call(null,seq__35187_35191);if(temp__4092__auto___35200)
{var seq__35187_35201__$1 = temp__4092__auto___35200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35187_35201__$1))
{var c__4148__auto___35202 = cljs.core.chunk_first.call(null,seq__35187_35201__$1);{
var G__35203 = cljs.core.chunk_rest.call(null,seq__35187_35201__$1);
var G__35204 = c__4148__auto___35202;
var G__35205 = cljs.core.count.call(null,c__4148__auto___35202);
var G__35206 = 0;
seq__35187_35191 = G__35203;
chunk__35188_35192 = G__35204;
count__35189_35193 = G__35205;
i__35190_35194 = G__35206;
continue;
}
} else
{var node_35207 = cljs.core.first.call(null,seq__35187_35201__$1);goog.dom.forms.setValue(node_35207,value);
{
var G__35208 = cljs.core.next.call(null,seq__35187_35201__$1);
var G__35209 = null;
var G__35210 = 0;
var G__35211 = 0;
seq__35187_35191 = G__35208;
chunk__35188_35192 = G__35209;
count__35189_35193 = G__35210;
i__35190_35194 = G__35211;
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
{var value_35222 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__35218_35223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35219_35224 = null;var count__35220_35225 = 0;var i__35221_35226 = 0;while(true){
if((i__35221_35226 < count__35220_35225))
{var node_35227 = cljs.core._nth.call(null,chunk__35219_35224,i__35221_35226);node_35227.innerHTML = value_35222;
{
var G__35228 = seq__35218_35223;
var G__35229 = chunk__35219_35224;
var G__35230 = count__35220_35225;
var G__35231 = (i__35221_35226 + 1);
seq__35218_35223 = G__35228;
chunk__35219_35224 = G__35229;
count__35220_35225 = G__35230;
i__35221_35226 = G__35231;
continue;
}
} else
{var temp__4092__auto___35232 = cljs.core.seq.call(null,seq__35218_35223);if(temp__4092__auto___35232)
{var seq__35218_35233__$1 = temp__4092__auto___35232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35218_35233__$1))
{var c__4148__auto___35234 = cljs.core.chunk_first.call(null,seq__35218_35233__$1);{
var G__35235 = cljs.core.chunk_rest.call(null,seq__35218_35233__$1);
var G__35236 = c__4148__auto___35234;
var G__35237 = cljs.core.count.call(null,c__4148__auto___35234);
var G__35238 = 0;
seq__35218_35223 = G__35235;
chunk__35219_35224 = G__35236;
count__35220_35225 = G__35237;
i__35221_35226 = G__35238;
continue;
}
} else
{var node_35239 = cljs.core.first.call(null,seq__35218_35233__$1);node_35239.innerHTML = value_35222;
{
var G__35240 = cljs.core.next.call(null,seq__35218_35233__$1);
var G__35241 = null;
var G__35242 = 0;
var G__35243 = 0;
seq__35218_35223 = G__35240;
chunk__35219_35224 = G__35241;
count__35220_35225 = G__35242;
i__35221_35226 = G__35243;
continue;
}
}
} else
{}
}
break;
}
}catch (e35217){if((e35217 instanceof Error))
{var e_35244 = e35217;domina.replace_children_BANG_.call(null,content,value_35222);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35217;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__35251_35255 = cljs.core.seq.call(null,children);var chunk__35252_35256 = null;var count__35253_35257 = 0;var i__35254_35258 = 0;while(true){
if((i__35254_35258 < count__35253_35257))
{var child_35259 = cljs.core._nth.call(null,chunk__35252_35256,i__35254_35258);frag.appendChild(child_35259);
{
var G__35260 = seq__35251_35255;
var G__35261 = chunk__35252_35256;
var G__35262 = count__35253_35257;
var G__35263 = (i__35254_35258 + 1);
seq__35251_35255 = G__35260;
chunk__35252_35256 = G__35261;
count__35253_35257 = G__35262;
i__35254_35258 = G__35263;
continue;
}
} else
{var temp__4092__auto___35264 = cljs.core.seq.call(null,seq__35251_35255);if(temp__4092__auto___35264)
{var seq__35251_35265__$1 = temp__4092__auto___35264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35251_35265__$1))
{var c__4148__auto___35266 = cljs.core.chunk_first.call(null,seq__35251_35265__$1);{
var G__35267 = cljs.core.chunk_rest.call(null,seq__35251_35265__$1);
var G__35268 = c__4148__auto___35266;
var G__35269 = cljs.core.count.call(null,c__4148__auto___35266);
var G__35270 = 0;
seq__35251_35255 = G__35267;
chunk__35252_35256 = G__35268;
count__35253_35257 = G__35269;
i__35254_35258 = G__35270;
continue;
}
} else
{var child_35271 = cljs.core.first.call(null,seq__35251_35265__$1);frag.appendChild(child_35271);
{
var G__35272 = cljs.core.next.call(null,seq__35251_35265__$1);
var G__35273 = null;
var G__35274 = 0;
var G__35275 = 0;
seq__35251_35255 = G__35272;
chunk__35252_35256 = G__35273;
count__35253_35257 = G__35274;
i__35254_35258 = G__35275;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__35245_SHARP_,p2__35246_SHARP_){return f.call(null,p1__35245_SHARP_,p2__35246_SHARP_);
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
{if((function (){var G__35277 = list_thing;if(G__35277)
{var bit__4050__auto__ = (G__35277.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35277.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35277);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35277);
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
{if((function (){var G__35278 = content;if(G__35278)
{var bit__4050__auto__ = (G__35278.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35278.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35278);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35278);
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
{if((function (){var G__35279 = content;if(G__35279)
{var bit__4050__auto__ = (G__35279.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__35279.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35279.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35279);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35279);
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
